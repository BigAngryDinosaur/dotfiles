#!/bin/sh

# Convert the space-separated string into an array
IFS=' ' read -r -a COLORS_ARRAY <<< "$1"

selected_space=$(yabai -m query --spaces --space | jq '.index')

# Arrays in bash are 0-based, so we subtract 1 from selected_space
index=$((selected_space - 1))

sketchybar --set $NAME background.border_color="${COLORS_ARRAY[$index]}"

