import type { FromEvent, FromKeyCode, FromKeyType, FromModifiers, KeyCode, Modifier, Rule, ToEvent } from "karabiner.ts";

export default function doubleTap(from: any, to: any, description: string): Rule {
  let varName = `double-tap-${from.key_code}`;
  return {
    description: description,
    manipulators: [
      {
        type: "basic",
        conditions: [
          {
            name: varName,
            type: "variable_if",
            value: 1
          }
        ],
        from: from,
        to: [to]
      },
      {
        type: "basic",
        conditions: [
          {
            name: varName,
            type: "variable_unless",
            value: 1
          }
        ],
        from: from,
        parameters: { "basic.to_delayed_action_delay_milliseconds": 200 },
        to: [
          {
            set_variable: {
              name: varName,
              value: 1
            }
          },
          from
        ],
        to_delayed_action: {
          to_if_canceled: [
            {
              set_variable: {
                name: varName,
                value: 0
              }
            }
          ],
          to_if_invoked: [
            from,
            {
              set_variable: {
                name: varName,
                value: 0
              }
            }
          ]
        }
      }
    ]
  };
}
