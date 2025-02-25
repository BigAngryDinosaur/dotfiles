#!/bin/bash

# Get screen dimensions
screen_info=$(yabai -m query --displays --display | jq -r '.frame')
screen_width=$(echo "$screen_info" | jq -r '.w | floor')
screen_height=$(echo "$screen_info" | jq -r '.h | floor')

# Calculate new window size (leaving 10 units padding)
new_width=$((screen_width - 20))
new_height=$((screen_height - 50))

# Move and resize the focused window
yabai -m window --move abs:10:40
yabai -m window --resize abs:"$new_width":"$new_height"
