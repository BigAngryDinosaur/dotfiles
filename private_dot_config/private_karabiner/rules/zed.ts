import {
  withModifier,
  rule, ifApp,
  toKey
} from "karabiner.ts";

import { km } from "../utils";

export default function app_zed() {
  return rule('Zed', ifApp('^dev.zed.Zed$')).manipulators([
    withModifier('right_shift')({
      'a': toKey('-', '⌃'), // Back
      'd': toKey('-', '⌃⇧'), // Forward

      's': toKey('p', '⌘'), // Fuzzy Open
      'f': toKey('p', '⌘⇧'), // Fuzzy Command

      'j': km('Zed: Go To Definition'), // Go to definition

      'r': toKey('f5'), // Run
    })
  ])
}
