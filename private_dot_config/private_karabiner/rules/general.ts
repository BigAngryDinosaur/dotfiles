import { map, mapConsumerKey, rule, to$, toKey, withModifier } from "karabiner.ts";
import doubleTap from "./doubleTap";

// Modifiers: '⌘' | '⌥' | '⌃' | '⇧'

export const generalMappings = () => [
  rule('General').manipulators([
    map('f13').to('a', '⌃'),
    map('f14').to('left_arrow', '⌥'),
    map('f14', '⌥').to('left_arrow', '⌥⇧'),
    map('f14', '⌘').to('delete_or_backspace', '⌥'),
    map('f15').to('right_arrow', '⌥'),
    map('f15', '⌥').to('right_arrow', '⌥⇧'),
    map('f15', '⌘').to('delete_forward'),
    map('f16').to('e', '⌃'),
  ]),
  doubleTap({ key_code: "right_shift" }, { key_code: "backslash", modifiers: ["left_option"] }, "Double Tap right shift to opt+backslash"),
  doubleTap({ key_code: "left_shift" }, { key_code: "keypad_4" }, "Double Tap left shift to keypad4"),
  doubleTap({ key_code: "left_command" }, { key_code: "keypad_5" }, "Double Tap left shift to keypad5"),
]


