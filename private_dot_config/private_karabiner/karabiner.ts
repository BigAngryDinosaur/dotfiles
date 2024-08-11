import { map, rule, writeToProfile } from "karabiner.ts";

const args = Bun.argv;
const isDryRun = args[2] === "--dry-run";

writeToProfile(isDryRun ? "--dry-run" : "Default", [
	rule("Demo").manipulators([map("c").to("v"), map("v").to("c")]),

	rule("Caps Lock -> Hyper").manipulators([map("caps_lock").toHyper()]),
]);
