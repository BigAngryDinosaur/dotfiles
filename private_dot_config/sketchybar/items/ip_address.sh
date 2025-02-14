#!/bin/sh

ip_address_item=(
  item ip_address
  right
)

ip_address_config=(
  ip_address
  script="$PLUGIN_DIR/ip_address.sh"
  update_freq=30
  padding_left=2
  padding_right=6
  background.border_width=0
  background.height=20
  background.corner_radius=8
  icon.highlight=on
  label.highlight=on
)

sketchybar --add "${ip_address_item[@]}" \
           --set "${ip_address_config[@]}" \
           --subscribe ip_address wifi_change 