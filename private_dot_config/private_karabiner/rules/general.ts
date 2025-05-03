import { map, mapConsumerKey, rule, to$, toKey, withModifier } from "karabiner.ts";
import doubleTap from "./doubleTap";

// Modifiers: '⌘' | '⌥' | '⌃' | '⇧' '⇧'

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
    map('r', { left: '⌘⌥⌃' }).to$('~/.config/karabiner/scripts/ai_rewrite grammar'),
    map('r', 'left⌘⌃⇧').to$('~/.config/karabiner/scripts/ai_rewrite summarize'),
    map('e', { left: '⌘⌥⌃' }).to$('~/.config/karabiner/scripts/ai_rewrite professional'),
    map('w', { left: '⌘⌥⌃' }).to$('~/.config/karabiner/scripts/ai_rewrite "custom: rewrite the provided text in pirate lingo."'),


    // Ghostty
    map('j', { left: '⌘⌥⌃' }).to$('open -n /Applications/Ghostty.app'),

    // Yazi
    map('h', { left: '⌘⌥⌃' }).to$("open -n /Applications/Ghostty.app --args --command='/opt/homebrew/bin/yazi'"),

  ]),
]


