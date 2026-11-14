# 第九週作業要求對照

本專案題目是「把我的 Obsidian Inbox 變成可持續擴充的醫學筆記網站」。重點是把既有整理方法、資料結構與新增流程寫進 `AGENTS.md`，讓 AI 讀完文件後可以繼續維護與新增內容。

## 正式公告的要求

| 要求 | 專案中的對應 |
|---|---|
| 自己的小專案與用途 | 個人 Obsidian 醫學筆記庫，提供搜尋與跨筆記閱讀 |
| AGENTS.md 或 CLAUDE.md | 根目錄 `AGENTS.md`，明定結構、分類、來源、視覺、新增流程與驗收 |
| 至少一個可正常瀏覽的頁面 | 根目錄首頁、127 篇筆記頁及待補連結清單 |
| 完整專案上傳 GitHub | 包含公開 Markdown、模板、規則檔、產生程式、圖片與網站成品 |
| 可實際瀏覽的網站 | GitHub Pages 靜態網站 |
| 說明規則如何支援後續新增 | `README.md` 的新增範例、下方的實際延伸紀錄，以及全新 AI 對話的交接測試 |
| 內容與規則對應、可以重複使用 | 保留五角度結構；新 Markdown 經同一個建置流程更新首頁、搜尋與雙向連結 |

## 錄影與投影片補充

以下是 11/3 課堂錄影與投影片中，NTU COOL 書面說明沒有寫出、但老師口頭強調的要求，以及本專案的對應。

- [1:03:04 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=3784s)：上傳完整專案，老師與助教要看得到規則檔，不能只放成品 HTML。
- [1:06:15 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=3975s)：成果可以是一般文章型網站，不必是簡報。
- [1:50:07 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=6607s)：LLM Wiki 非必做；若做，示範只放一篇 paper 不足。此專案沿用多篇既有筆記與各篇來源，沒有聲稱老師規定固定三篇或其他篇數。
- [2:00:27 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=7227s)：根目錄必須有 `index.html`，新增頁面後要更新首頁連結。`scripts/build.mjs` 同時生成首頁、文章、搜尋索引與反向連結。
- [1:02:19 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=3739s)：每一則內容各自成為一頁，而且「至少要分區」整理成列表。本專案每篇筆記一頁，首頁依五個角度與科別篩選。
- [0:29:17 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=1757s)與投影片第 18–19 頁：好老闆要說清楚「要什麼成品、有什麼限制、怎麼算做完」，動手前先給計畫、不刪檔、不確定的放待確認。`AGENTS.md` 的「接到任務時」一節依此寫成。
- [0:42:36 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=2556s)：不要直接拿別人的 AGENTS.md／CLAUDE.md 或 clone 別人的專案來用。本專案由作者選定自己的 Obsidian 筆記庫為題，AI 依筆記庫原有的結構（五個角度、MOC、模板、深度歸屬）整理成 AGENTS.md，沒有套用網路上的範本。
- [0:37:20 起](https://www.youtube.com/watch?v=P5-mW2uAH4A&t=2240s)：成果若因使用的工具不同而有差異，可以註明工具與模型。繳交內容會寫明建置與交接測試各用了哪個 AI。
- 投影片第 24 頁：每次開新對話先說「請先讀 AGENTS.md，瞭解這個專案的內容。」交接測試就是只用這句開場。

## 第 10 週助教課的第九週作業解說

[2:28:16 起](https://www.youtube.com/watch?v=pEmuTl9vTf8&t=8896s)（11/10 錄影）助教補充第九週的評分重點：

| 助教說的 | 本專案的對應 |
|---|---|
| 繳交要有專案介紹、GitHub 與網頁連結；AGENTS.md 放在 repo 裡，也可另外寫出來 | 繳交內容附連結與 AGENTS.md 全文 |
| 要寫出 AI 之後如何繼續新增資料，例如命名規則、下次丟新資料進來時 AI 怎麼完成 | `AGENTS.md` 的結構、命名與新增流程；`README.md` 的匯入指令 |
| 沒附連結、網頁打不開、repo 裡沒有 AGENTS.md／CLAUDE.md 都會扣分 | 公開 repo、GitHub Pages 正式網址，AGENTS.md 在根目錄 |
| 題目要能持續新增內容 | 筆記庫會持續累積，每篇一頁 |
| 不能交只有本機才打得開的網址；repo 要設公開 | 網址為 GitHub Pages；repo 為 Public |
| AGENTS.md 要寫清楚資料格式、命名與放哪個資料夾 | 「結構與單一來源」與「筆記規則」 |
| 不能放個資、密碼、API key | 匯入白名單與隱私掃描；不含金鑰 |
| 開新視窗、給一份新資料測試 AGENTS.md；不符合預期就補規則 | 全新 AI 交接測試與據此補的規則，見 [validation.md](validation.md) |
| 高分關鍵：寫出給誰用、自己的關鍵決定、AI 哪裡不好、怎麼測試與修改、學到什麼（[2:26:36 起](https://www.youtube.com/watch?v=pEmuTl9vTf8&t=8796s)） | 寫在繳交內容的「設計決定與 AI 協作過程」 |

## 依規則實際新增的三篇

基礎版本完成後，AI 依本專案規則新增：

1. `content/Guides/Knowledge map workflow.md`：參照既有 `CONTEXT` 與使用說明，整理持續新增筆記的方法。
2. `content/MOC/Cardiovascular reading route.md`：把多篇既有心臟筆記串成閱讀入口，不重寫醫學內容。
3. `content/MOC/Renal reading route.md`：由一個全新的 AI 對話新增。它沒有前面對話的任何背景，只收到「請先讀 AGENTS.md，瞭解這個專案的內容」和一句需求。

三篇都遵循 frontmatter、alias、來源與 wikilink 格式。重新建置後，筆記數從 124 增加到 127，首頁與搜尋索引自動收錄，互相引用及既有筆記的反向連結也一併更新。新增頁面使用同一個版型，未手動修改首頁 HTML。

這三篇用來呈現規則的重複使用與延伸能力，不代表公告規定必須新增固定篇數。前兩篇在建置專案的同一個 AI 對話中完成；第三篇是另一個 AI 在全新對話中完成的交接測試，過程與發現的問題記在 [validation.md](validation.md)。

## 繳交內容

NTU COOL 文字輸入應包含專案簡介、GitHub Repository、網站、AGENTS.md 與延伸說明。正式截止為 2026/11/16 23:59；本 repository 的準備與發布不代表已在 NTU COOL 提交。
