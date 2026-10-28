# Document tooling

`validate_contracts.py` uses Python standard library and checks hand-authored examples only.

`build_deck.mjs` is the editable presentation source, not application product code. It uses the installed Codex `@oai/artifact-tool` runtime. Set `ARTIFACT_SKILL_DIR`, `RUNTIME_NODE_MODULES` and `RUNTIME_PYTHON` to the installed presentation skill and supported runtime paths. Resolve `@oai/artifact-tool` via a local build-directory node_modules link or the configured runtime. Run the artifact-operation marker from the installed skill first, then run the source from this project directory. It renders every slide under `.build/slides`, exports a draft, validates it and writes a separate rebuilt PPTX. Use a fresh final filename and validation receipt for each rebuild. No global dependency, credential or model configuration changes are required.

The distributed PDF came from the validated PPTX using the bundled LibreOffice headless exporter with a task-local font configuration, then Poppler rendering and page inspection. This tooling performs no AI generation or hardware inference.
