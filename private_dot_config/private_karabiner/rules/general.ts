import { hyperLayer, map, rule, to$, toApp, toKey, withModifier } from "karabiner.ts";

// | Caps            | Key Combination     |
// |-----------------|---------------------|
// | Single tap      | home                |
// | Tap and hold    | page_up             |
// | Double tap      | end                 |
// | Double tap hold | meh                 |
//
// Modifiers: '⌘' | '⌥' | '⌃' | '⇧'

export const generalMappings = () => [
  rule('Hyper Meh').manipulators([
    map('page_up').toHyper(),
    map('page_down').toMeh(),
    {
      'end': toKey('q', '⌘⌥'),
      'keypad_equal_sign': toKey('[', '⌘⌥'),
      'home': toKey('return_or_enter', '⌘⌥'),
    },
    withModifier('right_shift')({
      'c': to$('open -g raycast://confetti')
    })
  ])
]
