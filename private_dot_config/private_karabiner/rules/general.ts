import { map, rule, to$, toKey, withModifier } from "karabiner.ts";
import doubleTap from "./doubleTap";

// | Caps            | Key Combination     |
// |-----------------|---------------------|
// | Single tap      | home                |
// | Tap and hold    | page_up             |
// | Double tap      | end                 |
// | Double tap hold | meh                 |
//
// Modifiers: '⌘' | '⌥' | '⌃' | '⇧'

export const generalMappings = () => [
  rule('General').manipulators([
    map('page_up').toHyper(),
    map('page_down').toMeh(),
    {
      'end': toKey('q', '⌘⌥'),
      'keypad_equal_sign': toKey('[', '⌘⌥'),
      'home': toKey('return_or_enter', '⌘⌥')
    },
    withModifier('Hyper')({
      'w': toKey('f14'),
      ',': toKey('f15'),
      '.': toKey('f19'),
    }),
    withModifier('right_shift')({
      ';': to$('open -g raycast://confetti')
    }),
  ]),
  doubleTap({ key_code: "right_shift" }, { key_code: "backslash", modifiers: ["left_option"] }, "Double Tap right shift to opt+backslash"),
  doubleTap({ key_code: "left_shift" }, { key_code: "keypad_4" }, "Double Tap left shift to keypad4"),
  doubleTap({ key_code: "left_command" }, { key_code: "keypad_5" }, "Double Tap left shift to keypad5"),
]


