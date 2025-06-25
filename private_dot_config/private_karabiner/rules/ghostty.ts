
import {
  map,
  withModifier,
  rule, ifApp,
  toKey,
  type ModifierParam
} from "karabiner.ts";

import { km } from "../utils";

export default function app_ghostty() {
  const modifier: ModifierParam = ["left_command", "left_control"];

  return rule('Ghostty', ifApp('^com.mitchellh.ghostty$')).manipulators([
    withModifier('⌥⌃⇧')({
      'f': [toKey('g', modifier), toKey('f')],
      'c': [toKey('g', modifier), toKey('d')],
      'v': [toKey('g', modifier), toKey('r')],
      'x': [toKey('g', modifier), toKey('x')],
      't': [toKey('t', modifier), toKey('n')],
      'e': toKey('h', modifier),
      'r': toKey('n', modifier),
      'b': [toKey('g', modifier), toKey('i')],
    }),

    withModifier('⌥⌃⇧')({

    })
  ])
}
