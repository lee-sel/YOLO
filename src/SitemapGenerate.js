require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./SitemapRouter").default; // sitemapRoutes 파일이 있는 경로입니다.
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://yolopension.kr/") 
    .save("./public/sitemap.xml"); 
}

generateSitemap();