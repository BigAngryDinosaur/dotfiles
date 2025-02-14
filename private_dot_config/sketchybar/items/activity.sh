#!/bin/sh

# Source individual items
source "$ITEM_DIR/ram.sh"
source "$ITEM_DIR/disk.sh"
source "$ITEM_DIR/cpu.sh"

# Create and configure the activity bracket
activity_bracket_add=(
  bracket activity
  ram
  disk
  cpu
)

activity_bracket_set=(
  activity
  background.color=$COLOR_BACKGROUND
  background.border_color=$COLOR_CYAN
)

sketchybar --add "${activity_bracket_add[@]}" \
           --set "${activity_bracket_set[@]}" 