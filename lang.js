import { pages } from "./src/components/UI";

const translations = {
  en: {
    title: "BooKSAW",
    account: "⊙ ACCOUNT",
    cart: "⊡ CART (0)",
    search: "⌕ SEARCH",
    home: "HOME",
    about: "ABOUT",
    pages: "PAGES",
    shop: "SHOP",
    articles: "ARTICLES",
    contact: "CONTACT",
    quality: "SOME QUALITY ITEMS",
    read: "READ MORE",
    view: "VIEW ALL PRODUCTS",
    interact: "INTERACTIVE PREVIEW",
    flipBook: "Flip Through The Book",
    featured: "Featured Books",
    click: "Click me"
  },

  zh: {
    title: "书晤",
    account: "⊙ 账户",
    cart: "⊡ 购物车 (0)",
    search: "⌕ 搜索",
    home: "首页",
    about: "关于",
    pages: "书籍",
    shop: "商店",
    articles: "文章",
    contact: "联系",
    quality: "一些优质商品",
    read: "阅读更多",
    view: "查看所有产品",
    interact: "互动预览",
    flipBook: "翻阅这本书",
    featured: "精选书籍",
    click: "点击"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}

// load saved language
setLang(localStorage.getItem("lang") || "en");