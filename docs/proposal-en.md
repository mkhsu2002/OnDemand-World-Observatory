# OnDemand World Observatory
## Stage I proposal
**Team:** FlyPig AI  
**Author:** M.K. Hsu  
**Entry:** Creator AI / Battlefield Lightning / Global Online Track  
**Prepared:** 28 October 2026  
**Status:** proposal and interface drafts. No operational product prototype or hardware results.

### 1. Executive proposal
OnDemand World Observatory is an image-conditioned short-video observation experience for an established fictional world. On every page opening, AI would use the selected domain's rules, plausible species, time and climate context to propose a fresh, coherent observation. It would turn that scenario into a video prompt, combine it with approved reference images, request a new short clip and play the returned result.

The creative goal is a world that rewards revisits through new moments. A creator supplies world knowledge and visual identity once, then curates the boundaries within which new scenes may occur. The visitor opens a window into that world without having to write prompts. Fast generation is a product aspiration. We have not established a model, backend, time-to-play target or measured latency.

This Stage I entry specifies the proposed user experience, constraints, hardware role and validation plan. It deliberately defers detailed implementation decisions until selection. The repository does not contain an implemented generation pipeline.

### 2. Situation and problem
Creators with rich world settings often publish fixed galleries or a small set of pre-rendered videos. A returning visitor may see the same scene repeatedly. Manually authoring a large catalogue of plausible variations takes editorial effort. Unconstrained generative video can produce a visually novel scene that violates the world's geography, species or climate rules.

Our initial target is the independent worldbuilding creator who already owns or controls a small library of world descriptions and reference art. The creator wants repeatable novelty with recognizable identity. The end visitor wants an accessible, short observation with little setup. These are hypotheses to validate with interviews, rather than measured market demand.

### 3. Proposed experience
The creator defines one observation domain, a limited species list, time and climate choices, reference images and prohibited events. The visitor opens its observation page. The system creates a request identifier, takes a context snapshot and selects eligible references. AI composes a scenario consistent with the domain and translates it into a concise motion and camera prompt. After validation, the backend would create a new clip and the page would play it with an AI-generated label and contextual caption.

An illustrative fictional wetland at misty dawn might permit a small wading bird to forage near reeds. A later rainy opening could show only water movement and distant silhouettes. Both are examples written for this proposal. Neither is model output. Each visit is intended to request a new scene. A future service must distinguish a genuinely generated result from a replay. A network error or unsupported context should show a clear failure or explicitly labeled reference preview, never disguise old footage as new output.

The product has no requirement for a 3D scene, 2.5D layers, WebGL renderer or continuously running simulation. Context is a bounded input snapshot. It need not represent a physically evolving ecosystem or scientifically predict wildlife behavior. Initial climate choices are creator-defined fictional settings. Live weather is an optional later integration with explicit source and timestamp, not an implemented feature.

### 4. Solution and methods
The proposed pipeline uses structured domain data, constrained scenario generation, a prompt template, image-conditioned video generation and browser playback. A scenario validator would reject species outside the domain, unsupported time/climate combinations and forbidden actions. A reference manifest would record asset identifiers, provenance, creator approval and usage rights. A result manifest would retain prompt version, input context, reference identifiers, backend/model version, request status and provenance labels.

We propose one bounded observation per request with subtle motion and a single camera instruction. This reduces the editorial surface to assess before attempting complex interactions. It does not guarantee generative quality or inference speed. Reference images help communicate intended appearance, but identity and anatomy consistency still require visual evaluation.

No model provider is selected in this application. No paid generation is necessary to inspect these materials. Future OpenAI-backed development should use the author's existing authorized Codex/OpenAI defaults where applicable. This preparation has not changed global configuration or credentials. Hailo model selection and a video backend remain separate implementation choices.

### 5. Software and hardware architecture
The browser would send a domain id and context to a small host service. The host loads approved world facts and references, asks a context/scenario adapter to compose a candidate, validates it, and sends an accepted prompt plus reference identifiers to a video adapter. The host tracks the job and returns the new clip when ready. Playback metadata must disclose whether the clip is generated, a pre-existing concept reference or unavailable.

For Stage II, the intended Lightning hardware contribution is context interpretation and scenario/prompt construction on ASUS UGen300 with Hailo-10H, subject to supported model availability and deployment tests. A compact model could interpret world metadata and reference imagery, or construct a constrained prompt. The host would still coordinate requests and playback. Video generation may use a separate backend if eligible and feasible. We will ask the organizer to confirm that this split meets the track requirement. We do not promise that all computation or video generation will run on UGen300.

The official ASUS USB product page describes Hailo-10H, 8 GB memory and support for LLM/VLM model categories. These are vendor descriptions, not proof of this workload's suitability. USB versus M.2 selection is pending confirmation of a compatible host, OS, interface and drivers. The current Mac preparation environment is not evidence of supported Stage II deployment. The form says the selected hardware version cannot later be changed.

### 6. Initial scope and outputs
If selected, the first implementation should cover one creator-approved fictional domain, a small eligible species set, approved images and a bounded time/climate vocabulary. Intended outputs are an actual observation page, a hardware-backed scenario/prompt step, a functioning video-job adapter, provenance records and a documented demonstration. The current submission includes only architectural drafts, schemas, hand-authored examples and proposal media.

The work excludes persistent simulation, navigation through a rendered 3D world, multiplayer, user-uploaded biometric data and a marketplace. These exclusions keep the implementation aligned with the page-open generation idea. The proposed experience does not require personal identity or precise visitor location.

### 7. Novelty and positioning
The intended innovation is the combination of creator-controlled world rules, context-conditioned scene selection, reference-grounded visual identity and a new video request triggered by opening an observation page. The observation experience foregrounds a moment in a world rather than a prompt editor. The hardware hypothesis moves a bounded context task toward a local accelerator while leaving expensive rendering decisions explicit.

Compared with a fixed video gallery, the proposal introduces a new contextual scenario at each opening. Compared with a generic video prompt tool, it would reuse curated world knowledge and species constraints. Compared with a persistent world simulation, it uses episodic generated clips. These are conceptual comparisons, not measured competitive superiority. We have no patent novelty opinion or competitor benchmark.

### 8. Commercial hypothesis
The initial buyer hypothesis is independent creators and small IP teams who already maintain a fictional setting. Their first use case is an observation page linked from an existing world site. A proposed pilot would test whether contextual variation increases the desire to revisit and reduces the creator's manual prompt-writing effort.

A possible business model is a creator subscription plus metered video usage or creator-funded observation credits. No price, customers, revenue, total market size or willingness-to-pay evidence is claimed. Before setting a price, measure cost per successfully playable clip, provider fees, retry rates, bandwidth and support effort. Let V be visits, g successful clips per visit, c video cost per attempt, r retry rate and d delivery cost. A simple planning model is variable cost = V × g × c × (1 + r) + d. All inputs remain unknown. Quotas and explicit failure messages would protect a pilot from unbounded generation expense. No paid resources were started in preparing this proposal.

### 9. Practical value and validation
The primary proposed benefit is a low-effort way for visitors to see fresh, world-consistent moments, while creators retain editorial control. Validation must test both novelty and coherence. The initial study would ask five creators to review the concept and ten visitors to compare fixed clips with clearly labeled generated variations. Those counts are proposed study sizes, not completed research.

Engineering evaluation should record p50 and p95 times for context preparation, accelerator scenario/prompt inference, video backend and total time-to-play. Also record device/host memory, energy measurement boundaries, generation failures, retries, reference consistency and constraint violations. No values are available today. A proposed first test matrix covers 20 context combinations with five repeated requests each, with manual ratings and saved manifests. Proposed acceptance gates are zero unapproved species in accepted prompts, complete provenance for every output, and transparent handling of every failed job. User tolerance for waiting and backend latency will determine whether the intended fast experience is feasible.

### 10. Stage II plan
During 6–13 November, confirm the received UGen300 version, host support, runtime and model availability. Establish a reproducible supported inference example and a baseline. During 14–20 November, implement the domain schema, constrained scenario/prompt adapter and real device logging. During 21–27 November, connect an eligible video backend only after cost and rights review, implement playback and failure labels, and test the context matrix. During 28 November–4 December, run the visitor/creator pilot, capture real UGen300 operation and prepare the final repository, model information and performance evidence.

These dates are a proposed work plan within the official development period, not evidence that work has occurred. If the selected video backend cannot meet acceptable delay or the split architecture is ineligible, report the limitation and revise scope with organizer guidance. Do not relabel a prerecorded clip as an on-demand result.

### 11. Existing work and originality boundary
K's Hunting Log (https://k-hunting-log.icareu.tw/journey/) is a pre-existing public website and visual concept reference. Its habitat art, species descriptions and published clips predate this proposal. The local walkthrough may quote that visual language only as a continuously labeled prior concept reference. It does not demonstrate new generation, current product functionality or Hailo inference. Raw downloads and the local review video are excluded from the Git repository.

Agentic-Life-World-Zero / Agentic-Life-World-Studio is a different story-to-world Studio product associated with the Meta application context. This repository does not copy its code or treat it as the ASUS product. Newly prepared work comprises this proposal, the page-open observation design, interface/schema drafts, written samples, the evaluation plan and application documents.

The official consent attachment explicitly extends the unpublished-original-work warranty to similar public works by the same author. A new private repository and clear disclosure do not establish eligibility or create an exemption. The author should obtain written organizer confirmation about K, similar prior world projects and AI-assisted preparation before signing or submission. Until then, the package is review-ready, not cleared for submission.

### 12. Rights and submission responsibilities
The author must verify rights to every reference image, clip, model, font and future video output, including the ability to support organizer commercial use and sublicensing. Public accessibility alone proves no reuse license. The supplied K media is limited to the authorized private preparation/review context, and its underlying licenses still need evidence before competition submission. No blanket open-source license is granted in this repository.

The published rules and unsigned consent form provide broad use permissions upon submission and perpetual, royalty-free commercial/noncommercial use and sublicensing for winning work. The attachment also covers likeness, name and voice. The author must read, decide and sign personally. We have not accepted terms, entered personal identity data, submitted an entry or published to YouTube.

### 13. Source and code disclosure
Repository: https://github.com/mkhsu2002/OnDemand-World-Observatory (private).
It holds application materials and draft contracts, not complete product source. Reviewer access must be resolved with the organizer and author without making the repo public or inviting collaborators under the present authorization. The official form's GitHub field has no required marker, while the main rules request a GitHub source-project reference. The form labels the video optional, while the main deliverables section requests it. Prepare both, ask for clarification, and do not claim missing links are complete.

Official deadline: 28 October 2026, 17:00 Asia/Taipei (09:00 UTC, 02:00 America/Vancouver). The proposal PDF is 14 pages and intended to remain under the form's 15 MB limit. The author's legal/contact fields, hardware selection, signed combined consent PDF and any YouTube Unlisted link remain pending.

### References
Official contest home, sections III–XI, accessed 28 October 2026: https://contest.bhuntr.com/tw/39jg9vimiynrhlksze/home/  
Official schedule amendment of 12 October 2026, accessed 28 October 2026: https://contest.bhuntr.com/tw/39jg9vimiynrhlksze/article/4484/  
Lightning Global Online registration modal, accessed 28 October 2026 via official site.  
Official unsigned rights/portrait attachment, downloaded 28 October 2026, stored in sources/.  
ASUS UGen300 USB product specification, accessed 28 October 2026: https://www.asus.com/tw/motherboards-components/ai-accelerator/ugen/ugen300-usb-8g/  
K prior concept: https://k-hunting-log.icareu.tw/journey/, accessed 28 October 2026.
