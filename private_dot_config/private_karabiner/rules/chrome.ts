
import {
  withModifier,
  rule, ifApp,
  toKey,
  to$
} from "karabiner.ts";

import { km, raycast } from "../utils";

export default function app_chrome() {
  return rule('Chrome', ifApp('^com.google.Chrome.canary$')).manipulators([
    withModifier('right_shift')({
      'w': km('Chrome action group')
    })
  ])
}


