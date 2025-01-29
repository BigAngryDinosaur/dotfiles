import { duoLayer, withMapper, map } from "karabiner.ts"

export default function layer_openLinks() {
  let links = {
    'g': 'https://github.com',
    'y': 'https://www.youtube.com',
    'h': 'https://news.ycombinator.com',
    'r': 'https://old.reddit.com',
    'u': 'https://www.ubereats.com',
    'w': 'https://www.wolt.com',
  }

  let hint = Object.entries(links)
    .slice(0, 15)
    .map(([k, v]) => `${k} = '${v}'`)
    .join('\n')

  let layer = duoLayer('.', '/').notification(hint)
  return layer.manipulators([
    withMapper(links)((k, v) => map(k).to$(`open "${v}"`)),
  ])
}

