// OHMNANON CP应援站配置文件
// 用户可以根据需要修改以下配置

const SITE_CONFIG = {
  // 网站基本信息
  siteInfo: {
    title: "OHMNANON - 陈炳林&黄乐荣 CP应援站",
    description:
      "从《2gether》到《Still 2gether》，从荧幕情侣到现实好友，OHMNANON用他们的真诚和默契，为我们带来了无数甜蜜瞬间。",
    keywords: "OHMNANON, 陈炳林, 黄乐荣, CP, 应援站, 2gether, Still 2gether",
    author: "OHMNANON Fans",
  },

  // CP信息
  cpInfo: {
    name: "OHMNANON",
    fullName: "陈炳林 & 黄乐荣",
    intro:
      "从《2gether》到《Still 2gether》，从荧幕情侣到现实好友，OHMNANON用他们的真诚和默契，为我们带来了无数甜蜜瞬间。让我们一起见证这份珍贵的友谊，共同守护这份美好。",
  },

  // 个人档案信息
  profiles: {
    ohm: {
      name: "陈炳林",
      englishName: "OHM",
      birthday: "1995年5月4日",
      works: ["《2gether》", "《Still 2gether》", "《Bad Buddy》"],
      social: {
        instagram: "#",
        twitter: "#",
        youtube: "#",
      },
    },
    nanon: {
      name: "黄乐荣",
      englishName: "NANON",
      birthday: "1997年12月18日",
      works: ["《2gether》", "《Still 2gether》", "《Bad Buddy》"],
      social: {
        instagram: "#",
        twitter: "#",
        youtube: "#",
      },
    },
  },

  // 轮播图配置
  carousel: {
    autoPlay: true,
    interval: 5000, // 自动播放间隔（毫秒）
    slides: [
      {
        image:
          "https://via.placeholder.com/1200x600/FFB6C1/FFFFFF?text=OHMNANON+最新活动",
        title: "最新活动",
        description: "关注OHMNANON的最新动态",
      },
      {
        image:
          "https://via.placeholder.com/1200x600/87CEEB/FFFFFF?text=热门视频剪辑",
        title: "热门视频剪辑",
        description: "精选甜蜜瞬间",
      },
      {
        image:
          "https://via.placeholder.com/1200x600/DDA0DD/FFFFFF?text=近期作品海报",
        title: "近期作品海报",
        description: "最新作品展示",
      },
    ],
  },

  // 作品信息
  works: {
    dramas: [
      {
        title: "2gether",
        type: "主演剧集",
        description: "Sarawat和Tine的甜蜜校园爱情故事",
        image: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=2gether",
      },
      {
        title: "Still 2gether",
        type: "主演剧集",
        description: "大学情侣的甜蜜续集",
        image:
          "https://via.placeholder.com/300x200/87CEEB/FFFFFF?text=Still+2gether",
      },
      {
        title: "Bad Buddy",
        type: "客串出演",
        description: "在剧中客串出演",
        image:
          "https://via.placeholder.com/300x200/DDA0DD/FFFFFF?text=Bad+Buddy",
      },
    ],
    variety: [
      {
        title: "《2gether》幕后花絮",
        link: "#",
      },
      {
        title: "《Still 2gether》采访",
        link: "#",
      },
      {
        title: "综艺节目合集",
        link: "#",
      },
    ],
  },

  // 甜蜜时刻
  moments: [
    {
      title: "颁奖礼对视",
      description: "甜蜜的眼神交流瞬间",
      image:
        "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=颁奖礼对视",
    },
    {
      title: "幕后花絮",
      description: "拍摄现场的温馨互动",
      image: "https://via.placeholder.com/300x200/87CEEB/FFFFFF?text=幕后花絮",
    },
    {
      title: "社交媒体互动",
      description: "隔空喊话的甜蜜瞬间",
      image:
        "https://via.placeholder.com/300x200/DDA0DD/FFFFFF?text=社交媒体互动",
    },
  ],

  // 最新动态
  news: [
    {
      date: "2024年1月15日",
      title: "陈炳林社交媒体更新",
      content: "分享与黄乐荣的幕后花絮照片",
    },
    {
      date: "2024年1月10日",
      title: "黄乐荣新作品预告",
      content: "即将上映的新剧预告片发布",
    },
    {
      date: "2024年1月5日",
      title: "网站更新公告",
      content: "新增粉丝互动功能，欢迎体验",
    },
  ],

  // 应援计划
  support: {
    title: "应援计划",
    description: "我们正在筹备生日应援活动，包括：",
    items: ["生日广告投放", "慈善捐赠", "粉丝礼物制作"],
  },

  // 功能配置
  features: {
    heartCounter: {
      enabled: true,
      localStorageKey: "heartCount",
    },
    messageWall: {
      enabled: true,
      localStorageKey: "messages",
      maxMessages: 50,
    },
    easterEgg: {
      enabled: true,
      konamiCode: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    },
  },

  // 主题色彩
  theme: {
    primary: "#FF69B4",
    secondary: "#90EE90",
    accent: "#98FB98",
    background:
      "linear-gradient(135deg, #FFB6C1 0%, #90EE90 50%, #98FB98 100%)",
    text: "#333",
    textLight: "#666",
  },

  // 动画配置
  animations: {
    enabled: true,
    duration: 300,
    easing: "ease",
  },

  // 响应式断点
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
  },
};

// 导出配置
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
} else {
  window.SITE_CONFIG = SITE_CONFIG;
}

// 配置验证函数
function validateConfig() {
  const required = ["siteInfo", "cpInfo", "profiles"];
  const missing = required.filter((key) => !SITE_CONFIG[key]);

  if (missing.length > 0) {
    console.warn("配置文件中缺少必要字段:", missing);
    return false;
  }

  return true;
}

// 自动验证配置
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (!validateConfig()) {
      console.error("网站配置验证失败，请检查配置文件");
    }
  });
}
