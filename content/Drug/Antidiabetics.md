---
tags:
  - Med/Drug/Endo
  - 禁忌
aliases:
  - Antidiabetics
  - 降血糖藥
  - 口服降血糖藥
  - OHA
  - Metformin
  - SGLT2 inhibitor
  - GLP-1 receptor agonist
  - DPP-4 inhibitor
  - Sulfonylurea
  - Insulin
  - Pioglitazone
  - Acarbose
created: 2026-07-28
updated: 2026-07-28
status: 可用
source: 114-1 醫學(三) 54、114-2 醫學(三) 57、115-1 醫學(三) 67、115-1 醫學(三) 56 延伸；ADA Standards of Care；KDIGO 糖尿病合併慢性腎病指引；ACR Manual on Contrast Media（metformin 與顯影劑）；2024 多學會 GLP-1 receptor agonist 圍術期共識；美國 FDA 圍術期停用 SGLT2 inhibitor 安全通訊；健保署《藥品給付規定》第 5.1 節；各藥仿單
cssclass: clinical-note
drug_class: 降血糖藥總論（biguanide／sulfonylurea／glinide／thiazolidinedione／DPP-4 inhibitor／SGLT2 inhibitor／GLP-1 receptor agonist／α-glucosidase inhibitor／insulin）
indication:
  - "[[T2DM]]"
  - "[[Heart failure]]"
  - 糖尿病合併慢性腎病
  - 肥胖與體重管理
adverse_effect:
  - 低血糖
  - lactic acidosis
  - euglycemic DKA
  - 體重增加與水腫
  - 生殖泌尿道黴菌感染
  - 維生素 B12 缺乏
contraindication:
  - eGFR ＜30：不用 metformin
  - 已確立的 NYHA Class III／IV 心衰竭：禁止起始 pioglitazone（有症狀的心衰竭則屬「不建議」）
  - 甲狀腺髓質癌或 MEN 2 病史：不用長效 GLP-1 receptor agonist（Byetta 與 lixisenatide 無此黑框）
  - GLP-1 receptor agonist 與 DPP-4 inhibitor 不建議併用（屬「不建議」，非仿單禁忌）
---

# Antidiabetics ｜ 降血糖藥總論 · 口服降血糖藥與胰島素

> [!abstract] 一句話總覽
> 所有降血糖藥只做四件事之一：**少放糖進血液**（抑制肝糖新生、延緩腸道吸收）、**多把糖搬走**（周邊攝取、從尿排掉）、**多放胰島素**（促泌）、**直接補胰島素**。**只有直接補胰島素、或直接逼 β 細胞放胰島素的藥會單獨造成低血糖**；腸泌素類雖促泌但屬**葡萄糖濃度依賴性**，血糖不高就不硬逼 β 細胞，風險仍低——這條規則遇到沒看過的新藥也能推。近十年最大的改變是**選藥已不只看降糖力**：合併心衰竭或慢性腎病用 SGLT2 inhibitor、合併 ASCVD 或需顯著減重用 GLP-1 receptor agonist，**即使 HbA1c 已達標**。

> [!tip] 開藥速查
> **第一線**：**metformin** 500 mg 隨餐 QD 起始，每 1–2 週加量，維持 **1000 mg BID**；上限即釋 2550 mg／日、緩釋 2000 mg／日，實務目標 **2000 mg／日**。HbA1c 距目標 ＞1.5–2.0% 時一開始就用兩種藥
> **合併 [[Heart failure]] 或慢性腎病** → **SGLT2 inhibitor**；**合併 ASCVD（[[CAD]]／[[ACS]]／中風／周邊動脈疾病）或需顯著減重** → **GLP-1 receptor agonist**；兩者都**不必等 HbA1c 沒達標才加**
> **腎功能門檻**：metformin **eGFR ＜30 停用**、30–44 不新開且已用者減量；SGLT2 inhibitor **要分清是哪一個適應症**——**降糖**門檻較高（dapagliflozin／ertugliflozin ＜45、canagliflozin／empagliflozin ＜30 即不建議），**心腎**適應症才低到 **eGFR 20–25**，已在用者可續用至開始透析
> **目標個別化**：一般成人 **HbA1c ＜7.0%**；病程短、無心血管疾病者可 **＜6.5%**；有嚴重低血糖病史、預期壽命有限、多重共病的衰弱長者放寬至 **＜8.0%**——看到「一律／皆／不論年齡」先刪

## 機轉 Mechanism

*八類藥作用在不同器官，但判斷低血糖風險只問一件事：**會不會在血糖已經低的時候，還繼續強迫胰島素分泌（或直接補上胰島素）**。*

![[assets/antidiabetics-organ-targets.svg|960]]
*作用器官總圖：綠＝不靠分泌（單用通常不低血糖）、橘＝葡萄糖依賴性促泌（血糖低時會煞車）、紅＝強迫分泌／直接補充（低血糖高風險）。GLP-1 RA 同時作用在 β 細胞與腸腦軸，所以圖上出現兩次。*

## 全類藥橫向對照

| 藥類 | 代表藥 | 機轉一句話 | 低血糖 | 體重 | 心腎效益 | 一定要記的那一件事 |
|---|---|---|---|---|---|---|
| **Biguanide** | **Metformin** | **肝**：肝糖新生 ↓ | **低** | 中性至微降 | 中性 | **eGFR ＜30 停用**；長期用會缺 **B12** |
| **Sulfonylurea** | Glimepiride、Glipizide、Gliclazide | **β 細胞**：關 **K-ATP 通道** → 強迫放胰島素（不看血糖） | **最高** | **增加** | 中性 | **兩欄都輸**；低血糖可持續一整天以上 |
| **Glinide** | Repaglinide、Nateglinide | **β 細胞**：同一個 K-ATP 通道，但**起效快、作用短** | 中 | 增加 | 中性 | 隨餐吃、**不吃就不吃藥**；打餐後高峰 |
| **Thiazolidinedione** | **Pioglitazone** | **肌肉／脂肪**：**PPAR-γ** → 胰島素敏感性 ↑、脂肪重分布 | 低 | **增加** | **心衰竭惡化** | **NYHA III–IV 才是仿單禁忌**；水腫、骨折、膀胱癌 |
| **DPP-4 inhibitor** | Sitagliptin、Linagliptin | **β 細胞**：腸泌素不被降解 → **葡萄糖依賴性**促泌 | 低 | **中性** | 中性 | 是**中性不是減重**；**不建議與 GLP-1 RA 併用** |
| **SGLT2 inhibitor** | Empagliflozin、Dapagliflozin | **腎近端小管**：葡萄糖再吸收 ↓ → **尿糖排出** | 低 | **下降 2–3 kg** | **心衰竭＋慢性腎病都有益** | **euglycemic DKA**；禁食／手術前要停 |
| **GLP-1 receptor agonist** | Semaglutide、Liraglutide、Dulaglutide、**Tirzepatide**（GIP／GLP-1 雙重） | **β 細胞＋腸腦軸**：葡萄糖依賴性促泌＋glucagon ↓＋**胃排空 ↓**＋食慾 ↓ | 低 | **下降最多** | **ASCVD 與腎臟有益** | **甲狀腺髓質癌／MEN 2 禁用**（Byetta、lixisenatide 例外） |
| **α-glucosidase inhibitor** | **Acarbose**、Miglitol | **腸**：刷狀緣 α-glucosidase ↓ → **雙醣分解與吸收延後** | 低 | 中性 | 中性 | 低血糖時**只有葡萄糖有效、蔗糖無效** |
| **Insulin** | 速效／短效／中效／長效 | **外源性補充**：直接補胰島素，不受血糖回饋煞車 | **最高** | **增加** | 中性 | **沒有劑量上限、降糖力最強** |

> [!info] 這張表濃縮成一句
> **兩欄都輸的只有 sulfonylurea 與胰島素；兩欄都贏的是 GLP-1 receptor agonist 與 SGLT2 inhibitor；DPP-4 inhibitor 是「低血糖贏、體重打平」。**

> [!warning] 三個反直覺，是這一篇最容易踩的地方
> - **Glucagon 不是降血糖藥**——它是**升糖**荷爾蒙，臨床角色是**治療嚴重低血糖**（1 mg IM／SC，另有鼻噴劑型），也用於 β-blocker／鈣離子阻斷劑中毒與內視鏡抑制腸蠕動。名字裡同樣有 glucagon 的 **GLP-1 receptor agonist 方向卻相反**。
> - **併用 acarbose 的病人低血糖時，只有純葡萄糖有效**；蔗糖、方糖、含蔗糖飲料**無效**——蔗糖要靠那個已被抑制的酵素才能分解成葡萄糖與果糖。
> - **反調節荷爾蒙只有四個**：**glucagon、catecholamine、glucocorticoid、growth hormone**，任何一個過多都造成高血糖。**甲狀腺素過多也會使血糖上升，但不列在這四個之內。**

## 各類藥細節

> [!note]- Metformin：eGFR 45／30 兩條線、顯影劑有三套版本、lactic acidosis 與 B12 缺乏
> - **eGFR 門檻**：≥45 照常用；**30–44 不新開、已在用者減量並加密追蹤腎功能**；**＜30 停用**。失代償肝硬化（見 [[Cirrhosis]]）也避免。
> - **顯影劑三套版本，作答前先看題目問誰**：**現行 ACR 指引**——eGFR ≥30 且無急性腎損傷 → 不必停；＜30、疑似或已知急性腎損傷、或動脈導管檢查可能栓塞腎動脈 → 停藥 48 小時、複查腎功能無惡化再恢復。**美國仿單**較保守（eGFR **30–60**、肝病／酗酒／心衰竭病史、或**動脈內注射**即應停）。**台灣不少醫院仍沿用 2010 年舊做法**（前後各停 48 小時、不分 eGFR）。**問「指引」用 30 這條線，問「仿單」是 60 這條線。**
> - **Lactic acidosis 極罕見（統合分析在 7 萬病人年中未觀察到任何一例）但一旦發生死亡率高**：真正的觸發因子是**清除下降加上組織缺氧**——急性腎損傷、休克、敗血症、脫水、失代償心衰竭、大量飲酒；表現為陰離子間隙加大的代謝性酸中毒（見 [[Arterial blood gas]]、[[Shock]]）。
> - 長期使用干擾 **維生素 B12 吸收** → 周邊神經病變或 [[Anemia]]，長期使用者定期驗 B12。腸胃不適很常見，隨餐服用、緩慢加量或改緩釋劑型多可改善。

> [!note]- Sulfonylurea ＋ glinide：低血糖可撐 24 小時以上、repaglinide 對腎友善、新生兒糖尿病反而該用
> - 直接關閉 β 細胞 **K-ATP 通道**，而且**不管當下血糖高低都照放**——這就是低血糖風險最高的理由。**低血糖可持續 24 小時以上，過量者必須留院觀察，不能給一顆糖就回家**；反覆低血糖時除葡萄糖外加 **octreotide**（壓住胰島素分泌）。
> - 老人、腎功能不良、進食不規律者風險最高（低血糖 → 跌倒、[[Delirium]]）；**glyburide／glibenclamide 在老人與腎功能不良者應避免**，改用 **glipizide 或 gliclazide**。
> - **Glinide** 起效快、作用短，隨餐服用專打餐後高峰，**不吃那一餐就不吃那一次藥**；**repaglinide 主要經肝臟代謝，腎功能不良時相對安全**，**nateglinide 的活性代謝物會在腎衰竭時蓄積**。
> - **反過來，該用 sulfonylurea 的族群**：**KCNJ11／ABCC8 突變的新生兒糖尿病**最經典（活化的 K-ATP 通道正好被 sulfonylurea 關掉，約九成可由胰島素轉為高劑量 sulfonylurea）、**MODY 1（HNF4A）與 MODY 3（HNF1A）**；而 **LADA 或 β 細胞已明顯衰竭的 [[T2DM]] 後期不要用**，逼它加班只會加速衰竭（先驗 anti-GAD65 與 C-peptide）。

> [!note]- Pioglitazone 與 DPP-4 inhibitor：心衰竭禁忌只到 NYHA III–IV、「體重中性」不等於減重
> **Pioglitazone（PPAR-γ）**
> - **層級不要對調**：**已確立的 NYHA Class III／IV 心衰竭「起始 pioglitazone」才是仿單禁忌**，任何有症狀的心衰竭則屬「不建議使用」，NYHA I–II 併用胰島素時風險再升高。機轉是 PPAR-γ 促進遠端腎小管留鈉 → 體液滯留、心衰竭惡化住院。
> - **骨折風險上升**（尤其停經後女性的遠端肢體）、**體重增加**（一部分水腫、一部分皮下脂肪）；**膀胱癌訊號**：使用超過 1 年風險可能上升 20–40%，各研究不一致，**FDA 現行標示為活動性膀胱癌不可使用、有病史者慎用**，用藥中新發生血尿或頻尿急尿要立即評估。
> - 起效慢，**8–12 週**才看得到完整降糖效果，不要兩週沒反應就換藥；對 [[MASLD]]／脂肪肝炎有改善組織學的證據，但增重與水腫限制使用。
> **DPP-4 inhibitor**
> - 讓內生性腸泌素不被分解 → 葡萄糖依賴性促泌、抑制升糖素；**體重中性、低血糖低，但它不會減重**，這點必須與 SGLT2 inhibitor、GLP-1 receptor agonist 分開。
> - **不建議與 GLP-1 receptor agonist 併用——層級是「不建議」，不是仿單禁忌**：同一條腸泌素路徑，三合一僅多降約 0.3% HbA1c 而腸胃副作用相加。
> - **saxagliptin 與 alogliptin 有心衰竭住院增加的訊號**，合併心衰竭避開；腎功能不良多數需減量，**linagliptin 主要走膽汁排泄、全程不必依 eGFR 減量**。少見但要認得：關節痛、大疱性類天疱瘡、**胰臟炎**（見 [[Acute pancreatitis]]）。

> [!note]- SGLT2 inhibitor：euglycemic DKA、術前停 3 天、降糖與心腎是兩套 eGFR 門檻
> - 阻斷近端腎小管 SGLT2 → 每天約流失 200–300 大卡 → **減重 2–3 kg**、血壓也降；**心腎效益才是這一類的主角**（降低心衰竭住院與心血管死亡、延緩慢性腎病進展，看 [[UPCR UACR]]），適應症**已與 HbA1c 脫鉤**。
> - **Euglycemic DKA**：排糖使血糖看起來正常甚至偏低，但胰島素／升糖素比值下降仍持續產酮。**禁食、脫水、急症、術後、酒精是誘因**；**血糖不高不能用來排除酮酸中毒**，必須驗酮體與血氣（見 [[DKA]]）。
> - **擇期手術／內視鏡／需禁食**：canagliflozin、dapagliflozin、empagliflozin **術前停 3 天**，ertugliflozin **停 4 天**，確認可正常進食再恢復。
> - **生殖泌尿道黴菌感染**（女性外陰陰道念珠菌最常見，可伴發燒見 [[Fever]]）、容積不足與姿勢性低血壓；罕見但致命的 **Fournier's gangrene**。**canagliflozin 的下肢截肢黑框已於 2020 年 8 月由 FDA 移除**（僅保留在警語）——「有截肢黑框」是 2017–2020 的舊版答案。
> - **eGFR 愈低降糖效果愈差，但心腎保護仍在**，所以腎功能差不是停藥理由；**起始後 2–4 週 eGFR 小幅下降是預期的血流動力學反應，不是腎損傷，不要因此停藥**。

> [!note]- GLP-1 receptor agonist：甲狀腺髓質癌黑框有兩個例外、胃排空延遲改寫了麻醉禁食做法
> - 葡萄糖依賴性促泌＋抑制升糖素＋延緩胃排空＋中樞抑制食慾 → **減重幅度全類最大**（tirzepatide 這類雙重促效劑又更多）。多為週劑型皮下注射，口服 semaglutide 需空腹配少量水。
> - **甲狀腺髓質癌或 MEN 2 個人／家族史禁用的是** liraglutide、dulaglutide、semaglutide、exenatide 週劑型（Bydureon）、tirzepatide；**exenatide 速效型（Byetta，一天兩次）與 lixisenatide 這兩個短效藥沒有此黑框**。**胰臟炎**病史只是「謹慎」、並非禁忌（見 [[Acute pancreatitis]]）。
> - **腸胃副作用是最常見的停藥原因**（噁心、嘔吐、腹瀉、便祕）：從低劑量起始、緩慢往上調，多數會隨時間耐受。快速減重使**膽結石與膽囊炎**風險上升；視網膜病變在血糖快速下降時可能短期惡化。
> - **麻醉禁食**：胃排空延遲 → 即使照標準禁食時間，胃裡仍可能有殘留食物、有吸入性肺炎風險。現行做法**已從「一律停藥」轉為依風險分層**（劑量調升期、週劑型、高劑量、有腸胃症狀者屬高風險），術前 **24 小時採清流質飲食**，必要時才考慮停藥或術前超音波評估胃內容物。

> [!note]- Acarbose ＋ insulin：acarbose 只壓餐後、脹氣是停藥主因；胰島素字尾分型與基礎劑起始 0.1–0.2 U/kg
> **Acarbose（α-glucosidase inhibitor）**
> - 抑制小腸刷狀緣 α-glucosidase，延緩雙醣分解成單醣 → 主要壓低**餐後**血糖，隨每餐第一口一起吃；未消化的醣類到結腸被細菌發酵 → **脹氣、排氣、腹瀉**，是最常見的停藥原因。
> **Insulin**
> - **字尾記法**：**-lispro／-aspart／-glulisine 是速效類似物**（餐前立即打，約 15 分鐘起效、1–2 小時峰值）；**glargine／detemir／degludec 是長效基礎**（glargine U-100 約 24 小時、degludec 可超過 42 小時，兩者幾乎無峰；**detemir 較短，約 12–24 小時且有輕微高峰，臨床上常需一天兩次**）。
> - **Regular human insulin** 是短效（餐前 30 分鐘、峰值 2–4 小時），也是**靜脈輸注唯一常用的劑型**（[[DKA]]／高血糖高滲透壓狀態）；**NPH** 是中效（峰值 4–10 小時，夜間低血糖多來自它）；預混 70/30 比例固定、方便但彈性差。
> - **基礎胰島素起始 0.1–0.2 U/kg／日（或固定 10 U）睡前皮下**，依**空腹血糖**每 3 天調約 2 U；**空腹已達標但 HbA1c 仍不達標** → 問題在餐後，加餐時胰島素（先加最大一餐）或改加 GLP-1 receptor agonist，而不是一直加基礎量。
> - 加胰島素時**必須同時把 sulfonylurea 減量或停用**；副作用就是**低血糖與體重增加**，另有注射部位脂肪增生（要輪替針點）。禁食／手術時基礎胰島素**減量但不可全停**（尤其 [[T1DM]]）。
> ![[assets/insulin-time-action.svg|900]]
> *各型胰島素 time–action 概念圖：速效 1–2 小時尖峰、regular 慢半小時、NPH 在 4–10 小時有明顯高峰，而 glargine／degludec 幾乎是一條平線——夜間低血糖幾乎都出在「有峰」的那幾條。*

> [!note]- 低血糖處置：Whipple's triad、15–15 法則、glucagon 對肝醣耗盡者無效
> - **診斷的前提是 Whipple's triad**：有低血糖症狀＋當下測得血糖確實偏低＋給糖後症狀改善，三者缺一就不能叫低血糖症。
> - **意識清楚、能吞嚥** → **15 g 快速吸收的碳水 → 15 分鐘後複測**，未達 70 mg/dL 再給一次，回升後補一份正餐或含蛋白質點心防復發；**意識不清或無法吞嚥** → **靜脈 50% glucose 20–50 mL**；**沒有靜脈路徑** → **glucagon 1 mg IM／SC 或鼻噴**。
> - **Glucagon 靠分解肝醣**，所以**肝醣已耗盡者（酒精性低血糖、長期飢餓、嚴重肝病）給了無效**，必須直接靜脈葡萄糖——最漂亮的一個反直覺點。
> - **[[Beta blocker]] 不是升糖藥，但會遮蔽低血糖的腎上腺素性警訊**（心悸、顫抖）；**冒汗這類膽鹼性症狀多半仍保留，不能拿「病人還會冒汗」排除低血糖**。**非選擇性者還抑制肝糖分解與糖質新生 → 回升更慢、持續更久。**
> - 之後一定要**找原因**：漏餐、劑量錯誤、腎功能惡化導致藥物蓄積、[[Adrenal insufficiency]]、敗血症；反覆不明原因者走內生性高胰島素血症的鑑別（胰島素、C-peptide、磺醯尿素篩檢）。
> - **會把血糖推上去的藥**：**thiazide**（低血鉀抑制分泌＋降低敏感性，造成的是**高**血糖而不是低血糖）、glucocorticoid、tacrolimus／cyclosporine、非典型抗精神病藥、菸鹼酸、β 促效劑、蛋白酶抑制劑；酒精則相反，抑制糖質新生 → 低血糖。

> [!note]- 台灣健保與特殊族群：SGLT2i 與 DPP-4i 宜擇一、孕婦用胰島素、要追蹤哪些指標
> - **健保**：《藥品給付規定》第 5.1 節明文的併用限制只有一條——**SGLT-2 抑制劑與 DPP-4 抑制劑（含其複方製劑）宜二者擇一使用**；**GLP-1 receptor agonist 不在這個「擇一」之內**，它另有獨立條件（已用最大耐受劑量 metformin 及／或 sulfonylurea，再併用 SGLT-2 抑制劑或 DPP-4 抑制劑持續 6 個月後 HbA1c 仍 >8.5%）。另有「口服降血糖藥成分最多四種」的上限；dapagliflozin、empagliflozin 10 mg 自 2025-02-01 起增列 HFmrEF 與慢性腎病（限已加入 Early-CKD 或 Pre-ESRD 計畫者）給付。**條文歷年多次修訂，以健保署現行公告為準；給付邏輯與學理選藥是兩套系統。**
> - **孕婦／哺乳**：**胰島素是首選**；metformin 與 glyburide 可用但非首選（皆會通過胎盤）。**SGLT2 inhibitor、GLP-1 receptor agonist、DPP-4 inhibitor、thiazolidinedione 懷孕期間停用。**
> - **腎衰竭／透析**：metformin **停**；**linagliptin 不必減量**；**胰島素要減量**（清除下降）；SGLT2 inhibitor 降糖變差但心腎保護仍在。**兒童／青少年 [[T2DM]]** 核准品項少（metformin、胰島素及部分針劑），依現行仿單並轉介兒童內分泌。
> - **監測**：**HbA1c 每 3 個月**（穩定達標可延至 6 個月）、**eGFR 與 [[UPCR UACR]]**、長期用 metformin 驗 **維生素 B12**、用 thiazolidinedione 看**體重與水腫**；SGLT2 inhibitor 或 GLP-1 receptor agonist 併用利尿劑時注意容積不足與姿勢性低血壓，起始時考慮減利尿劑。

## 禁忌與陷阱

> [!danger] 絕對不可
> | 情境 | 絕對不可 | 為什麼 | 該做什麼 |
> |---|---|---|---|
> | **已確立的 NYHA Class III–IV 心衰竭** | **起始 pioglitazone**（這一級才是仿單禁忌；有症狀的心衰竭屬「不建議」） | PPAR-γ 促進遠端腎小管留鈉 → 體液滯留、心衰竭惡化住院 | 改用 **SGLT2 inhibitor**（它本身就是心衰竭用藥，見 [[Heart failure]]） |
> | **甲狀腺髓質癌或 MEN 2 的個人／家族史** | 用 **liraglutide、dulaglutide、semaglutide、Bydureon、tirzepatide** | 齧齒類出現甲狀腺 C 細胞腫瘤，仿單列為黑框禁忌 | **例外：Byetta 與 lixisenatide 沒有此禁忌**；或改用 SGLT2 inhibitor、DPP-4 inhibitor |
> | **eGFR ＜30，或急性腎損傷、休克、敗血症、嚴重脫水** | 繼續給 **metformin** | 清除下降＋組織缺氧 → **lactic acidosis** | 立即停藥、輸液、改用其他類別 |
> | **要禁食、擇期手術或內視鏡** | 手術當天還吃 **SGLT2 inhibitor** | 禁食＋持續排糖 → **euglycemic DKA**，血糖正常仍在酸中毒 | **術前停 3 天（ertugliflozin 4 天）**，確認可正常進食再恢復 |
> | **正在用 acarbose 的病人發生低血糖** | 給蔗糖、方糖、含蔗糖飲料 | **α-glucosidase 已被抑制，蔗糖無法分解成葡萄糖** | 給**純葡萄糖**；無法口服則靜脈 glucose |
> | **血糖高、酮體陽性、意識改變** | 只調整口服藥後觀察 | 可能已是酮酸中毒或高血糖高滲透壓狀態 | 靜脈輸液＋**靜脈 regular insulin**，見 [[DKA]] |

## 相關連結

- **同一個病**：[[T2DM]]（病生理、診斷標準、分型與併發症篩檢都在那裡，這篇只負責「藥怎麼選、怎麼用」）、[[T1DM]]、[[DKA]]、[[Metabolic syndrome]]、[[MASLD]]
- **選藥的理由**：[[Heart failure]]（pioglitazone 的禁忌與 SGLT2 inhibitor 的適應症，兩個方向相反的箭頭都指向這篇）、[[CAD]]、[[ACS]]、[[UPCR UACR]]（決定要不要加 SGLT2 inhibitor 的關鍵檢驗）、[[Statin]]（糖尿病是獨立適應症族群）
- **副作用與併發症**：[[Arterial blood gas]]（lactic acidosis 與 euglycemic DKA 都靠它確認）、[[Shock]]、[[Anemia]]、[[Acute pancreatitis]]、[[Cirrhosis]]、[[Edema]]、[[Dyspnea]]、[[Delirium]]、[[Fever]]
- **鑑別與對照**：[[Beta blocker]]（遮蔽低血糖警訊）、[[Adrenal insufficiency]]（反調節荷爾蒙不足造成的低血糖）、[[Thyroid storm]]、[[Primary aldosteronism]]（同樣走「先分泌方向、再看標的器官」的思路）
