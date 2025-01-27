import {
  simlayer, toKey
} from "karabiner.ts";

export default function superwhisper() {
  return simlayer('s', 'superwhisper-mode', 350)
    .manipulators({
      d: toKey('equal_sign', 'Hyper', {}),
      c: toKey('k', '⌘⌥')
    })
}
