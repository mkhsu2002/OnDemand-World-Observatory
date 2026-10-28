"""Validate hand-authored proposal examples. Never runs AI or a video backend."""
import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
data = {n: json.loads((root / "examples" / f"{n}.json").read_text()) for n in ("domain", "request", "scenario", "result")}
d, q, s, r = (data[n] for n in ("domain", "request", "scenario", "result"))
assert q["domain_id"] == d["id"]
assert q["time"] in d["time_options"] and q["climate"] in d["climate_options"]
assert set(s["species_ids"]).issubset(d["eligible_species"])
assert q["request_id"] == s["request_id"] == r["request_id"]
assert q["reference_ids"] == d["reference_ids"]
assert d["reference_rights_status"] == "unverified_do_not_generate"
assert r["status"] == "not_executed" and r["clip_url"] is None
assert all(v is None for v in r["timings_ms"].values())
assert s["origin"] == "hand_authored_example_not_model_output"
schema = json.loads((root / "contracts/observation-request.schema.json").read_text())
assert set(q) == set(schema["required"]) == set(schema["properties"])
print("PASS: 4 written examples are internally consistent. No inference, generation or hardware test performed.")
