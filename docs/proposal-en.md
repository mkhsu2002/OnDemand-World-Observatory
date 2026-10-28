# OnDemand World Observatory
## Stage I proposal
**Team:** FlyPig AI  
**Author:** M.K. Hsu  
**Entry:** Creator AI / Battlefield Lightning / Global Online Track  
**Prepared:** 28 October 2026  
**Status:** Stage I project plan

### 1. Executive proposal
OnDemand World Observatory plans to add realistic, real-time imagery to websites with existing artwork and world settings. Each time a visitor opens an observation page, AI would use the selected domain, plausible species or characters, time and climate to plan a coherent new scenario and video prompt. A video generation service would use existing scene references to create a new observation clip on demand.

FlyPig AI proposes an embeddable observation component for IP owners and website operators. Creators could retain their artistic style and world rules while giving returning visitors different moments within familiar places. Intended applications include novel, comic and game worlds, virtual ecology, travel and location showcases, and brand storytelling sites.

### 2. Situation and problem
Creators often already have scene artwork, character or species profiles and a developed setting. Their websites can present these assets as fixed images and prerecorded clips, but producing many coherent variations requires repeated editorial work. A new scene also needs to preserve the world's visual identity and follow its rules.

The initial customer hypothesis is independent creators and small IP teams with an established world and a website. The proposed observation experience would offer visitors a simple way to explore that setting while giving operators control over where observations occur and what events may appear.

### 3. Proposed experience
The operator defines a domain, eligible species or characters, time and climate options, reference images and permitted activities. When a visitor opens its observation page, the service assembles a context snapshot and selects suitable references. AI then plans an event, environment and viewing perspective within those settings. The page would present the resulting short clip with a concise description of the observation.

For an illustrative wetland at misty dawn, a scenario might feature an approved wading bird moving beside reeds. Another opening under light rain could focus on water movement and distant silhouettes. Operators could configure equivalent rules for a story's town, a character's familiar environment or a brand's visual setting.

The website component would expose generation status, playback and another-observation controls. It would distinguish a generated observation from a labeled reference preview and provide a clear status when a request cannot complete.

### 4. Solution and methods
The planned pipeline combines structured world data, constrained scenario planning, prompt construction, image-conditioned video generation and browser playback. A domain record would define eligible subjects, context options and permitted events. Scenario checks would filter incompatible species, characters, conditions or actions before a video request.

Visual references would carry scene style, subject appearance and composition into the prompt. The first version would emphasize a bounded activity, subtle motion and a clear camera instruction. Development would evaluate reference consistency and scene coherence across repeated observations.

A reference manifest would record asset identifiers, provenance and approvals. A result manifest would associate the selected context, prompt version, references, model/backend information and request status with the clip. The proposed adapter interfaces would keep scenario planning and video generation separately configurable.

### 5. Software and hardware architecture
The planned system has three parts. An embeddable browser component would send a scene identifier and observation conditions, then display status, video and context. A host coordinator would manage world data and references, compose and check scenarios, and track video jobs. A video generation service would produce clips from prompts and reference images.

For Battlefield Lightning, the development plan would evaluate ASUS UGen300 with Hailo-10H for context interpretation and scenario/prompt planning using a supported model. The host would handle data management, rules checks and request coordination. Clip creation would be assigned to an image-conditioned video service. Model support, host compatibility and service integration would be tested to establish the final division of work.

The official ASUS USB product page describes Hailo-10H, 8 GB memory and LLM/VLM model categories. Hardware selection would follow host, OS, interface and driver checks. The registration form states that the chosen USB or M.2 product version cannot later be changed. The proposed hardware contribution and service split would also be confirmed against the track requirements.

### 6. Initial scope and planned outputs
The first development milestone would cover one domain, a small approved subject set, reference images and bounded time/climate choices. Planned outputs are an observation page, a UGen300 scenario/prompt adapter, a video-job adapter, contextual playback and provenance records.

After establishing this workflow, development would package the observation interface as a website component and test operator controls for scenes, subject eligibility and event rules. Context would initially come from creator-defined settings. A later live-weather integration would need an explicit data source, timestamp and operator-selected location.

### 7. Design focus
The design connects a page-opening action with a new, context-aware observation. It combines a creator's world rules, reusable reference assets and episodic video generation in a visitor-facing experience. Creators would curate the conditions for observations rather than author every individual prompt.

The same integration pattern could support a fictional habitat, a game location, a novel's town or a branded story setting. The first domain would provide a manageable basis for evaluating the rules, visual consistency and website experience before expanding to more applications.

### 8. Commercial hypothesis
The initial buyer hypothesis is an independent creator or small IP team that already maintains scene artwork and a world site. A first pilot would add an observation component to an existing scene or character page. Research would test visitor return intent and the operator's effort to manage contextual variations.

A possible business model is a creator subscription plus metered video usage or observation credits. Pricing would depend on cost per successfully playable clip, retries, delivery and support. For planning, variable cost can be expressed as V × g × c × (1 + r) + d, where V is visits, g is successful clips per visit, c is video cost per attempt, r is retry rate and d is delivery cost. Pilot measurements would supply these inputs and inform quotas and commercial terms.

### 9. Proposed validation
Engineering evaluation would cover scenario coherence, visual consistency, generation status and playback. A proposed initial matrix includes 20 context combinations with five repeated requests each. Reviewers would check subject eligibility, appearance, environmental fit and permitted events using saved input and result manifests.

Performance evaluation would separate context preparation, device scenario/prompt inference, video generation and total time to playback. It would record p50/p95 timings, memory, energy measurement boundaries, failures and retries. Proposed acceptance gates include complete provenance, approved subjects in accepted prompts and clear handling of incomplete requests.

A proposed pilot with five creators and ten visitors would compare fixed clips with contextual observations. It would evaluate interest in revisiting, visual coherence, waiting experience and the operator's ability to configure scenes. These planned studies would guide product and deployment decisions.

### 10. Stage II development plan
During 6–13 November, confirm the received UGen300 version, supported host/runtime and suitable models, then establish a reproducible inference baseline. During 14–20 November, implement domain data, scenario constraints and the device prompt-planning adapter. During 21–27 November, integrate an eligible video service and the observation component, then test repeated requests across the context matrix.

During 28 November–4 December, run the pilot, evaluate the pipeline and capture actual device operation for the final submission. Final evidence would document model/runtime versions, the host/device/service split and measured performance. Backend cost, asset permissions and deployment compatibility would guide integration choices.

### 11. Reference material and new design
K's Hunting Log (https://k-hunting-log.icareu.tw/journey/) provides existing habitat artwork, species settings and published clips as visual concept references. Its material predates this proposal. The concept walkthrough identifies the prior footage and its sources.

The new design work covers page-open observation requests, context and scenario constraints, prompt planning, video-service interfaces, an embeddable observation component and the evaluation plan. Asset provenance and the competition's originality requirements are documented in the rights register and official source references.

### 12. Rights and submission responsibilities
The author must verify rights to every reference image, clip, model, font and future video output, including the ability to support organizer commercial use and sublicensing. Public accessibility alone proves no reuse license. The supplied K media is limited to the authorized private preparation/review context, and its underlying licenses still need evidence before competition submission. No blanket open-source license is granted in this repository.

The published rules and unsigned consent form provide broad use permissions upon submission and perpetual, royalty-free commercial/noncommercial use and sublicensing for winning work. The attachment also covers likeness, name and voice. The author must read, decide and sign personally. We have not accepted terms, entered personal identity data, submitted an entry or published to YouTube.


### 13. Public repository and submission materials
Repository: https://github.com/mkhsu2002/OnDemand-World-Observatory (PUBLIC, by the author's decision for the proposal).

The repository provides the proposal, system architecture, interface designs, scenario examples, presentation and video storyboard. Stage II development would add the implemented components, model information and performance evidence. The official form's GitHub field has no required marker. It labels the video optional, while the homepage requests a video. The application checklist retains this distinction for submission planning.

Official deadline: 28 October 2026, 17:00 Asia/Taipei (09:00 UTC, 02:00 America/Vancouver). The proposal PDF is 14 pages and intended to remain under the form's 15 MB limit. The author's legal/contact fields, hardware selection, signed combined consent PDF and any YouTube Unlisted link remain pending.

### References
Official contest home, sections III–XI, accessed 28 October 2026: https://contest.bhuntr.com/tw/39jg9vimiynrhlksze/home/  
Official schedule amendment of 12 October 2026, accessed 28 October 2026: https://contest.bhuntr.com/tw/39jg9vimiynrhlksze/article/4484/  
Lightning Global Online registration modal, accessed 28 October 2026 via official site.  
Official unsigned rights/portrait attachment, downloaded 28 October 2026, stored in sources/.  
ASUS UGen300 USB product specification, accessed 28 October 2026: https://www.asus.com/tw/motherboards-components/ai-accelerator/ugen/ugen300-usb-8g/  
K prior concept: https://k-hunting-log.icareu.tw/journey/, accessed 28 October 2026.
