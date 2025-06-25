import {
  withModifier,
  rule, ifApp,
  toKey
} from "karabiner.ts";

import { km } from "../utils";

export default function app_gemini() {
  return rule('Gemini', ifApp('^com.google.Chrome.app.caidcmannjgahlnbpmidmiecjcoiiigg')).manipulators([
    withModifier('⌥⌃⇧')({
    })
  ])
}
