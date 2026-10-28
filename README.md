# OnDemand World Observatory

**Stage I application package, 28 October 2026. Product implementation has not started.**

Team: **FlyPig AI**. Author: **M.K. Hsu**. Intended entry: **Creator AI / Battlefield Lightning / Global Online Track**, ASUS UGen AI League 2026.

Each time a visitor opens an observation page, the proposed AI uses an established domain, plausible species, time and climate context to create a new observation scenario and video prompt. An image-conditioned video backend would then generate a new short clip for playback. Fast generation is the intended experience, with feasibility and latency still to be investigated after Stage I selection.

This repository contains a proposal, editable slides, interface drafts and hand-authored sample data. It contains **no operating observation service, AI model integration, generated-on-open prototype, UGen300 deployment or performance results**. Contract validation only checks document/sample consistency. There is no 3D, 2.5D, WebGL or persistent world simulation engine.

## Start here

- [English proposal](docs/proposal-en.md)
- [Editable 14-slide PowerPoint](deliverables/OnDemand-World-Observatory-Proposal.pptx)
- [14-page submission PDF](deliverables/OnDemand-World-Observatory-Proposal.pdf)
- [Verified form fields and English answer draft](docs/application-answers-en.md)
- [English video script and storyboard](docs/video-script-storyboard-en.md)
- [K media cut list](docs/k-media-cutlist.csv)
- [Prior-work boundary and rights register](docs/provenance-and-rights.md)
- [Submission checklist and owner-only fields](docs/submission-checklist.md)
- [Official sources and access date](sources/official-source-register.md)
- [Draft architecture and interface](docs/architecture.md)
- [Validation record](validation/qa-report.md)
- [Complete file inventory](FILE-INVENTORY.md)

## Stage I status and evidence

The proposed request flow, interfaces and sample scenarios are new application work. Sample prompts are written examples, not recorded model output. The optional local concept walkthrough uses publicly accessible, pre-existing K material with continuous disclosure. It is a concept illustration, not a working demo, and is excluded from Git along with downloaded K originals. No paid generation or publication occurred.

K's Hunting Log at https://k-hunting-log.icareu.tw/journey/ is a prior public concept/material reference, not this competition product. Agentic-Life-World-Zero / Agentic-Life-World-Studio is a separate story-to-world Studio product. No code from that project was copied.

## Hardware plan

If selected, evaluate supported Hailo-10H models on ASUS UGen300 for context interpretation and scenario/prompt construction. Video generation remains a separate backend feasibility decision. The proposal does not claim that UGen300 can generate the video, that all computation runs locally, or that latency or power has been measured. USB versus M.2 selection needs host/driver confirmation by the author before the form is submitted.

## Document and sample checks

Run `python3 tools/validate_contracts.py` from this directory. This checks draft payloads and evidence labels only. It does not run AI inference or render video.

## Before submission

The author must confirm eligibility for prior-public-work similarity, third-party and AI-generated asset rights, and the organizer's broad license and portrait/voice terms. The unsigned official consent form is provided for review. Contact fields, legal identity, signatures, final hardware choice and YouTube URL remain owner-only actions. Private GitHub reviewer access remains unresolved: do not make this repo public or invite collaborators without new authorization.

## 繁體中文摘要

本案是 ASUS UGen AI League 2026 初賽申請資料，團隊 FlyPig AI，作者 M.K. Hsu。構想為每次開啟觀測網頁時，AI 依既有領域、可能物種、時間與氣候，產生合理情境與影片提示詞，參考既有圖片生成新的短影片後播放。即時快速為體驗目標，尚未實作或量測。這不是 3D、2.5D、WebGL 或持續模擬引擎。

K 的狩獵日誌為既有公開素材／概念示意；Meta 的 Studio 為另一產品。本 repo 僅含提案、可編輯簡報、接口與手寫樣例，不把文件冒稱完整產品原始碼。入選後評估 UGen300 的情境理解與提示詞生成，影片後端與實機效能待驗證。原創資格、既有素材與永久商用再授權條款需本人及主辦確認，尚未報名、簽署或發布。
