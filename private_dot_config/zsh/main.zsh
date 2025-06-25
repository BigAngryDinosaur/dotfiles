
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="robbyrussell"

COMPLETION_WAITING_DOTS="true"

DISABLE_AUTO_UPDATE="true" 

plugins=(
  git
  aliases
  eza
  fzf
  git
  vi-mode
  zoxide
  asdf
)

ZSH_TMUX_AUTOSTART=true

source $ZSH/oh-my-zsh.sh

CONFIG_PATH="${HOME}/.config"
XDG_CONFIG_HOME=CONFIG_PATH
ZSH_PATH="${CONFIG_PATH}/zsh"

source $ZSH_PATH/path.zsh
source $ZSH_PATH/editor.zsh
source $ZSH_PATH/zplug.zsh
source $ZSH_PATH/functions.zsh
source $ZSH_PATH/aliases.zsh


load_modules() {
  local module_path="$1"
  local modules_string="$2"

  [[ -n "$module_path" ]] || return 1
  [[ -n "$modules_string" ]] || return 1

  local modules_dir="${ZSH_PATH}/${module_path}"
  [[ -d "$modules_dir" ]] || return 0

  local modules=($modules_string)
  for module in "${modules[@]}"; do
    local module_file="${modules_dir}/${module}.zsh"
    [[ -r "$module_file" ]] && source "$module_file"
  done
}

load_modules "tools" "zellij asdf fzf zoxide goenv ghcup nimble atuin jj"
load_modules "work" "vibe"
