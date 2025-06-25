import {
  withModifier,
  rule, ifApp,
  toKey
} from "karabiner.ts";

import { km } from "../utils.ts"

export default function app_xcode() {
  return rule('XCode', ifApp('^com.apple.dt.Xcode$')).manipulators([
    withModifier('⌥⌃⇧')({
      'a': toKey('←', '⌘⌃'), // Back
      'd': toKey('→', '⌘⌃'), // Forward

      's': toKey('o', '⌘⇧'), // Fuzzy Open

      'j': toKey('j', '⌘⌃'), // Go to definition

      'r': toKey('r', '⌘'), // Run
      'b': toKey('b', '⌘'), // Build

      'z': toKey('backslash', '⌘'),

      'w': km('Xcode action group')
    })
  ])
}

