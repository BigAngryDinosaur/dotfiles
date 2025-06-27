
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
      'f': [toKey('g', modifier), toKey('f')], // Focus
      'g': [toKey('g', modifier), toKey('d')], // Split Down
      'x': [toKey('g', modifier), toKey('x')], // Close
      't': [toKey('t', modifier), toKey('n')], // New Tab
      'e': toKey('h', modifier),               // Move
      'r': toKey('n', modifier),               // Resize
      's': [toKey('s', modifier), toKey('e')], // Edit

      'v': toKey('=', "left_option"), // Edit
      'c': toKey('-', "left_option"), // Edit
    }),

    withModifier('⌘⌃⇧')({
      'g': [toKey('g', modifier), toKey('r')], // Split Right
      's': toKey('s', modifier),               // Search
      'e': [toKey('g', modifier), toKey('i')], // Pin
    })
  ])
} toKey
