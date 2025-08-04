// API基础URL
const API_BASE_URL = "http://localhost:3000/api";

// 全局变量
let currentPage = 1;
let totalPages = 1;
let pollOptions = [];

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// 初始化应用
async function initializeApp() {
  try {
    // 加载心跳计数
    await loadHeartCount();

    // 加载留言墙
    await loadMessages();

    // 加载投票选项
    await loadPollOptions();

    // 加载网站统计
    await loadStats();

    // 初始化事件监听器
    initializeEventListeners();

    console.log("应用初始化完成");
  } catch (error) {
    console.error("初始化失败:", error);
  }
}

// 初始化事件监听器
function initializeEventListeners() {
  // 导航栏功能
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // 关闭移动端菜单
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }

  // 轮播图功能
  initializeCarousel();

  // 心跳计数器
  const heartBtn = document.getElementById("heartBtn");
  if (heartBtn) {
    heartBtn.addEventListener("click", incrementHeartCount);
  }

  // 留言墙表单
  const submitMessageBtn = document.getElementById("submitMessage");
  if (submitMessageBtn) {
    submitMessageBtn.addEventListener("click", submitMessage);
  }

  // 标签切换功能
  initializeTabs();

  // 投票功能
  initializeVoting();

  // 平滑滚动
  initializeSmoothScroll();

  // 滚动动画
  initializeScrollAnimations();

  // 秘密彩蛋
  initializeEasterEgg();
}

// 轮播图功能
function initializeCarousel() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const carouselContainer = document.querySelector(".carousel-container");

  if (!slides.length) return;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
    if (carouselContainer) {
      carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  // 自动轮播
  let slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);

  // 点击按钮切换
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(currentSlide - 1);
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(currentSlide + 1);
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    });
  }

  // 点击圆点切换
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(index);
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    });
  });
}

// 加载心跳计数
async function loadHeartCount() {
  try {
    const response = await fetch(`${API_BASE_URL}/heart-count`);
    const data = await response.json();

    const heartCountDisplay = document.getElementById("heartCount");
    if (heartCountDisplay) {
      heartCountDisplay.textContent = data.count;
    }
  } catch (error) {
    console.error("加载心跳计数失败:", error);
  }
}

// 增加心跳计数
async function incrementHeartCount() {
  try {
    const response = await fetch(`${API_BASE_URL}/heart-count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    const heartCountDisplay = document.getElementById("heartCount");
    if (heartCountDisplay) {
      heartCountDisplay.textContent = data.count;
    }

    // 创建心形动画
    createHeartAnimation();

    // 按钮动画
    const heartBtn = document.getElementById("heartBtn");
    if (heartBtn) {
      heartBtn.style.transform = "scale(1.1)";
      setTimeout(() => {
        heartBtn.style.transform = "scale(1)";
      }, 200);
    }
  } catch (error) {
    console.error("增加心跳计数失败:", error);
  }
}

// 创建心形动画
function createHeartAnimation() {
  const heart = document.createElement("div");
  heart.innerHTML = "💕";
  heart.style.cssText = `
        position: fixed;
        font-size: 2rem;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
        transition: all 2s ease-out;
    `;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = "-50px";
    heart.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    if (heart.parentElement) {
      heart.parentElement.removeChild(heart);
    }
  }, 2000);
}

// 加载留言墙
async function loadMessages(page = 1) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/messages?page=${page}&limit=10`
    );
    const data = await response.json();

    displayMessages(data.messages);
    updatePagination(data.pagination);

    currentPage = data.pagination.current_page;
    totalPages = data.pagination.total_pages;
  } catch (error) {
    console.error("加载留言失败:", error);
    // 如果API不可用，使用本地存储
    loadMessagesFromLocalStorage();
  }
}

// 显示留言
function displayMessages(messages) {
  const messagesContainer = document.getElementById("messagesContainer");
  if (!messagesContainer) return;

  if (currentPage === 1) {
    messagesContainer.innerHTML = "";
  }

  messages.forEach((message) => {
    const messageElement = document.createElement("div");
    messageElement.className = "message-item";
    messageElement.innerHTML = `
            <div class="message-header">
                <strong>${escapeHtml(message.username)}</strong>
                <span class="message-date">${formatDate(
                  message.created_at
                )}</span>
            </div>
            <div class="message-text">${escapeHtml(message.content)}</div>
            ${
              message.image_url
                ? `<img src="${message.image_url}" alt="留言图片" class="message-image">`
                : ""
            }
        `;

    messagesContainer.appendChild(messageElement);
  });
}

// 更新分页
function updatePagination(pagination) {
  const paginationContainer = document.getElementById("pagination");
  if (!paginationContainer) return;

  let paginationHTML = "";

  // 上一页按钮
  if (pagination.current_page > 1) {
    paginationHTML += `<button class="page-btn" onclick="loadMessages(${
      pagination.current_page - 1
    })">上一页</button>`;
  }

  // 页码
  for (let i = 1; i <= pagination.total_pages; i++) {
    if (i === pagination.current_page) {
      paginationHTML += `<span class="page-btn active">${i}</span>`;
    } else {
      paginationHTML += `<button class="page-btn" onclick="loadMessages(${i})">${i}</button>`;
    }
  }

  // 下一页按钮
  if (pagination.current_page < pagination.total_pages) {
    paginationHTML += `<button class="page-btn" onclick="loadMessages(${
      pagination.current_page + 1
    })">下一页</button>`;
  }

  paginationContainer.innerHTML = paginationHTML;
}

// 提交留言
async function submitMessage() {
  const messageText = document.getElementById("messageText");
  const messageImage = document.getElementById("messageImage");
  const usernameInput = document.getElementById("username");

  if (!messageText || !usernameInput) return;

  const text = messageText.value.trim();
  const username = usernameInput.value.trim();

  if (!text || !username) {
    alert("请输入用户名和留言内容！");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("content", text);

    if (messageImage && messageImage.files[0]) {
      formData.append("image", messageImage.files[0]);
    }

    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      alert("留言提交成功！");

      // 清空表单
      messageText.value = "";
      if (messageImage) messageImage.value = "";

      // 重新加载留言
      await loadMessages(1);
    } else {
      const error = await response.json();
      alert(`提交失败: ${error.error}`);
    }
  } catch (error) {
    console.error("提交留言失败:", error);
    alert("网络错误，请稍后重试");
  }
}

// 从本地存储加载留言（备用方案）
function loadMessagesFromLocalStorage() {
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  displayMessages(messages);
}

// 标签切换功能
function initializeTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("data-tab");

      // 移除所有活动状态
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // 添加活动状态
      btn.classList.add("active");
      const targetContent = document.getElementById(tabName);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

// 投票功能
async function loadPollOptions() {
  try {
    const response = await fetch(`${API_BASE_URL}/poll-options`);
    const data = await response.json();
    pollOptions = data.options;
    displayPollOptions();
  } catch (error) {
    console.error("加载投票选项失败:", error);
  }
}

// 显示投票选项
function displayPollOptions() {
  const pollContainer = document.getElementById("pollOptions");
  if (!pollContainer) return;

  let pollHTML = "<h4>选出你最喜欢的OHMNANON瞬间</h4>";

  pollOptions.forEach((option) => {
    const percentage =
      pollOptions.reduce((sum, opt) => sum + opt.votes, 0) > 0
        ? Math.round(
            (option.votes /
              pollOptions.reduce((sum, opt) => sum + opt.votes, 0)) *
              100
          )
        : 0;

    pollHTML += `
            <div class="poll-option">
                <button class="vote-option-btn" onclick="submitVote(${option.id})">
                    ${option.option_text}
                </button>
                <div class="vote-bar">
                    <div class="vote-progress" style="width: ${percentage}%"></div>
                </div>
                <span class="vote-count">${option.votes} 票 (${percentage}%)</span>
            </div>
        `;
  });

  pollContainer.innerHTML = pollHTML;
}

// 提交投票
async function submitVote(optionId) {
  try {
    const response = await fetch(`${API_BASE_URL}/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ option_id: optionId }),
    });

    if (response.ok) {
      const result = await response.json();
      pollOptions = result.options;
      displayPollOptions();
      alert("投票成功！");
    } else {
      const error = await response.json();
      alert(error.error);
    }
  } catch (error) {
    console.error("提交投票失败:", error);
    alert("网络错误，请稍后重试");
  }
}

// 初始化投票
function initializeVoting() {
  const voteBtn = document.querySelector(".vote-btn");
  if (voteBtn) {
    voteBtn.addEventListener("click", () => {
      const pollSection = document.getElementById("pollSection");
      if (pollSection) {
        pollSection.style.display = "block";
      }
    });
  }
}

// 加载网站统计
async function loadStats() {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`);
    const stats = await response.json();

    // 更新统计显示
    updateStatsDisplay(stats);
  } catch (error) {
    console.error("加载统计信息失败:", error);
  }
}

// 更新统计显示
function updateStatsDisplay(stats) {
  const statsContainer = document.getElementById("statsContainer");
  if (!statsContainer) return;

  statsContainer.innerHTML = `
        <div class="stat-item">
            <div class="stat-number">${stats.totalMessages}</div>
            <div class="stat-label">总留言数</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${stats.todayMessages}</div>
            <div class="stat-label">今日留言</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${stats.heartCount}</div>
            <div class="stat-label">心跳总数</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${stats.totalVotes}</div>
            <div class="stat-label">投票总数</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${stats.totalUsers || 0}</div>
            <div class="stat-label">全球用户</div>
        </div>
    `;
}

// 平滑滚动
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// 滚动动画
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  document
    .querySelectorAll(
      ".profile-card, .work-card, .moment-card, .news-item, .activity-card"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
}

// 秘密彩蛋
function initializeEasterEgg() {
  let konamiCode = [];
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // 上上下下左右左右BA

  document.addEventListener("keydown", (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
      konamiCode.shift();
    }

    if (konamiCode.join(",") === konamiSequence.join(",")) {
      showEasterEgg();
      konamiCode = [];
    }
  });
}

// 显示彩蛋
function showEasterEgg() {
  const egg = document.createElement("div");
  egg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #FF69B4, #90EE90);
        color: white;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: eggAppear 0.5s ease;
    `;
  egg.innerHTML = `
        <h3>🎉 恭喜发现彩蛋！ 🎉</h3>
        <p>你找到了OHMNANON的秘密花园</p>
        <p>💕 永远支持OHMNANON 💕</p>
        <button onclick="this.parentElement.remove()" style="
            background: white;
            color: #FF69B4;
            border: none;
            padding: 10px 20px;
            border-radius: 15px;
            margin-top: 15px;
            cursor: pointer;
        ">关闭</button>
    `;

  document.body.appendChild(egg);

  // 创建心形雨
  createHeartRain();
}

// 创建心形雨
function createHeartRain() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "💕";
      heart.style.cssText = `
                position: fixed;
                font-size: 2rem;
                left: ${Math.random() * window.innerWidth}px;
                top: -50px;
                z-index: 9999;
                pointer-events: none;
                animation: heartFall 3s linear;
            `;
      document.body.appendChild(heart);

      setTimeout(() => {
        if (heart.parentElement) {
          heart.parentElement.removeChild(heart);
        }
      }, 3000);
    }, i * 100);
  }
}

// 工具函数
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("zh-CN");
}

// 添加CSS动画
const style = document.createElement("style");
style.textContent = `
    @keyframes eggAppear {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes heartFall {
        to {
            top: ${window.innerHeight}px;
            transform: rotate(360deg);
        }
    }
    
    .nav-link.active {
        color: #FF69B4;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    .message-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        font-size: 0.9rem;
    }
    
    .message-date {
        color: #999;
        font-size: 0.8rem;
    }
    
    .pagination {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 30px;
    }
    
    .page-btn {
        padding: 8px 12px;
        border: 1px solid #FF69B4;
        background: white;
        color: #FF69B4;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .page-btn:hover,
    .page-btn.active {
        background: #FF69B4;
        color: white;
    }
    
    .poll-option {
        margin: 15px 0;
        padding: 15px;
        background: rgba(255, 105, 180, 0.05);
        border-radius: 10px;
    }
    
    .vote-option-btn {
        background: linear-gradient(45deg, #FF69B4, #90EE90);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        margin-bottom: 10px;
        transition: transform 0.3s ease;
    }
    
    .vote-option-btn:hover {
        transform: scale(1.05);
    }
    
    .vote-bar {
        height: 8px;
        background: #eee;
        border-radius: 4px;
        overflow: hidden;
        margin: 10px 0;
    }
    
    .vote-progress {
        height: 100%;
        background: linear-gradient(45deg, #FF69B4, #90EE90);
        transition: width 0.3s ease;
    }
    
    .vote-count {
        font-size: 0.9rem;
        color: #666;
    }
    
    .stats-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        margin: 30px 0;
    }
    
    .stat-item {
        text-align: center;
        padding: 20px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .stat-number {
        font-size: 2rem;
        font-weight: bold;
        color: #FF69B4;
        margin-bottom: 5px;
    }
    
    .stat-label {
        color: #666;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// 键盘快捷键
document.addEventListener("keydown", (e) => {
  // Ctrl + H 回到首页
  if (e.ctrlKey && e.key === "h") {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }

  // Ctrl + A 关于他们
  if (e.ctrlKey && e.key === "a") {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  }

  // Ctrl + W 作品库
  if (e.ctrlKey && e.key === "w") {
    e.preventDefault();
    document.querySelector("#works").scrollIntoView({ behavior: "smooth" });
  }
});

// 页面可见性API - 当用户切换回页面时重置轮播图
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    // 重新加载数据
    loadHeartCount();
    loadStats();
  }
});

// 错误处理
window.addEventListener("error", (e) => {
  console.log("页面出现错误:", e.error);
});

// 性能监控
window.addEventListener("load", () => {
  if ("performance" in window) {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`页面加载时间: ${loadTime}ms`);
  }
});
