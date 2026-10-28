# Validation record
Validated 28 October 2026 (UTC). Team: **FlyPig AI**. Project and author remain OnDemand World Observatory and M.K. Hsu.

| Deliverable / check | Result and boundary |
|---|---|
| Editable PPTX | 14 slides. Package integrity, slide geometry, heading fit, font policy and first-party import checks passed. Text and diagrams remain native editable objects. |
| Slide rendering | All 14 slide PNGs inspected individually at 1280×720. A wrapped status label was corrected before final export. No clipping or unintended overlap remained. |
| PDF | 14 pages, 202,604 bytes, below the form's 15 MB limit. Opened with a PDF parser and extracted text. All 14 final pages rendered and inspected. |
| Font handling | PDF uses embedded Helvetica Neue subsets. Initial converter fallback was corrected using a task-local font configuration. No global font, credential or model configuration changed. |
| Application text | README, complete English proposal, live form field map/answer draft, owner checklist, source register and rights boundaries reviewed for consistent scope. |
| Sample data | Four written JSON examples pass `python3 tools/validate_contracts.py`. This checks consistency and truthful null/`not_executed` evidence fields only. |
| Local concept video | H.264, 1280×720, 64.000 seconds, 13,755,948 bytes, no audio. Full stream decoded without errors. Chapter views checked for visible source and concept labels. |
| Official blank form | DOCX package opened and its text inspected. No legal identity, signature or acceptance entered. |
| Secrets / privacy | No credentials, personal contact fields, signatures or identity numbers intentionally included. Git commit uses a public GitHub noreply address. Raw K downloads and local video excluded from Git. |

The PPTX was not opened in Microsoft PowerPoint. Automated integrity checks and rendering do not constitute native PowerPoint testing. A visual review does not validate product feasibility. No product implementation, inference, video generation, UGen300 execution, user study or latency/power test occurred.

The local concept video contains repeated prior K footage and English explanatory text. It is a private review artifact, not a working demo. No narration or YouTube publication exists. Before any contest use, the author must resolve originality, similarity and source-rights questions.

Final artifact hashes and machine-readable counts appear in `artifact-checks.json`. Source-download hashes appear in `source-manifest.json`. Repository privacy and pushed commit are verified separately in the final handoff.

## Confirmed team-name revision
FlyPig AI is the confirmed team name. OnDemand World Observatory remains the project name and M.K. Hsu remains the author. The cover, README, proposal, form answer, script/storyboard, checklist, inventory and manifests were updated. No team-size, company/legal-name or member information was inferred. All 14 PPTX slides and PDF pages were rendered again. The 13 unaffected slide renders and 13 unaffected PDF page renders are pixel-identical to the previously inspected version. The revised cover was visually inspected. Package, geometry, font and import checks passed. The PDF remains below 15 MB. The 64-second video has no conflicting team name, so its bytes and Library version remain unchanged. Product-status and rights boundaries remain unchanged.
