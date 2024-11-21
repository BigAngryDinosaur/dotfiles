import {
  map,
  mapPointingButton,
  rule,
  toPointingButton,
  writeToProfile,
  toApp,
  to$,
  duoLayer,
  withMapper,
  toPaste,
} from "karabiner.ts";

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
        halt: true
      }),
  ]),

  layer_launchApp(),
  layer_emojiAndSnippet(),

]);

function layer_launchApp() {
  let layer = duoLayer('l', ';').notification('Launch App 🚀 📱')
  return layer.manipulators({
    a: toApp('Slack'),
    s: toApp('Spotify'),
    d: toApp('Xcode'),
    f: toApp('Visual Studio Code'),
    q: toApp('Google Chrome'),
    w: toApp('Firefox Developer Edition'),
    t: toApp('Sourcetree'),
    z: toApp('System Settings'),
    // r: to$(`open ~/Applications/Rider.app`),
    // v: toApp('Visual Studio Code'),
    // y: to$(String.raw`open ~/Applications/PyCharm\ Professional\ Edition.app`),
    // z: toApp('zoom.us'),
    // ',': toApp('System Settings'),
  })
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
    v: '🔖', // release / Version tags
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
