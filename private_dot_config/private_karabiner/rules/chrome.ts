
import {
  withModifier,
  rule, ifApp,
  toKey
} from "karabiner.ts";

import { km } from "../utils";

export default function app_chrome() {
  return rule('Chrome', ifApp('^com.google.Chrome$')).manipulators([
    withModifier('⌥⌃⇧')({
      'w': km('Chrome action group'),
      'f': toKey('a', '⌘⇧'),
    })
  ])
}


