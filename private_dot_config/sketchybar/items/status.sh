#!/bin/sh

# Source individual items
source "$ITEM_DIR/ip_address.sh"
source "$ITEM_DIR/volume.sh"
source "$ITEM_DIR/battery.sh"

# Create and configure the status bracket
status_bracket_add=(
  bracket status
  ip_address
  volume
  battery
)

status_bracket_set=(
  status
  background.color=$COLOR_BACKGROUND
  background.border_color=$COLOR_BLUE
)

sketchybar --add "${status_bracket_add[@]}" \
           --set "${status_bracket_set[@]}" 