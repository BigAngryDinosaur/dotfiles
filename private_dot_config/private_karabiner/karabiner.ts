import {
	ifVar,
	map,
	mapPointingButton,
	rule,
	toKey,
	toPointingButton,
	writeToProfile,
} from "karabiner.ts";

const args = Bun.argv;
const isDryRun = args[2] === "--dry-run";

writeToProfile(isDryRun ? "--dry-run" : "Default", [
	// Hyper Key (Caps Lock)
	rule("Caps Lock -> Hyper").manipulators([map("caps_lock").toHyper()]),

	// Kando
	rule("Kando").manipulators([
		mapPointingButton("button2")
			.toIfAlone("spacebar", "Hyper")
			.toIfHeldDown(toPointingButton("button2")),

		mapPointingButton("button4")
			.toIfAlone(toKey("delete_forward"))
			.toIfHeldDown(toPointingButton("button4")),
	]),
]);
