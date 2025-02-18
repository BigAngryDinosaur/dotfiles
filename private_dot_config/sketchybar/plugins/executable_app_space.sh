#!/bin/sh

source "$HOME/.config/design/icons.sh"

sketchybar --set $NAME background.drawing=$SELECTED \
	icon.highlight=$SELECTED \
	label.highlight=$SELECTED

if [[ $SENDER == "front_app_switched" || $SENDER == "window_change" ]];
then
 for i in "${!ICONS_SPACE[@]}"
 do
   sid=$(($i+1))
   LABEL=""
 
   QUERY=$(yabai -m query --windows --space $sid)
   APPS=$(echo $QUERY | jq '.[].app')
   TITLES=$(echo $QUERY | jq '.[].title')

   IGNORED_APPS=("Ghostty" "Reader" "Obsidian" "Finder" "ChatGPT" "Superwhisper" "Readwise Reader" "YouTube" "Hacker News" "Reddit" "Google AI Studio" "Claude" "DeepSeek" "Perplexity")
 
   if grep -q "\"" <<< $APPS;
   then
     APPS_ARR=()
     TITLES_ARR=()
     while read -r line; do APPS_ARR+=("$line"); done <<< "$APPS"
     while read -r line; do TITLES_ARR+=("$line"); done <<< "$TITLES"
 
     FILTERED_APPS=()
     FILTERED_TITLES=()
     for j in "${!APPS_ARR[@]}"
     do
       APP=$(echo ${APPS_ARR[j]} | sed 's/"//g')
       TITLE=$(echo ${TITLES_ARR[j]} | sed 's/"//g')
       
       if [[ ! " ${IGNORED_APPS[@]} " =~ " $APP " ]]; then
         FILTERED_APPS+=("$APP")
         FILTERED_TITLES+=("$TITLE")
       fi
     done

     LENGTH=${#FILTERED_APPS[@]}
     for j in "${!FILTERED_APPS[@]}"
     do
       APP=${FILTERED_APPS[j]}
       TITLE=${FILTERED_TITLES[j]}
 
       ICON=$($HOME/.config/sketchybar/plugins/app_icon.sh "$APP" "$TITLE")
       LABEL+="$ICON"
       if [[ $j < $(($LENGTH-1)) ]]; then
         LABEL+=" "
       fi
     done
   else
     LABEL+="_"
   fi
 
   sketchybar --set space.$sid label="$LABEL"
 done
fi

