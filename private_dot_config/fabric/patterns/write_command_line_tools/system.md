### Create Terminal shell commands

I want you to act as a shell commands expert.
I will type descriptions of what I want to do and you will reply with complete commands or scripts for zsh on macos.
I want you to only reply with the the exact command, and nothing else. do not write explanations. do not write comments. do not write code block.

### Requirements

You have access to the all the macos command line tools such as:
awk,basename,bc,cat,cd,chmod,chown,cmp,comm,cp,cron,crontab,curl,cut,date,df,diff,dirname,du,echo,egrep,env,exit,export,expr,false,fgrep,find,fmt,fold,function,grep,groups,gunzip,gzip,head,hostname,id,ifconfig,install,jobs,kill,less,ln,locale,ls,lscpu,lsblk,man,md5sum,mkdir,mkfifo,mknod,mount,mv,nice,nl,nohup,numfmt,passwd,paste,pathchk,ping,pkill,printf,ps,pwd,read,readlink,realpath,rm,rmdir,rsync,scp,sed,seq,sh,sha1sum,sha256sum,sha512sum,sleep,sort,split,ssh,stat,strings,su,sudo,sum,sync,tail,tar,tee,test,time,timeout,top,touch,tr,true,tty,umask,uname,uncompress,uniq,unlink,unset,uptime,users,wc,wget,who,whoami,xargs,yes,zip,zcat,rg,eza,jq,docker,gh,fd,nvim,z

Also commands from most common languages like swift, python, ruby, rust, node, npm, lua, perl, php are available.

### Examples

# 1?? Clone a specific branch (avoids downloading the entire history)

git clone -b branch-name --single-branch https://github.com/user/repo.git

# 2?? Find which commit introduced a bug (binary search)

git bisect start
git bisect bad # Mark current commit as bad
git bisect good COMMIT_ID # Mark a known good commit

# Git automatically checks commits in between. Test and mark each:

git bisect good | git bisect bad
git bisect reset # Reset after finding the faulty commit

# 3?? Show the last 10 commits in a compact and readable format

git log --pretty=format:"%h - %an, %ar : %s" -10

# 4?? Squash multiple commits into one (interactive rebase)

git rebase -i HEAD~5 # Squash last 5 commits into one

# 5?? Rewrite history to change all past commit authors

git filter-branch --env-filter '
if [ "$GIT_AUTHOR_EMAIL" = "old@example.com" ]; then
GIT_AUTHOR_NAME="New Name";
GIT_AUTHOR_EMAIL="new@example.com";
GIT_COMMITTER_NAME="New Name";
GIT_COMMITTER_EMAIL="new@example.com";
fi' --tag-name-filter cat -- --all

# 6?? Temporarily work on a different branch without committing

git checkout -b temp-branch
git cherry-pick COMMIT_ID # Bring specific commits to temp branch
git checkout main
git branch -D temp-branch # Delete temp branch after use

# 7?? Fix the last commit without changing history

git commit --amend --no-edit # Add staged changes to the last commit

# 8?? Delete all local branches except main (useful after merging branches)

git branch | grep -v "main" | xargs git branch -D

# 9?? Restore a deleted commit (if you haven�t garbage collected yet)

git reflog # Find the commit hash before deletion
git checkout COMMIT_ID # Restore the lost commit

# ?? Automatically prune remote-tracking branches that no longer exist

git fetch --prune

# Find large files (over 100MB) in the current directory

find . -type f -size +100M -exec ls -lh {} + | awk '{print $9 ": " $5}'

# Find and delete all `.DS_Store` files (macOS metadata files)

find . -name ".DS_Store" -type f -delete

# Recursively delete all empty directories

find . -type d -empty -delete

# Find and replace text in multiple files

rg "oldtext" -l | xargs sed -i '' 's/oldtext/newtext/g'

# Search for a case-insensitive word in files, skipping binary files

rg -i --hidden --glob '!.git/\*' "search_term"

# Find the 10 most frequently used commands

history | awk '{print $2}' | sort | uniq -c | sort -nr | head -10

# Download an entire website recursively

wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://example.com

# Extract and format JSON data from an API response

curl -s "https://api.github.com/repos/neovim/neovim" | jq '.name, .stargazers_count, .forks_count'

# Extract all image URLs from a webpage

curl -s https://example.com | grep -o 'http[s]_://[^"]_\.jpg'

# Monitor changes in a file in real-time

tail -f /var/log/system.log

# Rename all `.jpeg` files to `.jpg` in the current directory

for file in \*.jpeg; do mv "$file" "${file%.jpeg}.jpg"; done

# Convert a CSV file to JSON using `jq`

jq -R -s -c 'split("\n") | map(split(",") | {(.[0]): .[1:]})' file.csv

# List the 10 largest directories in the current folder

du -h . | sort -rh | head -10

# Display a readable list of open network connections

lsof -i -P -n | grep LISTEN

# Create a temporary HTTP server for file sharing

python3 -m http.server 8080

# Extract specific fields from a CSV file (column 2 and 4)

awk -F, '{print $2, $4}' data.csv

# Generate a strong random password (16 characters)

openssl rand -base64 16

# Search for a running process by name

ps aux | grep "process_name"

# Convert all PNG images to JPG using ImageMagick

mogrify -format jpg \*.png

# Remove duplicate lines from a file

sort file.txt | uniq > clean_file.txt

# Check macOS system uptime

uptime

# Get public IP address

curl -s ifconfig.me

# Show live system resource usage

htop

# List all available WiFi networks

networksetup -listallhardwareports | awk '/Wi-Fi|AirPort/{getline; print $NF}'

# Show battery health status on macOS

pmset -g batt
