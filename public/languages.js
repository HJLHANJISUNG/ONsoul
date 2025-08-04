// 多语言配置
const LANGUAGES = {
  zh: {
    name: "中文",
    flag: "🇨🇳",
    // 导航
    nav: {
      home: "首页",
      about: "关于他们",
      works: "作品库",
      moments: "甜蜜时刻",
      community: "粉丝互动",
      news: "最新动态",
      support: "支持我们",
    },
    // 首页
    hero: {
      title: "欢迎来到OHMNANON的世界",
      subtitle: "陈炳林 & 黄乐荣的CP应援站",
      heartCount: "心跳次数",
      quickAccess: "快速入口",
      latestNews: "最新动态",
      classicWorks: "经典作品",
      fanWall: "粉丝墙",
      worldMap: "全球地图",
    },
    // 关于他们
    about: {
      title: "关于他们",
      ohm: {
        name: "陈炳林 (OHM)",
        birthday: "生日",
        works: "代表作品",
        social: "社交媒体",
      },
      nanon: {
        name: "黄乐荣 (NANON)",
        birthday: "生日",
        works: "代表作品",
        social: "社交媒体",
      },
      timeline: {
        title: "合作时间线",
        firstMeet: "首次合作",
        together: "2gether系列",
        stillTogether: "Still 2gether",
        awards: "颁奖典礼",
        current: "现状",
      },
    },
    // 作品库
    works: {
      title: "作品库",
      categories: {
        starring: "主演作品",
        cameo: "客串作品",
        variety: "综艺节目",
        music: "音乐作品",
      },
      watchNow: "立即观看",
      learnMore: "了解更多",
    },
    // 甜蜜时刻
    moments: {
      title: "甜蜜时刻",
      categories: {
        interactions: "互动瞬间",
        behindScenes: "幕后花絮",
        socialMedia: "社交媒体",
        fanCreations: "粉丝创作",
      },
    },
    // 粉丝互动
    community: {
      title: "粉丝互动",
      messageWall: {
        title: "留言墙",
        placeholder: "写下你的祝福或表白...",
        username: "请输入您的昵称...",
        submit: "发送留言",
        noMessages: "还没有留言，快来第一个留言吧！",
      },
      activities: {
        title: "活动专区",
        poll: "投票活动",
        vote: "投票",
        stats: "网站统计",
        totalMessages: "总留言数",
        todayMessages: "今日留言",
        heartCount: "心跳总数",
        totalVotes: "投票总数",
        globalUsers: "全球用户",
      },
    },
    // 最新动态
    news: {
      title: "最新动态",
      latest: "最新消息",
      schedule: "行程安排",
      announcements: "网站公告",
    },
    // 支持我们
    support: {
      title: "支持我们",
      fundraising: "筹款通道",
      copyright: "版权声明",
      contact: "联系我们",
    },
    // 全球地图
    worldMap: {
      title: "全球OHMNANON粉丝地图",
      subtitle: "看看世界各地的粉丝都在哪里支持OHMNANON！",
      addLocation: "添加你的位置",
      username: "你的昵称",
      usernamePlaceholder: "请输入你的昵称",
      country: "国家",
      selectCountry: "请选择国家",
      city: "城市",
      cityPlaceholder: "请输入你的城市",
      submit: "添加位置",
      stats: {
        totalUsers: "总用户数",
        totalCountries: "涉及国家",
        totalCities: "涉及城市",
        countryDistribution: "国家粉丝分布",
      },
      countries: {
        china: "中国",
        thailand: "泰国",
        japan: "日本",
        korea: "韩国",
        usa: "美国",
        canada: "加拿大",
        uk: "英国",
        france: "法国",
        germany: "德国",
        australia: "澳大利亚",
        singapore: "新加坡",
        malaysia: "马来西亚",
        philippines: "菲律宾",
        indonesia: "印度尼西亚",
        vietnam: "越南",
        other: "其他",
      },
    },
    // 通用
    common: {
      loading: "加载中...",
      error: "出错了",
      success: "成功",
      cancel: "取消",
      confirm: "确认",
      back: "返回",
      next: "下一页",
      prev: "上一页",
      submit: "提交",
      save: "保存",
      delete: "删除",
      edit: "编辑",
      view: "查看",
      close: "关闭",
      open: "打开",
      search: "搜索",
      filter: "筛选",
      sort: "排序",
      refresh: "刷新",
      share: "分享",
      like: "点赞",
      comment: "评论",
      follow: "关注",
      unfollow: "取消关注",
      report: "举报",
      block: "屏蔽",
      unblock: "取消屏蔽",
      settings: "设置",
      profile: "个人资料",
      logout: "退出登录",
      login: "登录",
      register: "注册",
      forgotPassword: "忘记密码",
      resetPassword: "重置密码",
      changePassword: "修改密码",
      email: "邮箱",
      password: "密码",
      confirmPassword: "确认密码",
      username: "用户名",
      nickname: "昵称",
      phone: "手机号",
      address: "地址",
      birthday: "生日",
      gender: "性别",
      male: "男",
      female: "女",
      other: "其他",
      yes: "是",
      no: "否",
      ok: "确定",
      loading: "加载中...",
      pleaseWait: "请稍候...",
      networkError: "网络错误，请稍后重试",
      serverError: "服务器错误",
      notFound: "未找到",
      unauthorized: "未授权",
      forbidden: "禁止访问",
      badRequest: "请求错误",
      internalError: "内部错误",
      serviceUnavailable: "服务不可用",
      gatewayTimeout: "网关超时",
      tooManyRequests: "请求过于频繁",
      conflict: "冲突",
      gone: "已删除",
      lengthRequired: "长度要求",
      preconditionFailed: "前置条件失败",
      requestEntityTooLarge: "请求实体过大",
      requestUriTooLong: "请求URI过长",
      unsupportedMediaType: "不支持的媒体类型",
      requestedRangeNotSatisfiable: "请求范围不满足",
      expectationFailed: "期望失败",
      unprocessableEntity: "无法处理的实体",
      locked: "已锁定",
      failedDependency: "依赖失败",
      upgradeRequired: "需要升级",
      preconditionRequired: "需要前置条件",
      tooManyRequests: "请求过于频繁",
      requestHeaderFieldsTooLarge: "请求头字段过大",
      unavailableForLegalReasons: "因法律原因不可用",
    },
  },
  en: {
    name: "English",
    flag: "🇺🇸",
    nav: {
      home: "Home",
      about: "About",
      works: "Works",
      moments: "Moments",
      community: "Community",
      news: "News",
      support: "Support",
    },
    hero: {
      title: "Welcome to OHMNANON World",
      subtitle: "Chen Binglin & Huang Lerong CP Fan Site",
      heartCount: "Heart Count",
      quickAccess: "Quick Access",
      latestNews: "Latest News",
      classicWorks: "Classic Works",
      fanWall: "Fan Wall",
      worldMap: "World Map",
    },
    about: {
      title: "About Them",
      ohm: {
        name: "Chen Binglin (OHM)",
        birthday: "Birthday",
        works: "Representative Works",
        social: "Social Media",
      },
      nanon: {
        name: "Huang Lerong (NANON)",
        birthday: "Birthday",
        works: "Representative Works",
        social: "Social Media",
      },
      timeline: {
        title: "Collaboration Timeline",
        firstMeet: "First Collaboration",
        together: "2gether Series",
        stillTogether: "Still 2gether",
        awards: "Award Ceremonies",
        current: "Current Status",
      },
    },
    works: {
      title: "Works Library",
      categories: {
        starring: "Starring Works",
        cameo: "Cameo Appearances",
        variety: "Variety Shows",
        music: "Music Works",
      },
      watchNow: "Watch Now",
      learnMore: "Learn More",
    },
    moments: {
      title: "Sweet Moments",
      categories: {
        interactions: "Interaction Moments",
        behindScenes: "Behind the Scenes",
        socialMedia: "Social Media",
        fanCreations: "Fan Creations",
      },
    },
    community: {
      title: "Fan Community",
      messageWall: {
        title: "Message Wall",
        placeholder: "Write your blessings or confessions...",
        username: "Enter your nickname...",
        submit: "Send Message",
        noMessages: "No messages yet, be the first to leave one!",
      },
      activities: {
        title: "Activities",
        poll: "Poll",
        vote: "Vote",
        stats: "Website Statistics",
        totalMessages: "Total Messages",
        todayMessages: "Today's Messages",
        heartCount: "Heart Count",
        totalVotes: "Total Votes",
        globalUsers: "Global Users",
      },
    },
    news: {
      title: "Latest News",
      latest: "Latest Updates",
      schedule: "Schedule",
      announcements: "Announcements",
    },
    support: {
      title: "Support Us",
      fundraising: "Fundraising",
      copyright: "Copyright",
      contact: "Contact Us",
    },
    worldMap: {
      title: "Global OHMNANON Fan Map",
      subtitle: "See where fans around the world support OHMNANON!",
      addLocation: "Add Your Location",
      username: "Your Nickname",
      usernamePlaceholder: "Enter your nickname",
      country: "Country",
      selectCountry: "Please select country",
      city: "City",
      cityPlaceholder: "Enter your city",
      submit: "Add Location",
      stats: {
        totalUsers: "Total Users",
        totalCountries: "Countries",
        totalCities: "Cities",
        countryDistribution: "Country Distribution",
      },
      countries: {
        china: "China",
        thailand: "Thailand",
        japan: "Japan",
        korea: "Korea",
        usa: "USA",
        canada: "Canada",
        uk: "UK",
        france: "France",
        germany: "Germany",
        australia: "Australia",
        singapore: "Singapore",
        malaysia: "Malaysia",
        philippines: "Philippines",
        indonesia: "Indonesia",
        vietnam: "Vietnam",
        other: "Other",
      },
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm",
      back: "Back",
      next: "Next",
      prev: "Previous",
      submit: "Submit",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      close: "Close",
      open: "Open",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      refresh: "Refresh",
      share: "Share",
      like: "Like",
      comment: "Comment",
      follow: "Follow",
      unfollow: "Unfollow",
      report: "Report",
      block: "Block",
      unblock: "Unblock",
      settings: "Settings",
      profile: "Profile",
      logout: "Logout",
      login: "Login",
      register: "Register",
      forgotPassword: "Forgot Password",
      resetPassword: "Reset Password",
      changePassword: "Change Password",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      username: "Username",
      nickname: "Nickname",
      phone: "Phone",
      address: "Address",
      birthday: "Birthday",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      yes: "Yes",
      no: "No",
      ok: "OK",
      loading: "Loading...",
      pleaseWait: "Please wait...",
      networkError: "Network error, please try again later",
      serverError: "Server error",
      notFound: "Not found",
      unauthorized: "Unauthorized",
      forbidden: "Forbidden",
      badRequest: "Bad request",
      internalError: "Internal error",
      serviceUnavailable: "Service unavailable",
      gatewayTimeout: "Gateway timeout",
      tooManyRequests: "Too many requests",
      conflict: "Conflict",
      gone: "Gone",
      lengthRequired: "Length required",
      preconditionFailed: "Precondition failed",
      requestEntityTooLarge: "Request entity too large",
      requestUriTooLong: "Request URI too long",
      unsupportedMediaType: "Unsupported media type",
      requestedRangeNotSatisfiable: "Requested range not satisfiable",
      expectationFailed: "Expectation failed",
      unprocessableEntity: "Unprocessable entity",
      locked: "Locked",
      failedDependency: "Failed dependency",
      upgradeRequired: "Upgrade required",
      preconditionRequired: "Precondition required",
      tooManyRequests: "Too many requests",
      requestHeaderFieldsTooLarge: "Request header fields too large",
      unavailableForLegalReasons: "Unavailable for legal reasons",
    },
  },
  th: {
    name: "ไทย",
    flag: "🇹🇭",
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับพวกเขา",
      works: "ผลงาน",
      moments: "ช่วงเวลาหวาน",
      community: "ชุมชนแฟน",
      news: "ข่าวล่าสุด",
      support: "สนับสนุนเรา",
    },
    hero: {
      title: "ยินดีต้อนรับสู่โลกของ OHMNANON",
      subtitle: "เว็บไซต์แฟน CP ของ Chen Binglin & Huang Lerong",
      heartCount: "จำนวนหัวใจ",
      quickAccess: "เข้าถึงด่วน",
      latestNews: "ข่าวล่าสุด",
      classicWorks: "ผลงานคลาสสิก",
      fanWall: "กำแพงแฟน",
      worldMap: "แผนที่โลก",
    },
    about: {
      title: "เกี่ยวกับพวกเขา",
      ohm: {
        name: "Chen Binglin (OHM)",
        birthday: "วันเกิด",
        works: "ผลงานที่โดดเด่น",
        social: "โซเชียลมีเดีย",
      },
      nanon: {
        name: "Huang Lerong (NANON)",
        birthday: "วันเกิด",
        works: "ผลงานที่โดดเด่น",
        social: "โซเชียลมีเดีย",
      },
      timeline: {
        title: "ไทม์ไลน์การทำงานร่วมกัน",
        firstMeet: "การทำงานร่วมกันครั้งแรก",
        together: "ซีรีส์ 2gether",
        stillTogether: "Still 2gether",
        awards: "งานประกาศรางวัล",
        current: "สถานะปัจจุบัน",
      },
    },
    works: {
      title: "คลังผลงาน",
      categories: {
        starring: "ผลงานนำแสดง",
        cameo: "การปรากฏตัวแบบแคเมโอ",
        variety: "รายการวาไรตี้",
        music: "ผลงานเพลง",
      },
      watchNow: "ดูตอนนี้",
      learnMore: "เรียนรู้เพิ่มเติม",
    },
    moments: {
      title: "ช่วงเวลาหวาน",
      categories: {
        interactions: "ช่วงเวลาการโต้ตอบ",
        behindScenes: "เบื้องหลัง",
        socialMedia: "โซเชียลมีเดีย",
        fanCreations: "ผลงานแฟน",
      },
    },
    community: {
      title: "ชุมชนแฟน",
      messageWall: {
        title: "กำแพงข้อความ",
        placeholder: "เขียนคำอวยพรหรือคำสารภาพของคุณ...",
        username: "ใส่ชื่อเล่นของคุณ...",
        submit: "ส่งข้อความ",
        noMessages: "ยังไม่มีข้อความ เป็นคนแรกที่ทิ้งข้อความไว้!",
      },
      activities: {
        title: "กิจกรรม",
        poll: "โพล",
        vote: "โหวต",
        stats: "สถิติเว็บไซต์",
        totalMessages: "ข้อความทั้งหมด",
        todayMessages: "ข้อความวันนี้",
        heartCount: "จำนวนหัวใจ",
        totalVotes: "โหวตทั้งหมด",
        globalUsers: "ผู้ใช้ทั่วโลก",
      },
    },
    news: {
      title: "ข่าวล่าสุด",
      latest: "อัปเดตล่าสุด",
      schedule: "ตารางเวลา",
      announcements: "ประกาศ",
    },
    support: {
      title: "สนับสนุนเรา",
      fundraising: "การระดมทุน",
      copyright: "ลิขสิทธิ์",
      contact: "ติดต่อเรา",
    },
    worldMap: {
      title: "แผนที่แฟน OHMNANON ทั่วโลก",
      subtitle: "ดูว่าแฟนๆ ทั่วโลกอยู่ที่ไหนที่สนับสนุน OHMNANON!",
      addLocation: "เพิ่มตำแหน่งของคุณ",
      username: "ชื่อเล่นของคุณ",
      usernamePlaceholder: "ใส่ชื่อเล่นของคุณ",
      country: "ประเทศ",
      selectCountry: "กรุณาเลือกประเทศ",
      city: "เมือง",
      cityPlaceholder: "ใส่เมืองของคุณ",
      submit: "เพิ่มตำแหน่ง",
      stats: {
        totalUsers: "ผู้ใช้ทั้งหมด",
        totalCountries: "ประเทศ",
        totalCities: "เมือง",
        countryDistribution: "การกระจายตัวของประเทศ",
      },
      countries: {
        china: "จีน",
        thailand: "ไทย",
        japan: "ญี่ปุ่น",
        korea: "เกาหลี",
        usa: "สหรัฐอเมริกา",
        canada: "แคนาดา",
        uk: "สหราชอาณาจักร",
        france: "ฝรั่งเศส",
        germany: "เยอรมนี",
        australia: "ออสเตรเลีย",
        singapore: "สิงคโปร์",
        malaysia: "มาเลเซีย",
        philippines: "ฟิลิปปินส์",
        indonesia: "อินโดนีเซีย",
        vietnam: "เวียดนาม",
        other: "อื่นๆ",
      },
    },
    common: {
      loading: "กำลังโหลด...",
      error: "ข้อผิดพลาด",
      success: "สำเร็จ",
      cancel: "ยกเลิก",
      confirm: "ยืนยัน",
      back: "กลับ",
      next: "ถัดไป",
      prev: "ก่อนหน้า",
      submit: "ส่ง",
      save: "บันทึก",
      delete: "ลบ",
      edit: "แก้ไข",
      view: "ดู",
      close: "ปิด",
      open: "เปิด",
      search: "ค้นหา",
      filter: "กรอง",
      sort: "เรียงลำดับ",
      refresh: "รีเฟรช",
      share: "แชร์",
      like: "ชอบ",
      comment: "แสดงความคิดเห็น",
      follow: "ติดตาม",
      unfollow: "เลิกติดตาม",
      report: "รายงาน",
      block: "บล็อก",
      unblock: "เลิกบล็อก",
      settings: "การตั้งค่า",
      profile: "โปรไฟล์",
      logout: "ออกจากระบบ",
      login: "เข้าสู่ระบบ",
      register: "ลงทะเบียน",
      forgotPassword: "ลืมรหัสผ่าน",
      resetPassword: "รีเซ็ตรหัสผ่าน",
      changePassword: "เปลี่ยนรหัสผ่าน",
      email: "อีเมล",
      password: "รหัสผ่าน",
      confirmPassword: "ยืนยันรหัสผ่าน",
      username: "ชื่อผู้ใช้",
      nickname: "ชื่อเล่น",
      phone: "โทรศัพท์",
      address: "ที่อยู่",
      birthday: "วันเกิด",
      gender: "เพศ",
      male: "ชาย",
      female: "หญิง",
      other: "อื่นๆ",
      yes: "ใช่",
      no: "ไม่",
      ok: "ตกลง",
      loading: "กำลังโหลด...",
      pleaseWait: "กรุณารอสักครู่...",
      networkError: "ข้อผิดพลาดเครือข่าย กรุณาลองใหม่อีกครั้ง",
      serverError: "ข้อผิดพลาดเซิร์ฟเวอร์",
      notFound: "ไม่พบ",
      unauthorized: "ไม่ได้รับอนุญาต",
      forbidden: "ห้าม",
      badRequest: "คำขอไม่ถูกต้อง",
      internalError: "ข้อผิดพลาดภายใน",
      serviceUnavailable: "บริการไม่พร้อมใช้งาน",
      gatewayTimeout: "เกตเวย์หมดเวลา",
      tooManyRequests: "คำขอมากเกินไป",
      conflict: "ขัดแย้ง",
      gone: "หายไป",
      lengthRequired: "ต้องการความยาว",
      preconditionFailed: "เงื่อนไขเบื้องต้นล้มเหลว",
      requestEntityTooLarge: "เอนทิตีคำขอใหญ่เกินไป",
      requestUriTooLong: "URI คำขอยาวเกินไป",
      unsupportedMediaType: "ประเภทสื่อที่ไม่รองรับ",
      requestedRangeNotSatisfiable: "ช่วงที่ขอไม่สามารถตอบสนองได้",
      expectationFailed: "ความคาดหวังล้มเหลว",
      unprocessableEntity: "เอนทิตีที่ไม่สามารถประมวลผลได้",
      locked: "ล็อก",
      failedDependency: "การพึ่งพาล้มเหลว",
      upgradeRequired: "ต้องการการอัปเกรด",
      preconditionRequired: "ต้องการเงื่อนไขเบื้องต้น",
      tooManyRequests: "คำขอมากเกินไป",
      requestHeaderFieldsTooLarge: "ฟิลด์ส่วนหัวคำขอใหญ่เกินไป",
      unavailableForLegalReasons: "ไม่พร้อมใช้งานด้วยเหตุผลทางกฎหมาย",
    },
  },
};

// 语言管理类
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "zh";
    this.init();
  }

  init() {
    this.updateLanguage(this.currentLang);
    this.createLanguageSwitcher();
  }

  // 获取当前语言
  getCurrentLanguage() {
    return this.currentLang;
  }

  // 获取翻译文本
  getText(key) {
    const keys = key.split(".");
    let text = LANGUAGES[this.currentLang];

    for (const k of keys) {
      if (text && text[k]) {
        text = text[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return text;
  }

  // 更新语言
  updateLanguage(lang) {
    if (!LANGUAGES[lang]) {
      console.error(`Language not supported: ${lang}`);
      return;
    }

    this.currentLang = lang;
    localStorage.setItem("language", lang);

    // 更新页面文本
    this.updatePageText();

    // 触发语言切换事件
    document.dispatchEvent(
      new CustomEvent("languageChanged", { detail: { language: lang } })
    );
  }

  // 更新页面文本
  updatePageText() {
    // 更新导航
    this.updateNavigation();

    // 更新各个部分的文本
    this.updateHeroSection();
    this.updateAboutSection();
    this.updateWorksSection();
    this.updateMomentsSection();
    this.updateCommunitySection();
    this.updateNewsSection();
    this.updateSupportSection();

    // 更新页面标题
    document.title = this.getText("hero.title");
  }

  // 更新导航
  updateNavigation() {
    const navLinks = document.querySelectorAll("[data-lang]");
    navLinks.forEach((link) => {
      const key = link.getAttribute("data-lang");
      if (key) {
        link.textContent = this.getText(key);
      }
    });
  }

  // 更新首页英雄区域
  updateHeroSection() {
    const elements = {
      ".hero h1": "hero.title",
      ".hero p": "hero.subtitle",
      ".heart-counter h3": "hero.heartCount",
      ".quick-access h2": "hero.quickAccess",
      '.access-btn[href="#news"] span': "hero.latestNews",
      '.access-btn[href="#works"] span': "hero.classicWorks",
      '.access-btn[href="#community"] span': "hero.fanWall",
      '.access-btn[href="world-map.html"] span': "hero.worldMap",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = this.getText(key);
      }
    });
  }

  // 更新关于部分
  updateAboutSection() {
    const elements = {
      "#about h2": "about.title",
      ".ohm-info h3": "about.ohm.name",
      ".nanon-info h3": "about.nanon.name",
      ".timeline h3": "about.timeline.title",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = this.getText(key);
      }
    });
  }

  // 更新作品部分
  updateWorksSection() {
    const elements = {
      "#works h2": "works.title",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = this.getText(key);
      }
    });
  }

  // 更新甜蜜时刻部分
  updateMomentsSection() {
    const elements = {
      "#moments h2": "moments.title",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = this.getText(key);
      }
    });
  }

  // 更新社区部分
  updateCommunitySection() {
    const elements = {
      "#community h2": "community.title",
      ".message-wall h3": "community.messageWall.title",
      "#messageText": "community.messageWall.placeholder",
      "#username": "community.messageWall.username",
      "#submitMessage": "community.messageWall.submit",
      ".activities h3": "community.activities.title",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = this.getText(key);
        } else {
          element.textContent = this.getText(key);
        }
      }
    });
  }

  // 更新新闻部分
  updateNewsSection() {
    const elements = {
      "#news h2": "news.title",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = this.getText(key);
      }
    });
  }

  // 更新支持部分
  updateSupportSection() {
    const elements = {
      "#support h2": "support.title",
    };

    Object.entries(elements).forEach(([selector, key]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = this.getText(key);
      }
    });
  }

  // 创建语言切换器
  createLanguageSwitcher() {
    // 检查是否已存在语言切换器
    if (document.getElementById("languageSwitcher")) {
      return;
    }

    const switcher = document.createElement("div");
    switcher.id = "languageSwitcher";
    switcher.className = "language-switcher";
    switcher.innerHTML = `
            <div class="current-lang">
                <span class="flag">${LANGUAGES[this.currentLang].flag}</span>
                <span class="name">${LANGUAGES[this.currentLang].name}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="lang-dropdown">
                ${Object.entries(LANGUAGES)
                  .map(
                    ([code, lang]) => `
                    <div class="lang-option ${
                      code === this.currentLang ? "active" : ""
                    }" data-lang="${code}">
                        <span class="flag">${lang.flag}</span>
                        <span class="name">${lang.name}</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // 添加到页面
    const header = document.querySelector("header");
    if (header) {
      header.appendChild(switcher);
    }

    // 添加事件监听器
    this.addLanguageSwitcherEvents(switcher);
  }

  // 添加语言切换器事件
  addLanguageSwitcherEvents(switcher) {
    const currentLang = switcher.querySelector(".current-lang");
    const dropdown = switcher.querySelector(".lang-dropdown");
    const options = switcher.querySelectorAll(".lang-option");

    // 切换下拉菜单
    currentLang.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    // 选择语言
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        this.updateLanguage(lang);

        // 更新切换器显示
        this.updateLanguageSwitcher(lang);

        // 关闭下拉菜单
        dropdown.classList.remove("show");
      });
    });

    // 点击外部关闭下拉菜单
    document.addEventListener("click", (e) => {
      if (!switcher.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }

  // 更新语言切换器显示
  updateLanguageSwitcher(lang) {
    const switcher = document.getElementById("languageSwitcher");
    if (!switcher) return;

    const currentLang = switcher.querySelector(".current-lang");
    const flag = currentLang.querySelector(".flag");
    const name = currentLang.querySelector(".name");
    const options = switcher.querySelectorAll(".lang-option");

    // 更新当前语言显示
    flag.textContent = LANGUAGES[lang].flag;
    name.textContent = LANGUAGES[lang].name;

    // 更新选项状态
    options.forEach((option) => {
      const optionLang = option.getAttribute("data-lang");
      if (optionLang === lang) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
  }
}

// 创建全局语言管理器实例
window.languageManager = new LanguageManager();
