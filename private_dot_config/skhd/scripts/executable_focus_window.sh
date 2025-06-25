#!/bin/bash

CACHE_FILE="$HOME/.cache/yabai_window_space"

# Get current focused window ID
WINDOW_ID=$(yabai -m query --windows --window | jq -r '.id')

if [[ -z "$WINDOW_ID" || "$WINDOW_ID" == "null" ]]; then
    echo "No focused window found"
    exit 1
fi

# Get current space of focused window
CURRENT_SPACE=$(yabai -m query --windows --window | jq -r '.space')

# Check if cache file exists and contains this window's info
if [[ -f "$CACHE_FILE" ]]; then
    CACHED_WINDOW=$(grep "^$WINDOW_ID:" "$CACHE_FILE" | cut -d: -f2)
    
    if [[ -n "$CACHED_WINDOW" ]]; then
        # Window has cached space, unfloat and move it back
        yabai -m window --toggle float
        yabai -m window --space "$CACHED_WINDOW"
        yabai -m space --focus "$CACHED_WINDOW"
        # Remove from cache
        grep -v "^$WINDOW_ID:" "$CACHE_FILE" > "$CACHE_FILE.tmp" && mv "$CACHE_FILE.tmp" "$CACHE_FILE"
        echo "Moved window $WINDOW_ID back to space $CACHED_WINDOW and unfloated"
    else
        # Window not in cache, save current space and move to display 1
        mkdir -p "$(dirname "$CACHE_FILE")"
        echo "$WINDOW_ID:$CURRENT_SPACE" >> "$CACHE_FILE"
        yabai -m window --display 1
        yabai -m display --focus 1
        yabai -m window --toggle float
        ~/.config/skhd/scripts/fit_window.sh
        echo "Moved window $WINDOW_ID to display 1, floated and fitted, remembered space $CURRENT_SPACE"
    fi
else
    # No cache file, create it and move window to display 1
    mkdir -p "$(dirname "$CACHE_FILE")"
    echo "$WINDOW_ID:$CURRENT_SPACE" >> "$CACHE_FILE"
    yabai -m window --display 1
    yabai -m display --focus 1
    yabai -m window --toggle float
    ~/.config/skhd/scripts/fit_window.sh
    echo "Moved window $WINDOW_ID to display 1, floated and fitted, remembered space $CURRENT_SPACE"
fi
