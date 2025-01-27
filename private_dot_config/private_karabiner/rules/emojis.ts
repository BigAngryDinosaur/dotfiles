import {
  map,
  duoLayer,
  withMapper,
  toPaste,
} from "karabiner.ts";

export default function layer_emojiAndSnippet() {
  // See https://gitmoji.dev/
  let emojiMap = {
    b: '😂', // Face with tears of joy
    c: '❤️', // Red heart
    d: '🔥', // Fire
    f: '😊', // Smiling face with smiling eyes
    h: '👍', // Thumbs up
    j: '💔', // Broken heart
    m: '🎉', // Party popper
    n: '🥰', // Smiling face with hearts
    p: '👏', // Clapping hands
    r: '✨', // Sparkles
    s: '🙏', // Folded hands
    t: '💯', // Hundred points
    u: '🤔', // Thinking face
    v: '😎', // Smiling face with sunglasses
    o: '🙌', // Raising hands
    i: '🤩', // Star-struck
  };

  let emojiHint = Object.entries(emojiMap)
    .slice(0, 15)
    .map(([k, v]) => `${k} = '${v}'`)
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

