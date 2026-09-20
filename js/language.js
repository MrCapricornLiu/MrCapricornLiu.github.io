(() => {
  "use strict";

  // English stays in index.html; keep Chinese entries matched to data-i18n keys.
  const chinese = {
    name: "Chenghao Liu",
    position: "北京大学在读硕士",
    email: "邮箱：",
    updated: "最近更新：2026 年 9 月 1 日",
    biographyHeading: "个人简介",
    biography: '我目前在北京大学攻读硕士学位，导师为<a href="https://amr.pku.edu.cn/jzyg/szdw/H/89baf74ac50448f0a475346a58f09739.htm">黄松芳研究员</a>。本科毕业于华中科技大学。',
    interests: "我的研究兴趣主要集中在：1）<b>语言模型架构与训练/推理方法</b>：面向离散 Token 语言模型与连续扩散语言模型，设计模型架构和训练/推理方法，以提升特定任务表现或通用能力；2）<b>Agent 系统</b>：面向基于 LLM 的 Agent，研究记忆、工作流与数据飞轮。",
    researchContact: "如果你有相近的研究兴趣，欢迎联系交流。",
    recruiting: "<b>我预计于 2027 年 6 月毕业，目前正在寻找 2027 届校招全职机会，欢迎联系。</b>",
    experienceHeading: "研究与实习经历",
    baiduTeam: "百度 - 基础模型研发部 - 预训练算法组",
    baiduRole: "算法实习生，2026 年 6 月 - 至今",
    baiduFocus: "方向：文心大模型，预训练架构与算法，训练动力学",
    bytedanceTeam: "字节跳动 - TikTok - 内容理解组",
    bytedanceRole: "算法实习生，2025 年 12 月 - 2026 年 6 月",
    bytedanceFocus: "方向：VLM 后训练，连续扩散语言模型",
    samsungTeam: "三星电子中国研究院 - Advanced Research Lab",
    samsungRole: "算法实习生，2025 年 2 月 - 2025 年 4 月",
    samsungFocus: "方向：VLM/VLA 架构",
    xlabTeam: "北京大学 - XLab",
    xlabRole: "学生研究员，2024 年 9 月 - 至今",
    xlabFocus: "方向：VLM/VLA 架构，Token 效率，Agent",
    educationHeading: "教育经历",
    pkuName: "北京大学",
    pkuSchool: "先进制造与机器人学院",
    pkuDegree: "工学硕士，2024 年 9 月 - 2027 年 6 月（预计）",
    hustName: "华中科技大学",
    hustSchool: "网络空间安全学院",
    hustDegree: "工学学士，2020 年 9 月 - 2024 年 6 月",
    publicationsHeading: "代表论文",
    fullList: "[完整列表]",
    beyondHeading: "研究之外",
    gamesIntro: "<b>非负博弈。</b> 我对非负博弈（即零和与正和博弈）环境很感兴趣，从金融市场到策略游戏。闲暇时，我会参与交易，也喜欢德州扑克和麻将等游戏。",
    markets: "我的兴趣涵盖几乎所有可交易的资产，包括美股、港股、A 股、加密货币、现货、期货、衍生品、期权和预测市场等等。我是康波周期的坚定拥护者，认同低估时买入、估值过高时卖出的价值投资理念，同时也认可基于数据的高频技术交易，如各种流动性策略与价差套利策略。",
    tradingResearch: "我喜欢分析这些非负博弈环境，尝试通过策略和推理寻找优势并获得真实的收益。最近，我也在探索 LLM 在交易中的应用，包括因子挖掘、自动交易系统、新闻驱动策略，以及舆论和市场情绪分析等等。",
    aspiration: "<b>当前目标。</b> 我的中长期目标是通过工作收入和交易收益积累本金，再借助复利逐步实现财务自由。最终，我希望“买回自己的时间与自由去做自己真正想做的事情”。",
    videoGames: "<b>电子游戏。</b> 我也喜欢玩电子游戏，包括 PlayStation、Nintendo Switch 和 Steam 等平台上的单人游戏，以及多人合作游戏。我最喜欢的游戏是<em>《塞尔达传说：旷野之息》</em>，玩这款游戏的上百个小时是我人生中最快乐的时光之一。至于多人游戏，我特别喜欢<em>《英雄联盟》</em>，这可能是我玩得最久的游戏。",
    personalContact: "如果你也有类似的兴趣与追求，欢迎联系交流。",
    pageViews: "总访问量"
  };

  const storageKey = "homepage-language";
  const control = document.querySelector(".language-switch");
  const buttons = Array.from(control.querySelectorAll("[data-language]"));
  const entries = Array.from(document.querySelectorAll("[data-i18n]"), (element) => ({
    element,
    english: element.innerHTML,
    chinese: chinese[element.dataset.i18n]
  }));
  const description = document.querySelector('meta[name="description"]');
  const englishTitle = document.title;
  const englishDescription = description.content;
  const accessibleText = [
    [document.querySelector('[aria-label="Google Scholar"]'), "aria-label", "谷歌学术"],
    [document.querySelector('[aria-label="WeChat"]'), "aria-label", "微信"],
    [document.querySelector('img[alt="Google Scholar"]'), "alt", "谷歌学术"],
    [document.querySelector('img[alt="WeChat"]'), "alt", "微信"],
    [document.querySelector(".profile-img"), "alt", "个人头像"],
    [document.querySelector(".misc-img"), "alt", "交易、投资与游戏"]
  ].map(([element, attribute, chineseValue]) => ({
    element, attribute, chineseValue, englishValue: element.getAttribute(attribute)
  }));

  function setLanguage(language) {
    const isChinese = language === "zh-CN";
    entries.forEach(({ element, english, chinese }) => {
      // Only repository-authored translations are inserted as HTML.
      element.innerHTML = isChinese && chinese !== undefined ? chinese : english;
    });
    accessibleText.forEach(({ element, attribute, chineseValue, englishValue }) => {
      element.setAttribute(attribute, isChinese ? chineseValue : englishValue);
    });
    document.documentElement.lang = language;
    document.documentElement.setAttribute("xml:lang", language);
    document.title = isChinese ? "Chenghao Liu | 个人主页" : englishTitle;
    description.content = isChinese ? "Chenghao Liu 的个人主页" : englishDescription;
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  }

  let initialLanguage = "en";
  try {
    if (localStorage.getItem(storageKey) === "zh-CN") initialLanguage = "zh-CN";
  } catch {
    // Switching still works if the browser blocks preference storage.
  }
  setLanguage(initialLanguage);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      setLanguage(language);
      try {
        localStorage.setItem(storageKey, language);
      } catch {
        // Preference persistence is optional, including for local file previews.
      }
    });
  });
  control.hidden = false;
})();
