# config.nu
#
# Installed by:
# version = "0.105.1"
#
# This file is used to override default Nushell settings, define
# (or import) custom commands, or run any other startup tasks.
# See https://www.nushell.sh/book/configuration.html
#
# This file is loaded after env.nu and before login.nu
#
# You can open this file in your default editor using:
# config nu
#
# See `help config nu` for more options
#
# You can remove these comments if you want or leave
# them for future reference.

$env.config = {
  show_banner: false
  buffer_editor: "nvim"
  edit_mode: "vi" 
}

alias e = nvim
alias c = clear

def --wrapped tv [...args] {
  run-external ($env.HOME | path join "apps/television/target/release/tv") ...$args
}

def tv-init [] {
  mkdir ($nu.data-dir | path join "vendor/autoload")
  tv init nu | save -f ($nu.data-dir | path join "vendor/autoload/tv.nu")
}

$env.ATUIN_NOBIND = true
atuin init nu | save -f ~/.local/share/atuin/init.nu #make sure you created the directory beforehand with `mkdir ~/.local/share/atuin/init.nu`
source ~/.local/share/atuin/init.nu

#bind to ctrl-r in emacs, vi_normal and vi_insert modes, add any other bindings you want here too
$env.config = (
    $env.config | upsert keybindings (
        $env.config.keybindings
        | append {
            name: atuin
            modifier: control
            keycode: char_r
            mode: [emacs, vi_normal, vi_insert]
            event: { send: executehostcommand cmd: (_atuin_search_cmd) }
        }
    )
)

def zoxide-init [] {
    let file = $env.HOME | path join ".zoxide.nu"
    if not ($file | path exists) {
        zoxide init nushell | save -f ~/.zoxide.nu
    }
}

zoxide-init

source ~/.zoxide.nu

def "nu-complete zoxide path" [context: string] {
    let parts = $context | str trim --left | split row " " | skip 1 | each { str downcase }
    let completions = (
        ^zoxide query --list --exclude $env.PWD -- ...$parts
            | lines
            | each { |dir|
                if ($parts | length) <= 1 {
                    $dir
                } else {
                    let dir_lower = $dir | str downcase
                    let rem_start = $parts | drop 1 | reduce --fold 0 { |part, rem_start|
                        ($dir_lower | str index-of --range $rem_start.. $part) + ($part | str length)
                    }
                    {
                        value: ($dir | str substring $rem_start..),
                        description: $dir
                    }
                }
            })
    {
        options: {
            sort: false,
            completion_algorithm: substring,
            case_sensitive: false,
        },
        completions: $completions,
    }
}

def --env --wrapped z [...rest: string@"nu-complete zoxide path"] {
  __zoxide_z ...$rest
}


let posh_dir = (brew --prefix oh-my-posh | str trim)
let posh_theme = $'($posh_dir)/themes/emodipt-extend'
# Change the theme names to: zash/space/robbyrussel/powerline/powerlevel10k_lean/
# material/half-life/lambda Or double lines theme: amro/pure/spaceship, etc.
# For more [Themes demo](https://ohmyposh.dev/docs/themes)
$env.PROMPT_COMMAND = { || oh-my-posh prompt print primary --config $'($posh_theme).omp.json' }
# Optional
$env.PROMPT_INDICATOR = $"(ansi y)$> (ansi reset)"
