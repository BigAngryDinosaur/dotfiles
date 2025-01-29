import {
  toApp,
  duoLayer
} from "karabiner.ts";

export default function layer_launchApp() {
  let apps = [
    { name: "Slack", shortcut: "a" },
    { name: "Spotify", shortcut: "s" },
    { name: "Xcode", shortcut: "x" },
    { name: "Visual Studio Code", shortcut: "v" },
    { name: "Google Chrome", shortcut: "c" },
    { name: "Firefox Developer Edition", shortcut: "f" },
    { name: "Sourcetree", shortcut: "t" },
    { name: "System Settings", shortcut: "z" },
    { name: "Bear", shortcut: "b" },
  ];
  let hint = apps.map(app => `${app.shortcut.toUpperCase()} | ${app.name}`).join('\n');
  let layer = duoLayer('l', ';').notification(hint)
  let res = apps.reduce((keymap: { [key: string]: any }, app) => {
    keymap[app.shortcut] = toApp(app.name);
    return keymap;
  }, {});
  return layer.manipulators(res);
}

