import {
  type KeyAlias,
  type LetterKeyCode,
  map,
  mapSimultaneous,
  type ModifierKeyAlias,
  modifierKeyAliases,
  type MultiModifierAlias,
  multiModifierAliases,
  type SideModifierAlias,
  to$,
  type ToEvent,
  toRemoveNotificationMessage,
} from 'karabiner.ts'


/**
 * Map when tap a modifier key; keep as modifier when hold.
 *
 * - ‹⌘ Show/Hide UI (e.g. left sidebars, or all UI)
 * - ‹⌥ Run current task (re-run)
 * - ‹⌃ Run list
 *
 * - ›⌘ Show/Hide UI (e.g. right sidebars, or terminal)
 * - ›⌥ Command Palette (e.g. ⌘K, ⌘P)
 * - ›⌃ History (e.g. recent files)
 */
export function tapModifiers(
  v: Partial<Record<SideModifierAlias | 'fn', ToEvent>>,
) {
  return Object.entries(v).map(([k, to]) => {
    let key = k as SideModifierAlias | 'fn'
    return map(key).to(key).toIfAlone(to)
  })
}

/** Modifiers via 2 keys. e.g. f+d -> ⌘ */
export function duoModifiers(
  v: Partial<
    Record<
      '⌘' | '⌥' | '⌃' | '⇧' | MultiModifierAlias,
      `${LetterKeyCode | KeyAlias}${LetterKeyCode | KeyAlias}`[]
    >
  >,
) {
  let result = []

  for (let [m, k] of Object.entries(v)) {
    for (let keys of k) {
      let id = k + m
      let [firstMod, ...restMods] = (
        m in modifierKeyAliases
          ? [modifierKeyAliases[m as ModifierKeyAlias]]
          : multiModifierAliases[m as MultiModifierAlias]
      ) as Array<'command' | 'control' | 'option' | 'shift'>

      let to_after_key_up = [toRemoveNotificationMessage(id)]
      result.push(
        mapSimultaneous(keys.split('') as (LetterKeyCode | KeyAlias)[], {
          to_after_key_up,
        }, 100)
          .toNotificationMessage(id, m) // Must go first or to() doesn't work
          .to(`left_${firstMod}`, restMods),
      )
    }
  }

  return result
}

// Execute Keyboard Maestro macros.
export function km(macroName: string) {
  return to$(
    `osascript -e 'tell application "Keyboard Maestro Engine" to do script "${macroName}"'`
  )
}

// Execute Raycast Deep Links.
export function raycast(name: string, focused = false) {
  return to$(`open ${focused ? '-g ' : ''}raycast://extensions/${name}`)
}
