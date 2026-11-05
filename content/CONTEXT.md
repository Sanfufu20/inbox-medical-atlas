---
tags:
  - meta
aliases:
  - CONTEXT
  - 筆記系統詞彙表
created: 2026-07-25
updated: 2026-08-03
---

# 醫學筆記 Vault · CONTEXT

這份文件定義**筆記系統本身**的詞彙，不是醫學內容的詞彙。目的是讓每篇筆記的結構、命名、連結方式一致，避免同一個概念在不同資料夾裡長出不同形狀。

> [!warning] 這裡不放實作細節
> 模板長什麼樣、資料夾怎麼排、YAML 有哪些欄位 → 那些屬於模板檔本身與 ADR。這裡只放「一個詞是什麼意思」。

## Language

### 筆記的分層

**行動層 (Action Layer)**：
一篇筆記中回答「現在遇到這個東西，下一步做什麼」的部分。內容是決策所需的紅旗、閾值、劑量、順序。所有筆記必填。
_Avoid_: 速查、cheat sheet、臨床層

**理解層 (Understanding Layer)**：
一篇筆記中回答「為什麼是這樣」的部分。內容是機制、分類、鑑別邏輯。可增量補完，允許暫時留空。
_Avoid_: 深度、機制層、考試層

> [!note] 兩層的邊界
> 判準是**讀者的處境**，不是內容的難度。同一個機制，若它直接改變下一步處置（例：APL 的 DIC 風險 → 立刻給 ATRA），就屬行動層；若它只是解釋為什麼（例：t(15;17) 融合蛋白如何阻斷分化），屬理解層。

### 五個角度

**角度 (Angle)**：
切入同一批醫學知識的一種視角。每個角度對應一個資料夾與固定結構；同一角度可有 subtype 模板（例如 Operation 是 Intervention 的手術版）。系統固定為五個，不隨意增加。
_Avoid_: 面向、維度、分類

**Disease 疾病**：
一個有診斷名稱的病理狀態，是鑑別診斷清單上會出現的東西。Syndrome（如 Shock、SIRS）也放這裡，用 tag 標記，不另立角度。
_Avoid_: 病、diagnosis、condition

**Workup 主訴流程**：
從一個**尚未診斷**的主訴出發的完整臨床流程：問什麼病史、做哪些 PE、開哪些檢查、排哪些鑑別診斷。一篇 Workup 對應一個主訴。這是值班當下會打開的筆記。
_Avoid_: Complaint、Symptom、症狀、主訴

**Test 檢查**：
為了取得資訊而做的動作，涵蓋理學檢查、抽血、影像、病理。四者共用同一套模板，以 `modality` 欄位區分。
_Avoid_: Examination、PE、Lab、檢驗

**Drug 藥物**：
一個藥品或藥理分類。核心是學理機轉、適應症、使用注意事項。
_Avoid_: 用藥、medication

**Intervention 處置**：
為了改變病人狀態而做的動作——手術、透析、插管、引流。與 Test 的分界是**意圖**：取得資訊 → Test；改變狀態 → Intervention。
_Avoid_: 治療、procedure、operation

**Operation 手術**：
Intervention 的 subtype，不是第六個角度。使用 `Operation 手術` 模板，強化適應症、術式選擇、關鍵解剖、術前準備、術後路徑與 must-call threshold；檔案仍放在 `Intervention/`。
_Avoid_: Surgery angle、手術資料夾、外科處置角度

**MOC (Map of Content)**：
一個科別或主題的索引筆記，提供分類骨架與五角度專篇入口。MOC 是**導航層，不是知識物件，也不是第六個角度**；新 MOC 集中放在 `MOC/`。既有的 `Hema Category.md` 等可保留原位，日後再漸進遷移。
_Avoid_: Category、索引、目錄、總覽

**Service 科別歸屬**：
一篇筆記會被哪些臨床團隊使用，以 frontmatter 的 `services:` 陣列表示。同一篇可以同時屬於多科，例如 CAD 可連到 Cardio 與 CardiacSurgery；這不代表要複製兩篇疾病筆記。
_Avoid_: 用資料夾複製一份內科版與外科版、把 service 當成 angle

### 連結與職責

**短清單原則 (Short-list Rule)**：
決定一條跨角度連結該寫在哪一端的判準。若該端的清單短、穩定、值得背（洗腎的 AEIOU、胸痛的鑑別），就寫進 frontmatter；若清單無上限（「哪些病要驗 CBC」），一律不寫，靠 backlinks 撿。
_Avoid_: 雙向連結、bidirectional link

**禁忌 (Contraindication)**：
一條「在某情境下絕對不可執行某動作」的規則。不是獨立的知識物件，因此**沒有自己的資料夾**——它以固定區塊的形式寄生在 Workup / Drug / Intervention / Test 四種筆記裡，用 `#禁忌` tag 串起，由 `禁忌選項.md` 彙整。
_Avoid_: 禁忌症、禁忌肢、絕對禁忌

**Case 案例**：
觸發學習的一次具體遭遇——考古題、case discussion、晨會、真實照顧過的病人。**Case 是知識的來源，不是知識的一部分**：從 case 學到的東西要用通用臨床語言寫進五個角度的筆記，case 本身只記在 `source:` 欄位。因此沒有 Case 資料夾。
_Avoid_: 考古、題目、病例

> [!warning] 這條規則的實際意義
> 筆記裡不寫「考古說要開 EKG」，寫「上腹痛必須開 EKG 排除下壁 MI」。
> 不寫「本題答案是膿胸」，因為換一個 case 答案就不同——但「右上腹痛有六個系統分支」永遠成立。
> 判準：**這句話換一個來源還成立嗎？** 不成立就不該寫進筆記。

**深度歸屬 (Depth Ownership)**：
一個概念的完整解釋只寫在它自己那篇。Disease 與 Workup 頁只寫「要做 UPCR」與判讀結論；UPCR 的原理、計算、干擾因素寫在 `Test/UPCR`。避免同一段機制在五個地方各寫一次然後版本不一。
_Avoid_: DRY、單一真相來源

## Flagged ambiguities

**「Symptom」曾同時指主訴與診斷**
`Symptoms/Pneumonia workup.md` 把診斷放進了主訴資料夾，會讓「主訴 → 鑑別診斷」的連結退化成主訴連主訴。
**解決**：資料夾更名 `Workup/`，只收未診斷的主訴流程；Pneumonia 移入 `Disease/`。

**「Examination」與「PE」語意撞車**
兩個資料夾並存，前者實際放的是 lab（UPCR/UACR），後者空置。
**解決**：合併為 `Test/`，以 `modality: PE | lab | imaging | pathology` 區分。

## Example dialogue

> **學生**：CCB 造成的下肢水腫要寫在哪？
> **系統**：三個地方各寫一段，但職責不同。`Drug/CCB` 寫「副作用：下肢水腫」並連到 `Complaint/水腫`；`Complaint/水腫` 的鑑別清單裡列一條「藥物性」並連回 `Drug/CCB`；`Disease/` 不用寫，因為藥物性水腫不是疾病。
> **學生**：那 UPCR 呢？它是 Test 還是 Intervention？
> **系統**：Test。你做它是為了知道蛋白尿多少，不是為了讓病人變好。透析才是 Intervention——你做它是為了把鉀降下來。
> **學生**：那診斷性腹腔穿刺（diagnostic paracentesis）？
> **系統**：Test。但治療性腹水引流（therapeutic paracentesis）是 Intervention。同一個技術動作，意圖不同就落在不同角度，各寫一篇並互連。
