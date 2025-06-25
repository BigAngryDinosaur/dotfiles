import {
  mapPointingButton, rule,
  toPointingButton,
  writeToProfile
} from "karabiner.ts";

import app_xcode from "./rules/xcode.ts";
import app_vscode from "./rules/vscode.ts";
import { generalMappings } from "./rules/general.ts";
import app_chrome from "./rules/chrome.ts";
import kando from "./rules/kando.ts";
import app_cursor from "./rules/cursor.ts";
import app_ghostty from "./rules/ghostty.ts";

const args = Bun.argv;
const isDryRun = args[2] === "--dry-run";

writeToProfile(isDryRun ? "--dry-run" : "Default", [
  ...generalMappings(),

  kando(),

  app_xcode(),
  app_vscode(),
  app_chrome(),
  app_cursor(),
  app_ghostty(),
]);


