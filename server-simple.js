const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// 设置默认页面为splash.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "splash.html"));
});

// 模拟数据存储（内存存储，重启后数据会丢失）
let heartCount = 0;
let messages = [];
let userLocations = [];
let votes = {};

// 心跳计数器API
app.get("/api/heart-count", (req, res) => {
  res.json({ count: heartCount });
});

app.post("/api/heart-count", (req, res) => {
  heartCount++;
  res.json({ count: heartCount });
});

// 留言墙API
app.get("/api/messages", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedMessages = messages.slice(start, end);
  const totalPages = Math.ceil(messages.length / limit);

  res.json({
    messages: paginatedMessages,
    currentPage: page,
    totalPages: totalPages,
    totalMessages: messages.length,
  });
});

app.post("/api/messages", (req, res) => {
  const { username, content } = req.body;

  if (!username || !content) {
    return res.status(400).json({ error: "用户名和内容不能为空" });
  }

  const newMessage = {
    id: Date.now(),
    username: username,
    content: content,
    created_at: new Date().toISOString(),
    image_url: null,
  };

  messages.unshift(newMessage);
  res.status(201).json({ message: "留言提交成功", data: newMessage });
});

// 投票系统API
app.get("/api/poll-options", (req, res) => {
  const options = [
    {
      id: 1,
      poll_id: 1,
      option_text: "《2gether》中的甜蜜对视",
      votes: votes[1] || 0,
    },
    {
      id: 2,
      poll_id: 1,
      option_text: "《Still 2gether》的幕后花絮",
      votes: votes[2] || 0,
    },
    {
      id: 3,
      poll_id: 1,
      option_text: "颁奖典礼上的默契配合",
      votes: votes[3] || 0,
    },
    {
      id: 4,
      poll_id: 1,
      option_text: "社交媒体上的互动瞬间",
      votes: votes[4] || 0,
    },
    {
      id: 5,
      poll_id: 1,
      option_text: "综艺节目中的搞笑时刻",
      votes: votes[5] || 0,
    },
  ];
  res.json({ options: options });
});

app.post("/api/vote", (req, res) => {
  const { option_id } = req.body;

  if (!option_id) {
    return res.status(400).json({ error: "请选择投票选项" });
  }

  votes[option_id] = (votes[option_id] || 0) + 1;

  // 返回更新后的投票结果
  const options = [
    {
      id: 1,
      poll_id: 1,
      option_text: "《2gether》中的甜蜜对视",
      votes: votes[1] || 0,
    },
    {
      id: 2,
      poll_id: 1,
      option_text: "《Still 2gether》的幕后花絮",
      votes: votes[2] || 0,
    },
    {
      id: 3,
      poll_id: 1,
      option_text: "颁奖典礼上的默契配合",
      votes: votes[3] || 0,
    },
    {
      id: 4,
      poll_id: 1,
      option_text: "社交媒体上的互动瞬间",
      votes: votes[4] || 0,
    },
    {
      id: 5,
      poll_id: 1,
      option_text: "综艺节目中的搞笑时刻",
      votes: votes[5] || 0,
    },
  ];

  res.json({
    message: "投票成功",
    options: options,
  });
});

// 网站统计API
app.get("/api/stats", (req, res) => {
  const stats = {
    totalMessages: messages.length,
    todayMessages: messages.filter((msg) => {
      const today = new Date().toDateString();
      const msgDate = new Date(msg.created_at).toDateString();
      return today === msgDate;
    }).length,
    heartCount: heartCount,
    totalVotes: Object.values(votes).reduce((sum, count) => sum + count, 0),
    totalUsers: userLocations.length,
  };
  res.json(stats);
});

// 用户位置API
app.post("/api/user-location", (req, res) => {
  const { username, country, city } = req.body;

  if (!username || !country || !city) {
    return res.status(400).json({ error: "用户名、国家和城市不能为空" });
  }

  // 检查是否已存在
  const existingIndex = userLocations.findIndex(
    (loc) => loc.username === username
  );

  if (existingIndex >= 0) {
    // 更新现有记录
    userLocations[existingIndex] = {
      ...userLocations[existingIndex],
      country,
      city,
      updated_at: new Date().toISOString(),
    };
    res.json({ message: "位置信息更新成功" });
  } else {
    // 创建新记录
    const newLocation = {
      id: Date.now(),
      username,
      country,
      city,
      created_at: new Date().toISOString(),
    };
    userLocations.push(newLocation);
    res.status(201).json({ message: "位置信息提交成功" });
  }
});

app.get("/api/user-locations", (req, res) => {
  res.json({ locations: userLocations });
});

app.get("/api/country-stats", (req, res) => {
  const countryCount = {};
  userLocations.forEach((loc) => {
    countryCount[loc.country] = (countryCount[loc.country] || 0) + 1;
  });

  const stats = Object.entries(countryCount)
    .map(([country, count]) => ({
      country,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  res.json({ stats: stats });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`简化版服务器运行在 http://localhost:${PORT}`);
  console.log("注意：此版本使用内存存储，重启后数据会丢失");
  console.log("如需持久化存储，请安装完整版本");
});

// 优雅关闭
process.on("SIGINT", () => {
  console.log("服务器正在关闭...");
  process.exit(0);
});
