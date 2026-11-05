---
tags:
  - Med/Disease/Cardio
  - arrhythmia
  - 禁忌
aliases:
  - VT
  - VTach
  - 心室頻脈
  - 心室性心搏過速
  - Ventricular Tachycardia
  - 寬 QRS 心搏過速
created: 2026-07-27
updated: 2026-07-27
status: 可用
source: 113-1 醫學(三) 14、113-2 醫學(三) 10、115-2 醫學(三) 12 延伸；2022 ESC 與 2017 AHA/ACC/HRS 心室性心律不整指引
cssclass: clinical-note
presents_as:
  - "[[Chest pain]]"
  - "[[Dyspnea]]"
  - "[[Shock]]"
diagnosed_by:
  - "[[EKG ischemia]]"
  - "[[Echocardiography]]"
treated_by:
  - "[[Amiodarone]]"
  - "[[Beta blocker]]"
  - "[[ICD]]"
differential:
  - SVT with aberrancy
  - "[[Atrial fibrillation]]"
  - "[[Brugada syndrome]]"
complication:
  - "[[Sudden cardiac death]]"
  - "[[Shock]]"
  - 電風暴 electrical storm
---

# Ventricular tachycardia ｜ 心室頻脈 · Ventricular Tachycardia

> [!abstract] 一句話總覽
> 起源於希氏束以下心室組織、連續 **≥3 個**、速率 **＞100 bpm** 的心搏過速。多數由**心肌疤痕的折返**驅動（心肌梗塞後、先天性心臟病術後），少數由**觸發活性或自動性**驅動（Torsades、流出道 VT）。臨床決策只有兩層：**先看血行動力穩不穩（決定電或藥）**，再找**可逆因素（缺血、低鉀、低鎂、藥物）**——把這兩層做完，才輪到談長期預防與裝置。

> [!tip] 30 秒行動卡
> **診斷關鍵**：寬 QRS（**≥120 ms**）＋快 → 先假設是 VT。找 **AV dissociation**、**fusion beat**、**capture beat**；有其中任何一個，診斷成立
> **治療骨架**：**無脈搏 → 立即去顫（非同步）**｜**有脈搏但不穩 → 同步整流**｜**穩定單型性 VT → 靜脈抗心律不整藥**（procainamide 或 amiodarone）。全程同時補鉀補鎂、找缺血
> **絕對不可**：對機轉不明的寬 QRS 心搏過速給 **verapamil**（或其他鈣離子阻斷劑）；**心肌梗塞後給預防性的 lidocaine 或 Class Ic 抗心律不整藥**（**β-blocker 除外——它是唯一該常規給、且真的降低死亡率的那一個**）

---

## 定義與定位

*這個病是什麼？在分類樹的哪個位置？跟隔壁的病靠什麼分開？*

| 項目 | 重點 |
|---|---|
| 本質 | 心室（希氏束分岔以下）自行發動的心搏過速：連續 **≥3 個**心室搏動、速率 **＞100 bpm** |
| 分類位置 | 心搏過速 → 寬 QRS（**≥120 ms**）一支；隔壁是 SVT with aberrancy 與預激性心房顫動 |
| 好發族群 | **有結構性心臟病者**（心肌梗塞後最多）；少數為心臟結構完全正常的特發性 VT |
| 與 VF 的分界 | VT 有可辨識的 QRS 波與（多半）有脈搏；心室顫動（ventricular fibrillation, VF）完全無組織性波形、必無脈搏 |

**三組必背的二分法**

| 分軸 | 兩端 | 為什麼重要 |
|---|---|---|
| 型態 | **單型性**（QRS 每跳都一樣）vs **多型性**（QRS 形狀持續變化） | 單型性＝固定的折返環路（有疤痕）；多型性＝瀰漫性不穩定（缺血或 QT 延長） |
| 持續時間 | **持續性**：**＞30 秒**，或雖未滿 30 秒但因血行動力崩潰而需立即終止｜**非持續性（NSVT）**：≥3 跳但 30 秒內自行終止且無血行動力影響 | 危險分層的基本單位；NSVT 多半不需急性處置，但是底層心臟病的警訊 |
| 機轉 | **疤痕折返型** vs **觸發活性／自動性** | 折返型可被電生理檢查誘發、可被電燒切斷；觸發型多與電解質、藥物、兒茶酚胺有關 |

> [!info] 幾個一眼認出的特殊型態
> - **Torsades de pointes**：多型性 VT ＋ **QT 延長**，QRS 主軸繞著基線扭轉。
> - **Bidirectional VT**：QRS 電軸逐跳左右交替 → 想 **毛地黃中毒** 與 **CPVT**（catecholaminergic polymorphic VT）。
> - **加速性心室自主節律（accelerated idioventricular rhythm, AIVR）**：**40–120 bpm**，常見於再灌流後，**良性、不需抗心律不整藥**——不要把它當 VT 治。

> [!note] 特發性 VT：心臟結構正常，預後好
> **右心室流出道（RVOT）VT**（LBBB 型 ＋ 下壁電軸）對 **adenosine**、β-blocker 有反應；**左後分支型（fascicular／Belhassen）VT**（RBBB 型 ＋ 左軸偏移）**對 verapamil 有反應**——這是 verapamil 唯一站得住腳的場合，而且只在**診斷已經確定之後**才成立（見下方禁忌節）。兩者都好發於年輕、心臟結構正常者，猝死風險低，**導管電燒可根治**。

## 病因與機制

*為什麼會發生？病生理鏈條長什麼樣？——這一節寫好，下面的「臨床表現」就不用背。*

病生理只有三條路：**疤痕圍出的折返環路**、**觸發活性**、**自動性增強**。第一條是慢性的、有固定基質、可以電燒；後兩條多半是急性、可逆、該去找誘因的。

| 機轉 | 典型底層病 | 典型型態 |
|---|---|---|
| **疤痕相關折返** | 心肌梗塞後、擴張型心肌病變、ARVC（arrhythmogenic right ventricular cardiomyopathy）、心臟類肉瘤、**先天性心臟病術後**（法洛氏四重症、大動脈轉位、Fontan） | 持續性**單型性** VT |
| **觸發活性** | 早期後去極化 → 長 QT、Torsades；延遲後去極化 → 毛地黃中毒、CPVT、流出道 VT | 多型性／雙向性／流出道型 |
| **自動性增強** | 急性缺血、兒茶酚胺、低血鉀、低血鎂 | 多型性 VT、VF、AIVR |

> [!tip] 「開過刀的心 ＋ 多年後的心律不整」＝ 疤痕折返
> 法洛氏四重症修補的**右心室切開術（ventriculotomy）** 與補片留下疤痕，疤痕之間的緩慢傳導窄道就是折返環路；長期**肺動脈瓣逆流**造成右心室擴大重塑，再加一層基質。晚期 VT 的發生率各研究差異大，**要記的是風險標記而不是比例：QRS ＞180 ms、5 歲以後才做修補**。見 [[Tetralogy of Fallot]]。

![[assets/vt-scar-reentry-isthmus.jpg|620]]
*Scar-related VT 的 channel／isthmus 模型：疤痕與 functional block 圍出狹窄傳導通道，入口、central isthmus、出口與旁觀路徑可用 pacing 與 electrogram 特徵定位。電燒的核心不是追著最早點跑，而是切斷維持折返所必需的 critical isthmus。Source: [de Chillou et al., *Arrhythm Electrophysiol Rev* 2021, Figure 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC8076974/)（CC BY-NC 4.0）。*

## 臨床表現

*典型病人長什麼樣？哪些症狀是幾乎一定有、哪些是提示性的？*

- **典型**：突發心悸、頭暈、前暈厥；速率快或心功能差時 → 低血壓、[[Shock]]、意識喪失
- **提示性**：**已知有心肌梗塞病史或心衰竭**（這是最有力的臨床線索，比任何心電圖判準都好用）；先天性心臟病手術史；植入 [[ICD]] 者主訴「被電到」
- **少見但重要**：**猝死為首發表現**（見 [[Sudden cardiac death]]）；運動或情緒激動時發作 → 想流出道 VT、CPVT、長 QT 症候群；睡夢中發作 → 想 [[Brugada syndrome]]

> [!danger] 血行動力穩定「不能」用來排除 VT
> 年輕、心功能尚可的病人可以在 VT 下講話、走動、血壓正常。**「他看起來很好，所以不是 VT」是錯的推論**，也是臨床上誤給 verapamil 的最常見起點。

## 診斷

*診斷標準是什麼？要開哪些檢查？哪個是 gold standard？*

| 診斷條件 | 內容 |
|---|---|
| 心律紀錄 | 必須「抓到」心律不整本身：**12 導程心電圖**（最佳）、Holter／事件記錄器、**植入裝置的紀錄**、或**電生理檢查誘發** |
| 型態判定 | QRS **≥120 ms** ＋ 速率 ＞100 bpm ＝ 寬 QRS 心搏過速；再依 QRS 是否逐跳相同分單型／多型 |
| 底層病評估 | [[Echocardiography]] 看 LVEF 與結構；找缺血（見 [[EKG ischemia]]、[[Troponin]]、[[Myocardial perfusion imaging]]、冠狀動脈攝影）；心臟 MRI 找疤痕與浸潤性病變 |
| 一定要驗 | **鉀、鎂**、鈣、腎功能、甲狀腺功能、用藥清單（含延長 QT 的藥） |

> [!tip] 只要病人穩定，一定要在心律不整還在的時候印一張 12 導程
> 發作當下的心電圖有兩個用途：**定位起源**（決定電燒策略）、**回推底層心臟病**（缺血性？結構性？離子通道病？）。發作結束後才補做的心電圖，這兩件事都做不到。

### VT vs SVT with aberrancy

> [!danger] 起手式：寬 QRS 心搏過速預設就是 VT
> 全部寬 QRS 心搏過速中約 **80%** 是 VT；若病人**有心肌梗塞病史**，比例升到 **＞90%**。猜錯的代價完全不對稱：把 SVT 當 VT 治，最壞是多打了一針；把 VT 當 SVT 治並給鈣離子阻斷劑，可能直接造成心臟停止。

**支持 VT 的心電圖徵象（由強到弱）**

| 徵象 | 內容 | 為什麼 |
|---|---|---|
| **AV dissociation** | P 波與 QRS 各走各的，P 波頻率 ＜ QRS 頻率 | 心室自己在跑，心房仍受竇房結指揮——**幾乎確診 VT**（特異度高、敏感度低，因為常看不到 P 波） |
| **Fusion beat** | 一個「混血」QRS：上面下來的竇性衝動與心室的衝動同時去極化心室 | 證明有兩個獨立節律點，等於 AV dissociation 的直接證據 |
| **Capture beat** | 一個突然變窄的正常 QRS：竇性衝動剛好搶在心室之前完全奪取心室 | 同上 |
| **QRS 極寬** | RBBB 型 **＞140 ms**；LBBB 型 **＞160 ms** | 傳導不走 His-Purkinje，只能心肌對心肌慢慢傳 |
| **極端電軸** | 電軸落在 **−90° 至 ±180°**（「西北軸／無人區」） | 正常傳導系統做不出這種向量 |
| **胸前導程 concordance** | V1–V6 **全部正向**或**全部負向** | 去極化向量單向掃過整個胸前，不像正常傳導 |
| 無 RS 波型 | V1–V6 完全找不到 RS 型 QRS | Brugada 演算法第一步 |
| **RS interval ＞100 ms** | 任一胸前導程中，R 起點到 S 谷底 ＞100 ms | Brugada 演算法第二步 |

> [!info] Brugada criteria 的用法只有一句
> 依序看**胸前導程有無 RS → RS interval → AV dissociation → V1／V6 型態**，任一步答「是」就停下來判 VT，四步都不符合才算 SVT with aberrancy。**要記的是這個「先命中先判 VT」的結構，不是每一步的細節**——所有演算法實際表現都比不上「有結構性心臟病 → 當 VT」這條臨床規則。

> [!warning] 不能拿來分辨的三件事
> **血壓、有無症狀、對頸動脈按摩沒反應**——都不能用來判斷是 VT 還是 SVT。年齡是弱線索（**＞35 歲偏向 VT**）。

![[assets/vt-av-dissociation-capture-fusion.jpg|760]]
*確診 VT 的節律條：P 波在 QRS 間獨立 march through（beats 2–10），代表 AV dissociation；第 11、15、20 個 QRS 是 fusion beats，倒數第二個（第 19）較窄的是 capture beat。這三種其實都是「心房與心室各自跑」的不同外觀。Source: [Garner & Miller, *West J Emerg Med* 2008, Figure 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC2672229/)（CC BY 4.0）。*

### 從 QRS 型態反推起源

> [!tip] 一句話原理：心電圖顯示的束枝阻滯型態，指向的是「離起源最遠的那一側」
> 衝動從起源出發，不經 Purkinje 系統、以心肌對心肌的方式慢慢傳到對側 → 對側去極化延遲 → 呈現**該側**的束枝阻滯型態。

| 心電圖線索 | 起源 |
|---|---|
| **LBBB 型**（V1 以 S 波為主） | **右心室**或心室中膈 |
| **RBBB 型**（V1 以 R 波為主） | **左心室** |
| **下壁電軸**（II、III、aVF 正向） | 心臟上方 → **流出道**（RVOT／LVOT） |
| **上壁電軸**（II、III、aVF 負向） | 心臟下方 → 心尖或下壁 |
| LBBB 型 ＋ 下壁電軸 | **右心室流出道** |
| RBBB 型 ＋ 左軸偏移 | 左後分支型（fascicular）VT |

**心肌梗塞後疤痕型 VT** 起源在梗塞區邊緣帶（前壁梗塞多在心尖／中膈，下壁梗塞多在基底下壁，見 [[ACS]]、[[CAD]]）；**法洛氏四重症修補後**是 LBBB 型、起源在右心室；**ARVC** 也是 LBBB 型，與 RVOT VT 的差別在有結構性右心室病變、心電圖有 epsilon wave 與 V1–V3 T 波倒置。心房來源的心律不整只有在合併束枝阻滯或旁路時才寬，**不可能是單型性 VT 的起源**——討論起源時範圍只在左右心室與中膈。

![[assets/vt-qrs-morphology-origin.jpg|700]]
*兩個實例把三條定位規則壓在一起：上排 (a) 的 V1 呈 LBBB pattern，支持右心室起源；下排 (b) 的 V1 呈 RBBB pattern，支持左心室起源，而 II／III／aVF 主要向下、正向的 inferior axis 指向上方的 outflow tract 起源。這是方向線索，不是 100% 的解剖定論。Source: [Siontis et al., *Ann Noninvasive Electrocardiol* 2023, Figure 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10335623/)（CC BY-NC-ND 4.0）。*

### Torsades de pointes

| 項目 | 內容 |
|---|---|
| 定義 | **多型性 VT ＋ 基礎心律的 QT 延長**；QRS 主軸繞基線扭轉，常由 **short–long–short** 序列（早搏 → 代償間歇 → 落在 T 波上的早搏）誘發 |
| 危險門檻 | **QTc ＞500 ms** 風險明顯上升；**＞600 ms** 高危 |
| 藥物原因 | **Class IA**（quinidine、procainamide、disopyramide）、**Class III**（sotalol、dofetilide、ibutilide）、macrolide（erythromycin、clarithromycin）、fluoroquinolone（moxifloxacin）、azole 抗黴菌藥、抗精神病藥（haloperidol、thioridazine）、methadone、ondansetron、三環抗憂鬱劑、arsenic trioxide |
| 代謝原因 | **低血鉀**（見 [[Hypokalemia]]）、**低血鎂**、低血鈣、飢餓／厭食症、甲狀腺功能低下、心搏過緩與長間歇（含高度房室阻滯）、[[Dialysis]] 後電解質急速變動 |
| 先天原因 | [[Long QT syndrome]] |

**處置順序**：① 停掉所有可能延長 QT 的藥 → ② **靜脈硫酸鎂 1–2 g 於 15 分鐘內給完**，必要時重複——**即使血鎂正常也要給** → ③ **把血鉀補到高標**（約 4.5–5.0 mmol/L）→ ④ 仍反覆發作就**提高心率**縮短 QT：暫時性經靜脈**超速起搏（overdrive pacing）** 或 **isoproterenol** → ⑤ 惡化成持續性或無脈搏 → **立即電擊**

> [!danger] 兩個關鍵的例外
> - **isoproterenol 不可用於先天性長 QT 症候群**（腎上腺素刺激會誘發，該用 [[Beta blocker]]），也不可用於進行中的心肌缺血。
> - **QT 正常的多型性 VT 不是 Torsades**：那通常是**急性心肌缺血**，鎂沒有用，要做的是找冠狀動脈病灶並再灌流（見 [[ACS]]）。**QT 正／不正常，決定了完全不同的兩條處置路徑。**

![[assets/torsades-de-pointes-ecg.jpg|700]]
*後天長 QT 與 TdP 的連續紀錄：發作常由落在延長 QT／T 波上的 PVC 與 short–long–short sequence 啟動；之後 QRS 振幅與電軸繞基線週期性改變，形成 twisting of the points。A 顯示快速時以振幅起伏為主，B 較清楚呈現正負極性扭轉，C 顯示同一病人不同發作型態。Source: [El-Sherif et al., *Arrhythm Electrophysiol Rev* 2018, Figure 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC6528034/)（CC BY-NC 4.0）。*

## 鑑別診斷

*要跟誰分清楚？靠什麼分？*

| 要排除的 | 支持它的線索 | 怎麼排除 |
|---|---|---|
| SVT with aberrancy | 無結構性心臟病；發作前後心電圖顯示**同樣型態的束枝阻滯**；有 P 波在每個 QRS 前 | 找 **AV dissociation／fusion／capture**（有 → VT）；Brugada criteria；**懷疑時仍當 VT 處理** |
| 預激性心房顫動（WPW ＋ Afib） | **不規則**且極快（可 ＞250 bpm）、QRS 寬度逐跳變化 | 節律不規則是關鍵；**禁用 AV 節阻斷藥**（adenosine、verapamil、diltiazem、digoxin、β-blocker），用 procainamide 或電擊。見 [[Atrial fibrillation]] |
| 心室顫動 | 完全無組織性 QRS、必定無脈搏 | 立即 CPR ＋ 非同步去顫 |
| 藥物／電解質造成的寬 QRS ＋ 心搏過速 | 高血鉀（QRS 漸寬、T 波高尖）、三環抗憂鬱劑中毒（QRS ＞100 ms、aVR 終末 R 波） | 抽電解質、問用藥；高血鉀給鈣、TCA 中毒給碳酸氫鈉 |
| 起搏器介導的心搏過速 | 每個寬 QRS 前有 pacing spike | 看 spike；磁鐵測試 |
| 加速性心室自主節律（AIVR） | **速率僅 40–120 bpm**、常見於再灌流後、血行動力穩定 | 靠速率；**不需抗心律不整藥** |

## 治療

*第一線是什麼？什麼情況升級？*

### 急性處置：先問「有沒有脈搏」，再問「穩不穩」

| 情境 | 處置 |
|---|---|
| **無脈搏 VT／VF** | **立即非同步去顫**（雙相 120–200 J，依機型）＋ 高品質 CPR；epinephrine 1 mg 每 3–5 分鐘；第三次電擊後給 **amiodarone 300 mg** 靜脈推注（可再追加 150 mg），或 **lidocaine 1–1.5 mg/kg** |
| **有脈搏但不穩定**（低血壓、意識改變、休克、缺血性胸痛、急性心衰竭） | **立即同步整流（synchronized cardioversion）**；清醒者先鎮靜。單型性 VT 在**傳統教材是雙相 100 J 起始；2020 ACLS 已刪掉具體焦耳數，改成依機器建議**——考試照舊版寫 100 J，臨床照機器 |
| **有脈搏、穩定、單型性 VT** | 靜脈抗心律不整藥：**procainamide** 或 **amiodarone**（150 mg 於 10 分鐘給完，可重複，再 1 mg/min 維持 6 小時）；藥物無效 → 鎮靜後同步整流 |
| **多型性 VT** | 通常無法可靠同步 → **當作 VF 用高能量非同步電擊**。同時分流：QT 長 → 給鎂（Torsades 路徑）；QT 正常 → 找**急性缺血**並再灌流 |
| **全程並行** | 補**鉀**與**鎂**、矯正缺氧與酸中毒、停掉致心律不整藥物、找並治療急性缺血 |

> [!info] 穩定單型性 VT 該用哪個藥：procainamide 略勝一籌
> **PROCAMIO** 研究（血行動力可耐受的寬 QRS 心搏過速，procainamide vs amiodarone）顯示 procainamide 的**重大心臟不良事件明顯較少**、**40 分鐘內終止心律不整的比例較高**。但 procainamide 本身延長 QT、又是負性肌力藥，**嚴重左心室功能不全或失代償心衰竭時偏好 amiodarone**。

> [!warning] adenosine 的位置很窄
> 只有在「**規則、單型性**寬 QRS 心搏過速，且臨床強烈懷疑是 SVT with aberrancy」時，才可作為診斷兼治療的嘗試。**不規則或多型性時絕對不給**（可能是預激性心房顫動，會惡化成 VF）。它不是用來「試試看是不是 VT」的萬用工具。

### 長期預防：順序不能顛倒

| 層次 | 內容 |
|---|---|
| **① 先矯正可逆因素** | **心肌缺血**（血運重建）、**低血鉀／低血鎂**、致 QT 延長藥物、甲狀腺功能異常、心衰竭失代償 |
| **② 藥物** | **[[Beta blocker]] 是唯一有存活好處的抗心律不整治療**；心衰竭者完整用上 ACEI／ARNI、MRA、SGLT-2 抑制劑（本身就降低猝死） |
| **③ 抗心律不整藥（症狀性）** | [[Amiodarone]]、sotalol 可**減少 VT 發作與 ICD 放電，但不改善存活**——它們的定位是「減少症狀與電擊」，不是「救命」 |
| **④ 裝置** | 見下方「什麼時候該想到裝置」 |
| **⑤ 導管電燒** | **特發性 VT（RVOT／fascicular）：第一線，可根治**｜疤痕型 VT：用於反覆發作、藥物無效、反覆 ICD 放電、電風暴 |

> [!tip] 什麼時候該想到裝置——判斷點在這裡，細節在 [[ICD]]
> ① **已經發生過**非可逆原因的持續性 VT／VF 或心因性昏厥 → 想**次級預防**；② **還沒發生但心功能差**（LVEF 低、心衰竭）且已過等待期 → 想**初級預防**；③ **修補過的先天性心臟病出現自發性 VT**（如法洛氏四重症術後）、遺傳性心律不整症候群、高風險 [[HCM]] → 依各自的風險分層。**具體的 LVEF 門檻、等待期天數與試驗證據全部寫在 [[ICD]]，這裡不重複**；這裡只記一個前提：**先確定原因不可逆，再談裝置。**

## 併發症與預後

*住院時要盯什麼？出院後會怎麼樣？*

- **要盯的併發症**：退化成心室顫動 → [[Sudden cardiac death]]；血行動力崩潰 → [[Shock]]；**電風暴**（24 小時內 ≥3 次獨立的 VT／VF 發作或 ICD 適當放電）；心搏過速性心肌病變（長期未控制的頻繁 VT／NSVT）
- **預後因子**：**左心室射出分率**是最強的單一預後因子；有無結構性心臟病（特發性 VT 預後接近常人）；持續性 vs 非持續性；能否找到並矯正可逆原因

> [!info] 心肌梗塞後的 VT：48 小時是分水嶺
> | | **早期（＜48 小時）** | **晚期（＞48 小時）** |
> |---|---|---|
> | 機轉 | 急性缺血／再灌流造成的**電氣不穩定** | **疤痕**形成的折返基質 |
> | 意義 | 與長期猝死風險關聯低 | **預後差，猝死風險高** |
> | 當下處置 | 電擊或靜脈抗心律不整藥終止、矯正電解質與缺血、給 β-blocker | 同左，並積極找持續缺血與心衰竭 |
> | 之後要不要裝置 | **不因此裝** | **要評估**（依 [[ICD]] 的等待期與 LVEF 規則；晚期持續性 VT／VF 屬次級預防範疇） |
> | 預防性抗心律不整藥 | **兩邊都不給** | **兩邊都不給** |

> [!danger] CAST 的教訓：壓下心室早期收縮 ≠ 救命
> **CAST** 收的是**心肌梗塞後、有無症狀心室早期收縮、EF 偏低的病人**（不是急性期病人），用 **flecainide／encainide**（Class Ic）成功壓制了早搏，結果**心律不整死亡與總死亡率雙雙上升**，試驗提前中止。同樣邏輯，**預防性 lidocaine** 雖能減少原發性心室顫動，卻增加心搏過緩與傳導阻滯，總死亡率不降反升，已被明確廢除。
> **這條教訓要記成通則：抑制一個替代指標（早搏），不等於改善結局。真正降低梗塞後猝死的只有 [[Beta blocker]] 與 [[ICD]]。**

## 禁忌與陷阱

> [!danger] 絕對不可
> | 情境 | 絕對不可 | 為什麼 | 該做什麼 |
> |---|---|---|---|
> | **機轉不明的寬 QRS 心搏過速** | 給 **verapamil**（或 diltiazem） | 若其實是 VT，負性肌力 ＋ 血管擴張 → 血壓崩潰、退化成 VF、心臟停止 | **預設當 VT 處理**：穩定 → procainamide／amiodarone；不穩定 → 同步整流。verapamil 只保留給**已確診**的 fascicular VT |
> | **心肌梗塞後**（急性期與慢性期都一樣）恢復竇性節律後 | 給**預防性的 lidocaine 或 Class Ic 抗心律不整藥**（**β-blocker 除外——它是唯一該常規給、且真的降低死亡率的那一個**） | **急性期**：2017 AHA/ACC/HRS 列為 **Class III: Harm**——「疑似急性心肌梗塞病人預防性給 **lidocaine 或高劑量 amiodarone** 有害」；**慢性期**：**CAST** 證明壓制早搏反而增加死亡 | 確認再灌流成功、補鉀補鎂、給 **[[Beta blocker]]**；晚期事件再依規則評估 [[ICD]] |
> | 病人**血行動力不穩定**的 VT | 忙著分辨是 VT 還是 SVT 而延誤處置 | 初始治療目標是**穩定血行動力**，不是先貼上正確的心律標籤 | **立即同步整流**（無脈搏則非同步去顫） |
> | 結構性心臟病（尤其冠狀動脈疾病）病人 | 用 **Class Ic 抗心律不整藥**（flecainide、propafenone） | 在有疤痕的心肌上具致心律不整性，增加死亡率 | 用 β-blocker、amiodarone；需要根治時走電燒 |
> | **Torsades de pointes** | 給 **Class IA 或 Class III** 抗心律不整藥（procainamide、sotalol、ibutilide） | 這些藥本身延長 QT，等於加油 | **硫酸鎂 1–2 g 靜脈**（血鎂正常也給）、補鉀、停致病藥、必要時 overdrive pacing |
> | **預激性心房顫動**（不規則寬 QRS 快速心律） | 給 AV 節阻斷藥（adenosine、verapamil、diltiazem、digoxin、β-blocker） | 阻斷房室結會把衝動全部推往旁路 → 心室率暴衝 → VF | procainamide，或直接同步整流 |
> | **VT／VF 由可逆原因造成**（急性缺血、低血鉀、藥物延長 QT） | 直接安排植入 [[ICD]] | 矯正原因後不再發，白挨一刀還帶終身併發症 | 先矯正、觀察；仍反覆發作再評估——詳見 [[ICD]] |

> [!warning] 常見錯誤
> - 把 **LBBB 型 → 左心室** 記反了。規則是**顯示的束枝阻滯型態指向離起源最遠的一側**：**LBBB 型 → 右心室**，**RBBB 型 → 左心室**。
> - 把「多型性 VT 一律給鎂」當通則——**QT 正常的多型性 VT 是缺血，要做的是再灌流**。
> - 血鎂正常就不給鎂——**Torsades 的鎂是不看血中濃度給的**。
> - 對多型性 VT 嘗試「同步」整流——同步訊號抓不到 R 波，機器可能不放電；**多型性用非同步高能量電擊**。
> - 把 **AIVR（40–120 bpm）** 當 VT 治——它是再灌流的良性訊號。
> - 把「[[Amiodarone]] 減少 ICD 放電」誤讀成「amiodarone 降低死亡率」——**它改善的是發作次數，不是存活**。
> - 忘記 [[ICD]] 適當放電**是預後變差的訊號**，不是「已經沒事了」。

## 相關連結

- **裝置與終點**：[[ICD]]（適應症門檻、等待期、試驗證據、併發症全部在那裡）、[[Sudden cardiac death]]
- **可逆原因與基質**：[[ACS]]、[[CAD]]、[[EKG ischemia]]、[[Troponin]]、[[Hypokalemia]]
- **藥物**：[[Beta blocker]]（唯一有存活好處的抗心律不整治療）、[[Amiodarone]]（減少發作、不改善存活）
- **鑑別與底層病**：[[Brugada syndrome]]、[[Long QT syndrome]]、[[Tetralogy of Fallot]]、[[HCM]]、[[Atrial fibrillation]]、[[Heart failure]]
- **主訴入口與評估**：[[Chest pain]]、[[Dyspnea]]、[[Shock]]、[[Echocardiography]]
