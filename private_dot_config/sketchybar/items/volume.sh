#!/bin/sh

volume_item=(
  item volume
  right
)

volume_config=(
  volume
  script="$PLUGIN_DIR/volume.sh"
  padding_left=2
  padding_right=2
  background.border_width=0
  background.color=$COLOR_BLUE
  background.height=20
  background.corner_radius=8
  icon.highlight=on
  label.highlight=on
)

sketchybar --add "${volume_item[@]}" \
           --set "${volume_config[@]}" \
           --subscribe volume volume_change 