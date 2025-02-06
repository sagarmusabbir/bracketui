#!/bin/bash

# Save to .git/hooks/prepare-commit-msg
# Make it executable: chmod +x .git/hooks/prepare-commit-msg

# Colors for better visibility
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Temporary file for the commit message
COMMIT_MSG_FILE=$1

# Function to select type
select_type() {
    echo -e "${BLUE}Select commit type:${NC}"
    types=("feat (new feature)" "fix (bug fix)" "docs (documentation)" "merge (merging branch)" "refactor (code change)" "npm (publishing bracketui with realease)" "chore (maintenance)" "Quit")
    select type in "${types[@]}"; do
        case $type in
            "Quit")
                exit 1
                ;;
            *)
                if [ -n "$type" ]; then
                    echo $type | cut -d' ' -f1
                    return
                fi
                ;;
        esac
    done
}

# Function to get description
get_description() {
    echo -e "${GREEN}Enter commit description:${NC}"
    read -p "> " description
    echo "$description"
}

# Main script
echo -e "${BLUE}Creating commit message...${NC}"
commit_type=$(select_type)

if [ -z "$commit_type" ]; then
    echo -e "${RED}No commit type selected. Aborting.${NC}"
    exit 1
fi

description=$(get_description)

if [ -z "$description" ]; then
    echo -e "${RED}No description provided. Aborting.${NC}"
    exit 1
fi

# Create the commit message
echo "$commit_type: $description" > "$COMMIT_MSG_FILE"
