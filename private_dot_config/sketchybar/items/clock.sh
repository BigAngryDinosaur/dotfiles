#!/bin/sh

# Time item configuration
# ---------------------------------------------
# Parameters for creating the time item
time_item=(
  item time
  right
)

# Configuration for time item appearance and behavior
time_config=(
  time                                    # Item name
  script="$PLUGIN_DIR/time.sh"           # Script to update time
  update_freq=5                          # Update every 5 seconds
  
  # Padding
  padding_left=2
  padding_right=6
  
  # Background styling
  background.color=$COLOR_WHITE
  background.border_width=0
  background.corner_radius=8
  background.height=20
  
  # Icon and label
  icon=$ICON_CLOCK
  icon.highlight=on
  label.highlight=on
)


# Date item configuration
# ---------------------------------------------
# Parameters for creating the date item
date_item=(
  item date
  right
)

# Configuration for date item appearance and behavior
date_config=(
  date                                    # Item name
  script="$PLUGIN_DIR/date.sh"           # Script to update date
  update_freq=60                         # Update every minute
  
  # Padding
  padding_left=6
  padding_right=2
  
  # Background styling
  background.color=$COLOR_WHITE
  background.border_width=0
  background.height=20
  background.corner_radius=8
  
  # Icon and label
  icon=$ICON_CALENDAR
  icon.highlight=on
  label.highlight=on
)

# Create and configure time and date items
sketchybar --add "${time_item[@]}" \
           --set "${time_config[@]}" \
           --add "${date_item[@]}" \
           --set "${date_config[@]}"

# Clock bracket configuration
# ---------------------------------------------
clock_bracket_add=(
  bracket clock
  time
  date
)

clock_bracket_set=(
  clock
  background.color=$COLOR_BACKGROUND
  background.border_color=$COLOR_WHITE
)

sketchybar --add "${clock_bracket_add[@]}" \
           --set "${clock_bracket_set[@]}" 