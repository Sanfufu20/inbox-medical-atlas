# 第九週作業要求對照

本專案題目是「把我的 Obsidian Inbox 變成可持續擴充的醫學筆記網站」。重點是把既有整理方法、資料結構與新增流程寫進 `AGENTS.md`，讓 AI 讀完文件後可以繼續維護與新增內容。

## 正式公告的要求

| 要求 | 專案中的對應 |
|---|---|
| 自己的小專案與用途 | 個人 Obsidian 醫學筆記庫，提供搜尋與跨筆記閱讀 |
| AGENTS.md 或 CLAUDE.md | 根目錄 `AGENTS.md`，明定結構、分類、來源、視覺、新增流程與驗收 |
| 至少一個可正常瀏覽的頁面 | 根目錄首頁、126 篇筆記頁及待補連結清單 |
| 完整專案上傳 GitHub | 包含公開 Markdown、模板、規則檔、產生程式、圖片與網站成品 |
| 可實際瀏覽的網站 | GitHub Pages 靜態網站 |
| 說明規則如何支援後續新增 | `README.md` 的新增範例及下方的實際延伸紀錄 |
| 內容與規則對應、可以重複使用 | 保留五角度結構；新 Markdown 經同一個建置流程更新首頁、搜尋與雙向連結 |

## 錄影補充

- [1:03:04 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=3784s)：上傳完整專案，老師與助教要看得到規則檔，不能只放成品 HTML。
- [1:06:15 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=3975s)：成果可以是一般文章型網站，不必是簡報。
- [1:50:07 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=6607s)：LLM Wiki 非必做；若做，示範只放一篇 paper 不足。此專案沿用多篇既有筆記與各篇來源，沒有聲稱老師規定固定三篇或其他篇數。
- [2:00:27 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=7227s)：根目錄必須有 `index.html`，新增頁面後要更新首頁連結。`scripts/build.mjs` 同時生成首頁、文章、搜尋索引與反向連結。

## 本次實際新增的兩篇

基礎版本完成後，AI 依本專案規則新增：

1. `content/Guides/Knowledge map workflow.md`：參照既有 `CONTEXT` 與使用說明，整理持續新增筆記的方法。
2. `content/MOC/Cardiovascular reading route.md`：把多篇既有心臟筆記串成閱讀入口，不重寫醫學內容。

兩篇都遵循 frontmatter、alias、來源與 wikilink 格式。重新建置後，筆記數從 124 增加到 126，首頁與搜尋索引自動收錄兩篇，互相引用及既有筆記的反向連結也一併更新。新增頁面使用同一個版型，未手動修改首頁 HTML。

這兩篇用來呈現規則的重複使用與延伸能力，不代表公告強制規定必須新增兩篇。新增工作在本次 AI 對話完成，沒有宣稱通過另一個獨立 AI 的交接測試。

## 繳交內容

NTU COOL 文字輸入應包含專案簡介、GitHub Repository、網站、AGENTS.md 與延伸說明。正式截止為 2026/11/16 23:59；本 repository 的準備與發布不代表已在 NTU COOL 提交。
