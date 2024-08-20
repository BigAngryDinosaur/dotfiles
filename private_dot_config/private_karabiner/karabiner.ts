import {
  map,
  mapPointingButton,
  rule,
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
    mapPointingButton("button4")
      .toIfAlone(toPointingButton("button4"))
      .toIfHeldDown({
        key_code: "spacebar",
        modifiers: ["left_shift", "left_command", "left_option", "left_control"],
        halt: true
      }),
  ]),

]);
