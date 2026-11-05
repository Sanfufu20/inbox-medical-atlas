# INBOX · 醫學筆記

把既有 Obsidian Inbox 轉成可以搜尋、循連結閱讀、持續新增內容的醫學學習網站。這是生成式 AI 第九週「建立自己的 AGENTS.md／CLAUDE.md」作業：專案規則、Markdown 來源、網站產生程式與可瀏覽成果都放在同一個 repository。

- 網站：https://sanfufu20.github.io/inbox-medical-atlas/
- AI 專案規則：[AGENTS.md](AGENTS.md)
- 作業要求與錄影補充對照：[docs/assignment.md](docs/assignment.md)
- 本次實測：[docs/validation.md](docs/validation.md)

## 這個專案要解決什麼

原本筆記分成 Disease、Workup、Test、Drug、Intervention 五個角度，MOC 負責科別與主題導航。網站保留這套結構，不另外複製一套內容：用中英文別名搜尋、按角度與主題篩選，從一篇走到相關專篇，也能看哪些筆記連回這裡。

現有內容包含 124 篇有內容的原始筆記公開副本，另新增 2 篇導航／使用指南，合計 126 篇。原 Vault 的空檔、歡迎頁、設定、聊天紀錄、Git 歷史與獨立 OSCE 題庫 HTML 不在這份網站專案裡。

所有頁面都從 `content/` 生成。根目錄的 `index.html` 是入口，新筆記建置後會同步進入首頁、搜尋索引、相關連結與反向連結；不必手動逐頁維護目錄。

## 本機執行

需要 Node.js 22+ 與 npm；預覽命令使用 Python 3。

```sh
npm ci --ignore-scripts
npm run build
npm run check
npm run serve
```

打開終端機顯示的本機網址。網站本身是靜態 HTML，不依賴伺服器資料庫、付費 API 或雲端模型。閱讀清單存在讀者自己瀏覽器的 localStorage；網站沒有收集帳號或閱讀紀錄。

## 如何繼續新增

先請 AI 讀 `AGENTS.md`，再提供主題、來源與想要的結果。例如：

> 請先讀 AGENTS.md 與 content/CONTEXT.md。依現有模板整理這份可公開的來源，檢查是否已有同義筆記，補足來源、aliases 與相關連結。不要補寫未查證的醫學結論。完成後重建網站、更新 index.html 和搜尋索引，執行檢查，回報變更與未確認事項。

AI 應修改 `content/` 的 Markdown，然後執行 `npm run build` 與 `npm run check`。`notes/` 和首頁是生成結果；直接改 HTML，下次建置會被覆蓋。

若要再次從 Obsidian 更新公開副本：

```sh
npm run import -- "你的 Obsidian Vault 路徑"
npm run build
npm run check
```

匯入只處理白名單內的筆記、模板與圖片，原 Vault 不會被修改。匯入會更新已有對應來源；不會自行刪除來源端已移除的舊筆記，以免誤刪人工新增內容，移除或重新命名時應一併檢查公開副本。這不是背景自動同步，更新後仍需重新建置與推送。

## 檔案位置

| 位置 | 用途 |
|---|---|
| `AGENTS.md` | 讓 AI 接續專案的規則與驗收方式 |
| `content/` | 可公開的 Markdown 來源，保留 frontmatter 與 wikilinks |
| `templates/` | 原筆記庫的七種模板 |
| `index.html`、`notes/` | 可直接瀏覽的首頁與筆記頁 |
| `assets/site.css`、`assets/site.js` | 網站版型、搜尋與閱讀清單 |
| `assets/notes/` | 筆記圖像；圖說與來源沿用原筆記 |
| `scripts/` | 匯入、建置、檢查流程 |
| `data/` | 匯入清單、全文索引、連結與建置驗證結果 |
| `docs/` | 課程要求、延伸示範與實測紀錄 |

## 保留的邊界

這是個人醫學學習筆記的呈現與工作流程作業。本次沒有逐條重新核對醫學敘述或更新全部指引；「可用／完整」沿用原作者的筆記整理狀態，不等於已經完成臨床驗證。

公開副本移除一條本機檔案 URI，保留其來源名稱；一張畫面含手環文字的圖片僅保留外部來源連結，規則記在 `asset-policy.json`。另有一個含冒號的 YAML 來源字串加上引號以便解析，文字內容不變。來源清單與變動記在 `data/import-manifest.json`。

第三方圖像的出處保留在原筆記中，這份 repository 沒有替它們重新授權。內附 Mermaid 與 KaTeX 的授權文件放在 `assets/vendor/`。

尚未建立的 273 個目標名稱保留為「待補」提示與待補清單，不產生假的文章頁或 404 連結。
