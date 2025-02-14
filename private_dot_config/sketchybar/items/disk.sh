#!/bin/sh

disk_item=(
  item disk
  right
)

disk_config=(
  disk
  script="$PLUGIN_DIR/disk.sh"
  update_freq=60
  padding_left=2
  padding_right=2
  background.border_width=0
  background.color=$COLOR_CYAN
  background.height=20
  icon=$ICON_DISK
  icon.highlight=on
  label.highlight=on
)

sketchybar --add "${disk_item[@]}" \
           --set "${disk_config[@]}" 