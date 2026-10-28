# Observation interface designs

These draft interfaces define the planned boundary between the website observation component, scenario planner and video generation service.

- `observation-request.schema.json` describes the domain, time, climate and reference inputs for an observation request.
- `video-adapter.ts` defines video-job submission, status and result fields.
- `../examples/` provides written domain, request, scenario and result examples for implementation planning.

The sample result uses `not_executed` and null clip/timing values. During development, implemented adapters would populate these fields from actual jobs. Run `python3 tools/validate_contracts.py` from the repository root to check sample consistency.
