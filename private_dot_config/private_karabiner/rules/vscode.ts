import {
  withModifier,
  rule, ifApp,
  toKey
} from "karabiner.ts";

import { km } from "../utils";

export default function app_vscode() {
  return rule('VSCode', ifApp('^com.microsoft.VSCode$')).manipulators([
    withModifier('right_shift')({
      'a': toKey('-', '⌃'), // Back
      'd': toKey('-', '⌃⇧'), // Forward

      's': toKey('p', '⌘'), // Fuzzy Open
      'f': toKey('p', '⌘⇧'), // Fuzzy Command

      'j': km('VSCode: Go To Definition'), // Go to definition

      'r': toKey('f5'), // Run
    })
  ])
}

