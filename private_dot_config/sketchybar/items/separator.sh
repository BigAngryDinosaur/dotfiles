#!/bin/sh

# Creates a separator item with configurable name and padding
# Usage: source separator.sh <name> <position> <padding_left> <padding_right>
#
# Example: source separator.sh "sep.1" "right" 4 4

DEFAULT_PADDING=4

name="$1"
position="${2:-right}"  # Default to right if not provided
padding_left="${3:-$DEFAULT_PADDING}"
padding_right="${4:-$DEFAULT_PADDING}"

# Create and configure the separator
separator_config=(
  "$name"
  padding_left=$padding_left
  padding_right=$padding_right
  background.drawing=off
  icon.drawing=off
  label.drawing=off
)

sketchybar --add item "$name" $position \
           --set "${separator_config[@]}"
