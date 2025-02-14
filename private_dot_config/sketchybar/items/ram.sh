#!/bin/sh

ram_item=(
  item ram
  right
)

ram_config=(
  ram
  script="$PLUGIN_DIR/ram.sh"
  update_freq=60
  padding_left=2
  padding_right=6
  background.border_width=0
  background.color=$COLOR_CYAN
  background.height=20
  icon=$ICON_RAM
  icon.highlight=on
  label.highlight=on
)

sketchybar --add "${ram_item[@]}" \
           --set "${ram_config[@]}" 