
import {
  withModifier,
  rule, ifApp
} from "karabiner.ts";

import { km } from "../utils";

export default function app_chrome() {
  return rule('Chrome', ifApp('^com.google.Chrome.*$')).manipulators([
    withModifier('right_shift')({
      'w': km('Chrome action group')
    })
  ])
}


