import { rule, mapPointingButton, toPointingButton } from "karabiner.ts";

export default function kando() {
  return rule("Kando").manipulators([
    mapPointingButton("button4")
      .toIfAlone(toPointingButton("button4"))
      .toIfHeldDown({
        key_code: "home",
        modifiers: ["right_shift", "right_command", "right_option", "right_control"],
        halt: true,
      })
      .parameters({
        "basic.to_if_held_down_threshold_milliseconds": 200,
      }),
  ])
}
