import {
  map,
  mapPointingButton,
  mapSimultaneous,
  withModifier,
  rule,
  toPointingButton,
  writeToProfile,
  toApp,
  to$,
  duoLayer,
  withMapper,
  toPaste,
  ifApp,
  toKey,
} from "karabiner.ts";

import {
  tapModifiers,
  duoModifiers,
} from "./utils.ts"

const args = Bun.argv;
const isDryRun = args[2] === "--dry-run";

writeToProfile(isDryRun ? "--dry-run" : "Default", [
  // Hyper Key (Caps Lock)
  rule("Caps Lock -> Hyper").manipulators([map("caps_lock").toHyper()]),

  // Kando
  rule("Kando").manipulators([
    mapPointingButton("button4")
      .toIfAlone(toPointingButton("button4"))
      .toIfHeldDown({
        key_code: "spacebar",
        modifiers: ["left_shift", "left_command", "left_option", "left_control"],
        halt: true,
      })
      .parameters({
        "basic.to_if_held_down_threshold_milliseconds": 200,
      }),
  ]),

  layer_launchApp(),
  layer_emojiAndSnippet(),

  app_xcode(),
  app_vscode(),
  app_zed(),

]);

function layer_launchApp() {
  let apps = [
    { name: "Slack", shortcut: "a" },
    { name: "Spotify", shortcut: "s" },
    { name: "Xcode", shortcut: "x" },
    { name: "Visual Studio Code", shortcut: "v" },
    { name: "Google Chrome", shortcut: "c" },
    { name: "Firefox Developer Edition", shortcut: "f" },
    { name: "Sourcetree", shortcut: "t" },
    { name: "System Settings", shortcut: "z" },
  ];
  let hint = apps.map(app => `${app.shortcut.toUpperCase()} | ${app.name}`).join('\n');
  let layer = duoLayer('l', ';').notification(hint)
  let res = apps.reduce((keymap, app) => {
    keymap[app.shortcut] = toApp(app.name);
    return keymap;
  }, {});
  return layer.manipulators(res);
}

function layer_emojiAndSnippet() {
  // See https://gitmoji.dev/
  let emojiMap = {
    b: '🐛', // Fix a bug
    c: '📅', // _calendar
    d: '📝', // add or update Documentation
    f: '🚩', // add, update, or remove Feature Flags
    h: '💯', // _hundred
    j: '😂', // _joy
    m: '🔀', // Merge branches
    n: '✨', // introduce New features
    p: '👍', // _plus_one +1
    r: '♻️', // Refactor code
    s: '😅', // _sweat_smile
    t: '🧵', // _thread
    u: '💄', // UI/Style
    v: '🔖', // release / Version ta
    o: '💭', // Opinions and thoughts
    i: '👨‍💻', // Experiences and stories
  }

  let emojiHint = Object.entries(emojiMap)
    .slice(0, 15)
    .reduce(
      (r, [k, v]) => [r[0].concat(v), r[1].concat(k.toUpperCase())],
      [[] as string[], [] as string[]],
    )
    .map((v, i) => v.join(i === 0 ? ' ' : '    '))
    .join('\n')

  let layer = duoLayer('z', 'x').notification(emojiHint)
  return layer.manipulators([

    withMapper(emojiMap)((k, v) => map(k).toPaste(v)),

    { 2: toPaste('⌫'), 3: toPaste('⌦'), 4: toPaste('⇥'), 5: toPaste('⎋') },
    { 6: toPaste('⌘'), 7: toPaste('⌥'), 8: toPaste('⌃'), 9: toPaste('⇧') },
    { 0: toPaste('⇪'), ',': toPaste('‹'), '.': toPaste('›') },

    withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⌫', '⌦'])((k) =>
      map(k).toPaste(k),
    ),
  ])
}

function app_xcode() {
  return rule('XCode', ifApp('^com.apple.dt.Xcode$')).manipulators([
    withModifier('right_shift')({
      'a': toKey('←', '⌘⌃'), // Back
      'd': toKey('→', '⌘⌃'), // Forward

      's': toKey('o', '⌘⇧'), // Fuzzy Open

      'j': toKey('j', '⌘⌃'), // Go to definition

      'r': toKey('r', '⌘'), // Run
      'b': toKey('b', '⌘'), // Build

      'z': toKey('backslash', '⌘'),

      'w': km('Xcode action group')
    })
  ])
}

function app_vscode() {
  return rule('VSCode', ifApp('^com.microsoft.VSCode$')).manipulators([
    withModifier('right_shift')({
      'a': toKey('-', '⌃'), // Back
      'd': toKey('-', '⌃⇧'), // Forward

      's': toKey('p', '⌘'), // Fuzzy Open
      'f': toKey('p', '⌘⇧'), // Fuzzy Command

      'j': km('VSCode: Go To Definition'), // Go to definition

      'r': toKey('f5'), // Run
    })
  ])
}

function app_zed() {
  return rule('Zed', ifApp('^dev.zed.Zed$')).manipulators([
    withModifier('right_shift')({
      'a': toKey('-', '⌃'), // Back
      'd': toKey('-', '⌃⇧'), // Forward

      's': toKey('p', '⌘'), // Fuzzy Open
      'f': toKey('p', '⌘⇧'), // Fuzzy Command

      'j': km('Zed: Go To Definition'), // Go to definition

      'r': toKey('f5'), // Run
    })
  ])
}


function km(macroName: string) {
  return to$(
    `osascript -e 'tell application "Keyboard Maestro Engine" to do script "${macroName}"'`
  )
}
