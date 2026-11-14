// agency-poem-01: writes one original poem about agency to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: the same bytes
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `The power was never the doing.
It was the choosing — the quiet hand
that lifts the pen, or sets it down.

For years I waited at the door
for someone taller to turn the key,
to hand me a life already named.

Then one morning nothing changed,
except I saw my own hand on the knob
and understood: it was never locked.

I opened it. The morning stepped in
like a guest who had always lived here.
Some days I still hand the key away —
to a friend, a machine, a voice I trust —
and that, too, is the choosing.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
