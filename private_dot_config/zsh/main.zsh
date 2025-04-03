
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

CONFIG_PATH=$HOME/.config/zsh
source $CONFIG_PATH/path.zsh
source $CONFIG_PATH/editor.zsh
source $CONFIG_PATH/zplug.zsh
source $CONFIG_PATH/functions.zsh
source $CONFIG_PATH/aliases.zsh
source $CONFIG_PATH/tools/zellij.zsh
source $CONFIG_PATH/tools/asdf.zsh
source $CONFIG_PATH/tools/fzf.zsh
source $CONFIG_PATH/tools/zoxide.zsh
source $CONFIG_PATH/tools/goenv.zsh
source $CONFIG_PATH/tools/ghcup.zsh
source $CONFIG_PATH/tools/nimble.zsh
source $CONFIG_PATH/tools/atuin.zsh


