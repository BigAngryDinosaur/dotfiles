import {
  withModifier,
  rule, ifApp,
  toKey
} from "karabiner.ts";

import { km } from "../utils";

export default function app_cursor() {
  return rule('Cursor', ifApp('^com.todesktop.230313mzl4w4u92$')).manipulators([
    withModifier('right_shift')({
      'a': toKey('-', '⌃'), // Back
      'd': toKey('-', '⌃⇧'), // Forward

      's': toKey('p', '⌘'), // Fuzzy Open
      'f': toKey('p', '⌘⇧'), // Fuzzy Command

      'j': km('Cursor: Go To Definition'), // Go to definition
      'c': toKey('b', '⌘⌥'), // Toggle AI pane

      'r': toKey('f5'), // Run
    })
  ])
}
