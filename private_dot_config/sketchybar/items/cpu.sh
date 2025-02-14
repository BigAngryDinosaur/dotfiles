#!/bin/sh

cpu_item=(
  item cpu
  right
)

cpu_config=(
  cpu
  script="$PLUGIN_DIR/cpu.sh"
  update_freq=60
  padding_left=6
  padding_right=2
  background.border_width=0
  background.color=$COLOR_CYAN
  background.height=20
  icon=$ICON_CPU
  icon.highlight=on
  label.highlight=on
)

sketchybar --add "${cpu_item[@]}" \
           --set "${cpu_config[@]}" 