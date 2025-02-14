import {
  mapPointingButton, rule,
  toPointingButton,
  writeToProfile
} from "karabiner.ts";

import layer_emojiAndSnippet from "./rules/emojis.ts";
import layer_launchApp from "./rules/app_launcher.ts";
import app_xcode from "./rules/xcode.ts";
import app_vscode from "./rules/vscode.ts";
import app_zed from "./rules/zed.ts";
import app_cursor from "./rules/cursor.ts";
import superwhisper from "./rules/superwhisper.ts";
import { generalMappings } from "./rules/general.ts";
import layer_openLinks from "./rules/links.ts";
import app_chrome from "./rules/chrome.ts";
import kando from "./rules/kando.ts";

const args = Bun.argv;
const isDryRun = args[2] === "--dry-run";

writeToProfile(isDryRun ? "--dry-run" : "Default", [
  ...generalMappings(),

  kando(),

  layer_launchApp(),
  layer_emojiAndSnippet(),
  layer_openLinks(),


  app_xcode(),
  app_vscode(),
  app_zed(),
  app_cursor(),
  app_chrome(),

  ...superwhisper()
]);


