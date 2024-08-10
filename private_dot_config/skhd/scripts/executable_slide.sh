
space=$(yabai -m query --spaces | jq -re ".[] | select(.visible == 1)" | jq -re ".index")

if [[ $1 == 'prev' ]]; then
    space=$(($space-1))
elif [[ $1 == 'next' ]]; then
    space=$(($space+1))
fi

$(skhd -k "ctrl + alt + cmd - $space")


