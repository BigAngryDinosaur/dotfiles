#!/bin/sh

# Add window change event
sketchybar --add event window_change

# Space colors array
COLORS_SPACE=($COLOR_YELLOW $COLOR_CYAN $COLOR_MAGENTA $COLOR_WHITE $COLOR_BLUE $COLOR_RED $COLOR_GREEN $COLOR_BROWN $COLOR_YELLOW $COLOR_CYAN $COLOR_MAGENTA $COLOR_YELLOW $COLOR_CYAN $COLOR_MAGENTA)
LENGTH=${#ICONS_SPACE[@]}

# Create space items
for i in "${!ICONS_SPACE[@]}"
do
  sid=$(($i+1))
  PAD_LEFT=6
  PAD_RIGHT=6
  if [[ $i == 0 ]]; then
    PAD_LEFT=6
  elif [[ $i == $(($LENGTH-1)) ]]; then
    PAD_RIGHT=6
  fi

  space_item=(
    space space.$sid
    left
  )

  space_config=(
    space.$sid
    script="$PLUGIN_DIR/app_space.sh"
    associated_space=$sid
    padding_left=$PAD_LEFT
    padding_right=$PAD_RIGHT
    background.color=${COLORS_SPACE[i]}
    background.border_width=0
    background.corner_radius=8
    background.height=20
    label.font="$SYMBOLS_FONT:Regular:16.0"
    icon.font="$FONT:Regular:12.0"
    icon=${ICONS_SPACE[i]}
    icon.color=${COLORS_SPACE[i]}
    label="_"
    label.color=${COLORS_SPACE[i]}
  )

  sketchybar --add "${space_item[@]}" \
             --set "${space_config[@]}" \
             --subscribe space.$sid front_app_switched window_change
done

# Create and configure the spaces bracket
spaces_bracket_add=(
  bracket spaces
  '/space\..*/'
)

spaces_bracket_set=(
  spaces
  script="$PLUGIN_DIR/space_bracket.sh '${COLORS_SPACE[*]}'"
  background.color=$COLOR_BACKGROUND
)

sketchybar --add "${spaces_bracket_add[@]}" \
           --set "${spaces_bracket_set[@]}" \
           --subscribe spaces front_app_switched space_change