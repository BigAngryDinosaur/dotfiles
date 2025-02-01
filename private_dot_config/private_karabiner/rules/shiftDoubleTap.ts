import type { Rule } from "karabiner.ts";

export const doubleTapRightShift: Rule = {
  description: "Double-tap Right Shift to produce Option+Backslash",
  manipulators: [
    {
      type: "basic",
      conditions: [
        {
          name: "double-tap-right_shift",
          type: "variable_if",
          value: 1
        }
      ],
      from: {
        key_code: "right_shift",
        modifiers: { optional: ["any"] }
      },
      to: [
        {
          key_code: "backslash",
          modifiers: ["option"]
        }
      ]
    },
    {
      type: "basic",
      conditions: [
        {
          name: "double-tap-right_shift",
          type: "variable_unless",
          value: 1
        }
      ],
      from: {
        key_code: "right_shift",
        modifiers: { optional: ["any"] }
      },
      parameters: { "basic.to_delayed_action_delay_milliseconds": 200 },
      to: [
        {
          set_variable: {
            name: "double-tap-right_shift",
            value: 1
          }
        },
        { key_code: "right_shift" }
      ],
      to_delayed_action: {
        to_if_canceled: [
          {
            set_variable: {
              name: "double-tap-right_shift",
              value: 0
            }
          }
        ],
        to_if_invoked: [
          { key_code: "right_shift" },
          {
            set_variable: {
              name: "double-tap-right_shift",
              value: 0
            }
          }
        ]
      }
    }
  ]
};

