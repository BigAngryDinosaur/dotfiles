#!/bin/sh

battery_item=(
  item battery
  right
)

battery_config=(
  battery
  script="$PLUGIN_DIR/battery.sh"
  update_freq=120
  padding_left=6
  padding_right=2
  background.color=$COLOR_BLUE
  background.border_width=0
  background.height=20
  background.corner_radius=8
  icon.highlight=on
  label.highlight=on
)

sketchybar --add "${battery_item[@]}" \
           --set "${battery_config[@]}" \
           --subscribe battery system_woke power_source_change 