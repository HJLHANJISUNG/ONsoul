const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// 设置默认页面为splash.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "splash.html"));
});

// 创建uploads文件夹
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// 配置multer用于文件上传
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB限制
  },
  fileFilter: function (req, file, cb) {
    // 只允许图片文件
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("只允许上传图片文件！"), false);
    }
  },
});

// 创建数据库连接
const dbPath = process.env.NODE_ENV === 'production' ? '/app/data/ohmnanon.db' : 'ohmnanon.db';
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("数据库连接失败:", err.message);
  } else {
    console.log("成功连接到SQLite数据库");
    initDatabase();
  }
});

// 初始化数据库表
function initDatabase() {
  // 留言表
  db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        ip_address TEXT,
        user_agent TEXT
    )`);

  // 心跳计数器表
  db.run(`CREATE TABLE IF NOT EXISTS heart_count (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        count INTEGER DEFAULT 0,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

  // 用户投票表
  db.run(`CREATE TABLE IF NOT EXISTS votes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        poll_id INTEGER NOT NULL,
        option_id INTEGER NOT NULL,
        ip_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

  // 投票选项表
  db.run(`CREATE TABLE IF NOT EXISTS poll_options (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        poll_id INTEGER NOT NULL,
        option_text TEXT NOT NULL,
        votes INTEGER DEFAULT 0
    )`);

  // 用户位置信息表
  db.run(`CREATE TABLE IF NOT EXISTS user_locations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        country TEXT NOT NULL,
        city TEXT NOT NULL,
        latitude REAL,
        longitude REAL,
        ip_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

  // 初始化心跳计数器
  db.get("SELECT COUNT(*) as count FROM heart_count", (err, row) => {
    if (row.count === 0) {
      db.run("INSERT INTO heart_count (count) VALUES (0)");
    }
  });

  // 初始化投票选项
  const pollOptions = [
    { poll_id: 1, option_text: "《2gether》中的甜蜜对视" },
    { poll_id: 1, option_text: "《Still 2gether》的幕后花絮" },
    { poll_id: 1, option_text: "颁奖典礼上的默契配合" },
    { poll_id: 1, option_text: "社交媒体上的互动瞬间" },
    { poll_id: 1, option_text: "综艺节目中的搞笑时刻" },
  ];

  db.get("SELECT COUNT(*) as count FROM poll_options", (err, row) => {
    if (row.count === 0) {
      const stmt = db.prepare(
        "INSERT INTO poll_options (poll_id, option_text) VALUES (?, ?)"
      );
      pollOptions.forEach((option) => {
        stmt.run(option.poll_id, option.option_text);
      });
      stmt.finalize();
    }
  });
}

// API路由

// 获取留言列表（支持分页）
app.get("/api/messages", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const query = `
        SELECT * FROM messages 
        ORDER BY created_at DESC 
        LIMIT ? OFFSET ?
    `;
  const countQuery = "SELECT COUNT(*) as total FROM messages";

  db.get(countQuery, (err, countRow) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    db.all(query, [limit, offset], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        messages: rows,
        pagination: {
          current_page: page,
          total_pages: Math.ceil(countRow.total / limit),
          total_items: countRow.total,
          items_per_page: limit,
        },
      });
    });
  });
});

// 提交留言
app.post("/api/messages", upload.single("image"), (req, res) => {
  const { username, content } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const ipAddress = req.ip || req.connection.remoteAddress;
  const userAgent = req.get("User-Agent");

  if (!username || !content) {
    return res.status(400).json({ error: "用户名和内容不能为空" });
  }

  const query = `
        INSERT INTO messages (username, content, image_url, ip_address, user_agent)
        VALUES (?, ?, ?, ?, ?)
    `;

  db.run(
    query,
    [username, content, imageUrl, ipAddress, userAgent],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // 返回新创建的留言
      db.get(
        "SELECT * FROM messages WHERE id = ?",
        [this.lastID],
        (err, row) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ message: "留言提交成功", data: row });
        }
      );
    }
  );
});

// 获取心跳计数
app.get("/api/heart-count", (req, res) => {
  db.get(
    "SELECT count FROM heart_count ORDER BY id DESC LIMIT 1",
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ count: row ? row.count : 0 });
    }
  );
});

// 增加心跳计数
app.post("/api/heart-count", (req, res) => {
  db.run(
    "UPDATE heart_count SET count = count + 1, updated_at = CURRENT_TIMESTAMP WHERE id = (SELECT MAX(id) FROM heart_count)",
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // 返回更新后的计数
      db.get(
        "SELECT count FROM heart_count ORDER BY id DESC LIMIT 1",
        (err, row) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.json({ count: row.count });
        }
      );
    }
  );
});

// 获取投票选项
app.get("/api/poll-options", (req, res) => {
  db.all("SELECT * FROM poll_options ORDER BY id", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ options: rows });
  });
});

// 提交投票
app.post("/api/vote", (req, res) => {
  const { option_id } = req.body;
  const ipAddress = req.ip || req.connection.remoteAddress;

  if (!option_id) {
    return res.status(400).json({ error: "请选择投票选项" });
  }

  // 检查是否已经投票
  db.get(
    "SELECT id FROM votes WHERE ip_address = ? AND poll_id = 1",
    [ipAddress],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (row) {
        return res.status(400).json({ error: "您已经投过票了" });
      }

      // 记录投票
      db.run(
        "INSERT INTO votes (poll_id, option_id, ip_address) VALUES (1, ?, ?)",
        [option_id, ipAddress],
        function (err) {
          if (err) {
            return res.status(500).json({ error: err.message });
          }

          // 更新选项票数
          db.run(
            "UPDATE poll_options SET votes = votes + 1 WHERE id = ?",
            [option_id],
            (err) => {
              if (err) {
                return res.status(500).json({ error: err.message });
              }

              // 返回更新后的投票结果
              db.all("SELECT * FROM poll_options ORDER BY id", (err, rows) => {
                if (err) {
                  return res.status(500).json({ error: err.message });
                }
                res.json({
                  message: "投票成功",
                  options: rows,
                });
              });
            }
          );
        }
      );
    }
  );
});

// 获取网站统计信息
app.get("/api/stats", (req, res) => {
  const stats = {};

  // 获取留言总数
  db.get("SELECT COUNT(*) as count FROM messages", (err, row) => {
    stats.totalMessages = row.count;

    // 获取今日留言数
    db.get(
      "SELECT COUNT(*) as count FROM messages WHERE DATE(created_at) = DATE('now')",
      (err, row) => {
        stats.todayMessages = row.count;

        // 获取心跳总数
        db.get(
          "SELECT count FROM heart_count ORDER BY id DESC LIMIT 1",
          (err, row) => {
            stats.heartCount = row ? row.count : 0;

            // 获取投票总数
            db.get("SELECT COUNT(*) as count FROM votes", (err, row) => {
              stats.totalVotes = row.count;

              // 获取用户位置总数
              db.get(
                "SELECT COUNT(*) as count FROM user_locations",
                (err, row) => {
                  stats.totalUsers = row.count;

                  res.json(stats);
                }
              );
            });
          }
        );
      }
    );
  });
});

// 提交用户位置信息
app.post("/api/user-location", (req, res) => {
  const { username, country, city, latitude, longitude } = req.body;
  const ipAddress = req.ip || req.connection.remoteAddress;

  if (!username || !country || !city) {
    return res.status(400).json({ error: "用户名、国家和城市不能为空" });
  }

  // 检查是否已经提交过位置信息
  db.get(
    "SELECT id FROM user_locations WHERE username = ?",
    [username],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (row) {
        // 更新现有记录
        db.run(
          "UPDATE user_locations SET country = ?, city = ?, latitude = ?, longitude = ?, updated_at = CURRENT_TIMESTAMP WHERE username = ?",
          [country, city, latitude, longitude, username],
          function (err) {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.json({ message: "位置信息更新成功" });
          }
        );
      } else {
        // 创建新记录
        db.run(
          "INSERT INTO user_locations (username, country, city, latitude, longitude, ip_address) VALUES (?, ?, ?, ?, ?, ?)",
          [username, country, city, latitude, longitude, ipAddress],
          function (err) {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: "位置信息提交成功" });
          }
        );
      }
    }
  );
});

// 获取所有用户位置信息
app.get("/api/user-locations", (req, res) => {
  db.all(
    "SELECT username, country, city, latitude, longitude FROM user_locations ORDER BY created_at DESC",
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ locations: rows });
    }
  );
});

// 获取国家统计
app.get("/api/country-stats", (req, res) => {
  db.all(
    "SELECT country, COUNT(*) as count FROM user_locations GROUP BY country ORDER BY count DESC",
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ stats: rows });
    }
  );
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "服务器内部错误" });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log("数据库文件: ohmnanon.db");
});

// 优雅关闭
process.on("SIGINT", () => {
  db.close((err) => {
    if (err) {
      console.error("关闭数据库时出错:", err.message);
    } else {
      console.log("数据库连接已关闭");
    }
    process.exit(0);
  });
});
