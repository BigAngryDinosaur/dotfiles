import { hyperLayer, map, rule, to$, toApp, toKey, withModifier } from "karabiner.ts";


export const generalMappings = () => [
  rule('Hyper Meh').manipulators([
    map('page_up').toHyper(),
    map('page_down').toMeh(),
    {
      'end': toKey('q', '⌘⌥'),
      'f14': toKey('return_or_enter', '⌘⌥'),
    },
    withModifier('right_shift')({
      'c': to$(`open -g raycast://confetti`)
    })
  ]),
]

//'⌘' | '⌥' | '⌃' | '⇧' | MultiModifierAlias,
