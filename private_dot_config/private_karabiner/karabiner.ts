import {
  map,
  mapPointingButton, rule,
  toPointingButton,
  writeToProfile
} from "karabiner.ts";

import layer_emojiAndSnippet from "./rules/emojis.ts";
import layer_launchApp from "./rules/app_launcher.ts";
import app_xcode from "./rules/xcode.ts";
import app_vscode from "./rules/vscode.ts";
import app_zed from "./rules/zed.ts";
import superwhisper from "./rules/superwhisper.ts";
import { generalMappings } from "./rules/general.ts";
import layer_openLinks from "./rules/links.ts";
import app_chrome from "./rules/chrome.ts";

const args = Bun.argv;
const isDryRun = args[2] === "--dry-run";

writeToProfile(isDryRun ? "--dry-run" : "Default", [
  // Hyper Key (Caps Lock)
  // rule("Caps Lock -> Hyper").manipulators([map("caps_lock").toHyper()]),

  // Kando
  rule("Kando").manipulators([
    mapPointingButton("button4")
      .toIfAlone(toPointingButton("button4"))
      .toIfHeldDown({
        key_code: "home",
        modifiers: ["right_shift", "right_command", "right_option", "right_control"],
        halt: true,
      })
      .parameters({
        "basic.to_if_held_down_threshold_milliseconds": 200,
      }),
  ]),

  ...generalMappings(),

  layer_launchApp(),
  layer_emojiAndSnippet(),
  layer_openLinks(),


  app_xcode(),
  app_vscode(),
  app_zed(),
  app_chrome(),

  ...superwhisper()
]);


