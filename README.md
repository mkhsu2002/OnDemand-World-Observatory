# OnDemand World Observatory

**為已有圖片與世界設定的網站，加入擬真即時影像。**

團隊：**FlyPig AI** · 作者：**M.K. Hsu**  
ASUS UGen AI League 2026 提案：Creator AI / Battlefield Lightning / Global Online Track

OnDemand World Observatory 計畫將網站既有的場景圖片、角色或物種設定，轉化為可反覆造訪的觀測體驗。每次訪客開啟觀測頁，AI 都會依據所選領域、可能出現的物種或角色、時間與氣候，規劃合理的新情境與影片提示詞，再利用現有場景素材按需生成新的觀測影片。

IP 擁有者與網站經營者可以保留自己的美術風格與世界規則，讓訪客在熟悉的場景中看見不同的片刻：清晨濕地裡的覓食活動、雨後森林中的角色身影，或故事城鎮隨時段變化的生活景象。

[English version](#english-version)

## 觀測體驗

訪客選擇一個場景並開啟觀測頁，網站便以該場景的設定建立一次新的觀測。影片將搭配簡短的情境說明，呈現當次觀測的地點、時間、氣候與活動。

網站經營者可決定哪些場景開放觀測、哪些角色或物種可能出現，以及可發生的事件範圍。這讓觀測內容能隨每次造訪產生變化，同時維持 IP 的敘事方向與辨識度。

## 計畫實現的流程

| 環節 | 設計內容 |
|---|---|
| 1. 建立場景資料 | 整理領域設定、場景圖片、物種或角色資料、時間與氣候選項。 |
| 2. 組合觀測條件 | 開啟頁面時，依場景規則組合當次觀測的條件，選取適合的參考素材。 |
| 3. 規劃新情境 | AI 在世界設定的約束內，規劃可能發生的活動、環境變化與觀測視角。 |
| 4. 產生影片提示詞 | 將情境轉成包含主體、動作、環境、鏡頭與素材一致性要求的提示詞。 |
| 5. 按需生成影片 | 影片生成服務根據提示詞與既有參考圖片，建立新的短影片。 |
| 6. 網頁呈現 | 觀測元件接收影片與情境資料，提供播放、生成狀態與再次觀測的操作。 |

## 世界設定與素材一致性

情境規劃以網站提供的世界設定為依據。每個領域可設定物種或角色的出現條件、適合的時間與氣候、允許的活動，以及需要避免的情節。生成前的規則檢查，將用來篩選與設定不符的情境。

視覺規劃則以既有場景、美術、角色與物種圖片為參考，將外觀特徵、環境風格、構圖與動作要求一併帶入提示詞。開發過程將檢查影片是否保留素材的辨識度，以及不同觀測之間是否維持相容的世界觀與視覺表現。

## 技術與網站整合計畫

系統規劃分為三個部分：

- **觀測元件**：嵌入既有網站，接收場景識別與觀測條件，呈現生成狀態、影片與情境說明。小說官網、角色頁或場景介紹頁都可作為入口。
- **情境規劃與請求協調**：管理世界設定與參考素材，組合觀測條件、檢查情境規則，並將影片請求交給生成服務。
- **影片生成服務**：根據情境提示詞及參考圖片生成短影片，回傳影片與對應資料，供網站元件播放。

在 Battlefield Lightning 的開發規劃中，預計評估 **ASUS UGen300 / Hailo-10H** 承擔情境理解與提示詞規劃的角色；主機服務負責資料管理、規則檢查與請求協調，影片生成則由影像生成服務分工處理。模型支援、部署條件與生成服務的整合方式，將在開發階段逐項驗證，以確定最終架構。

## 預期應用情境

| 使用者與網站 | 觀測內容 |
|---|---|
| 小說、漫畫與遊戲 IP | 讓讀者與玩家觀察既有世界中的城鎮、角色日常與故事場景，延伸作品之外的探索體驗。 |
| 虛擬生態與世界設定網站 | 依棲地、物種、時間與氣候，呈現不同的生態活動與環境片刻。 |
| 旅遊與場景展示網站 | 以既有景觀素材規劃不同時段與氣候的場景預覽，作為具情境感的內容展示。 |
| 品牌故事網站 | 將品牌角色、場景與視覺設定轉成可造訪的故事窗口，延續網站的敘事與美術風格。 |

## 開發規劃

第一步將以單一領域與一組參考素材建立完整觀測流程，再逐步加入情境約束、UGen300 情境規劃、影片服務與網站嵌入介面。評估將涵蓋情境合理性、素材一致性、生成與播放體驗，以及經營者管理場景的便利性，作為後續支援更多 IP 與網站的依據。

## Repo 導覽

| 文件 | 內容 |
|---|---|
| [技術架構與接口設計](docs/architecture.md) | 觀測請求、情境規劃、影片服務與網頁呈現的系統設計。 |
| [接口草案](contracts/README.md) / [場景資料樣例](examples/domain.json) | 請求格式、影片服務接口及場景資料結構。 |
| [完整英文提案](docs/proposal-en.md) | 問題背景、解決方案、應用與開發規劃。 |
| [提案簡報 PDF](deliverables/OnDemand-World-Observatory-Proposal.pdf) / [可編輯 PPTX](deliverables/OnDemand-World-Observatory-Proposal.pptx) | 14 頁英文提案簡報。 |
| [影片腳本與分鏡](docs/video-script-storyboard-en.md) | 觀測構想的英文介紹與畫面安排。 |
| [來源與參考](sources/official-source-register.md) / [素材來源說明](docs/provenance-and-rights.md) | 競賽資訊、參考資料與素材來源。 |
| [完整檔案清單](FILE-INVENTORY.md) | 專案文件與交付檔案索引。 |

場景素材與視覺構想參考：[K 的狩獵日誌・棲地觀測](https://k-hunting-log.icareu.tw/journey/)。

---

## English version

### Project overview

**Realistic, real-time imagery for websites with existing artwork and world settings.**

Team: **FlyPig AI** · Author: **M.K. Hsu**  
ASUS UGen AI League 2026 proposal: Creator AI / Battlefield Lightning / Global Online Track

OnDemand World Observatory plans to turn a website's existing scene images, characters and species settings into an observation experience that visitors can return to. Each time a visitor opens an observation page, AI would use the selected domain, plausible species or characters, time and climate to plan a coherent new scenario and video prompt. A video generation service would then use existing scene references to create a new observation clip on demand.

IP owners and website operators could retain their artistic style and world rules while giving visitors different moments within familiar places: feeding activity in a wetland at dawn, a character appearing in a forest after rain, or daily life in a story's town at different times of day.

### Observation experience

A visitor selects a scene and opens its observation page. The website creates a new observation based on that scene's settings. The clip would appear with a short contextual description of the place, time, climate and activity.

Website operators could choose which scenes are available, which characters or species may appear, and what events can occur. Each visit could offer variation while preserving the IP's narrative direction and recognizable identity.

### Planned workflow

| Step | Design |
|---|---|
| 1. Prepare scene data | Organize domain settings, scene images, species or character profiles, and time and climate options. |
| 2. Assemble observation conditions | On page opening, combine conditions within the scene's rules and select suitable reference assets. |
| 3. Plan a new scenario | AI plans plausible activities, environmental changes and a viewing perspective within the world settings. |
| 4. Construct the video prompt | Describe the subject, motion, environment, camera and requirements for consistency with the references. |
| 5. Generate on demand | A video generation service uses the prompt and existing reference images to create a new short clip. |
| 6. Present on the website | An observation component receives the clip and contextual data, with playback, generation status and controls for another observation. |

### World rules and visual consistency

Scenario planning would follow the website's world settings. Each domain could define conditions for species or character appearances, suitable times and climates, permitted activities and events to avoid. A rules check before generation would filter scenarios that conflict with those settings.

Visual planning would use existing scene, environment, character and species artwork as references. Prompts would carry appearance details, environmental style, composition and motion requirements. Development would evaluate whether clips preserve recognizable asset features and whether different observations remain compatible with the world's visual and narrative identity.

### Technology and website integration plan

The planned system has three parts:

- **Observation component:** embeds into an existing website, accepts a scene identifier and observation conditions, and presents generation status, video and contextual descriptions. A novel's website, character page or location page could provide the entry point.
- **Scenario planning and request coordination:** manages world settings and reference assets, assembles conditions, checks scenario rules and sends requests to the video service.
- **Video generation service:** creates a short clip from the scenario prompt and reference images, then returns the clip and associated data for website playback.

For Battlefield Lightning, the development plan would evaluate **ASUS UGen300 / Hailo-10H** for context interpretation and prompt planning. A host service would manage data, rules checks and request coordination, while a video generation service would handle clip creation. Model support, deployment requirements and service integration would be validated during development to establish the final architecture.

### Intended applications

| Owner or website | Observation content |
|---|---|
| Novel, comic and game IP | Towns, character activities and story locations that extend readers' and players' exploration of an established world. |
| Virtual ecology and worldbuilding sites | Habitat observations shaped by species, time and climate, with different ecological activities and environmental moments. |
| Travel and location showcase sites | Contextual scene previews at different times and in different climates, using existing landscape assets. |
| Brand storytelling sites | Visitable story windows built around brand characters, locations and visual settings, continuing the website's narrative and artistic direction. |

### Development plan

The first step would establish an observation workflow for one domain and a reference asset set. Development would then add scenario constraints, UGen300 context planning, video service integration and an embeddable website interface. Evaluation would cover scenario coherence, reference consistency, generation and playback experience, and the operator's ability to manage scenes before expanding to more IPs and websites.

### Repository guide

| Document | Contents |
|---|---|
| [Architecture and interface design](docs/architecture.md) | System design for observation requests, scenario planning, video services and website presentation. |
| [Interface drafts](contracts/README.md) / [Scene data example](examples/domain.json) | Request formats, video service interfaces and scene data structures. |
| [Full English proposal](docs/proposal-en.md) | Problem context, proposed solution, applications and development plan. |
| [Proposal PDF](deliverables/OnDemand-World-Observatory-Proposal.pdf) / [Editable PPTX](deliverables/OnDemand-World-Observatory-Proposal.pptx) | The 14-page English proposal presentation. |
| [Video script and storyboard](docs/video-script-storyboard-en.md) | English introduction and visual sequence for the observation concept. |
| [Sources and references](sources/official-source-register.md) / [Asset provenance](docs/provenance-and-rights.md) | Competition information, references and asset sources. |
| [File inventory](FILE-INVENTORY.md) | Index of project documents and deliverables. |

Scene material and visual concept reference: [K's Hunting Log habitat observations](https://k-hunting-log.icareu.tw/journey/).
