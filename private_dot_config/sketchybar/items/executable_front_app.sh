#!/bin/bash

FRONT_APP_SCRIPT='sketchybar --set $NAME label="$INFO"'

front_app=(
  script="$FRONT_APP_SCRIPT"
  background.color=$COLOR_WHITE
  background.border_width=0
  background.corner_radius=8
  background.height=20
  icon.drawing=off
  associated_display=active
)

# Create items and bracket
sketchybar --add event window_focus            \
           --add event windows_on_spaces       \
           --add item front_app left           \
           --set front_app "${front_app[@]}"   \
           --subscribe front_app front_app_switched \
           --add bracket front_group front_app \
           --set front_group background.color=$COLOR_BACKGROUND \
                           background.border_color=$COLOR_WHITE