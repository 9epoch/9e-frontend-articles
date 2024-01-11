#!/bin/bash

# Define the file path
FILE="gatsby-config.js"

# Check if the file exists
if [ -f "$FILE" ]; then
    # Use awk to replace the text and save it to a temporary file
    awk '{gsub(/pathPrefix: `\/articles-test`/, "pathPrefix: `/articles`")}1' "$FILE" > temp && mv temp "$FILE"
    echo "Replacement done."
else
    echo "Error: $FILE does not exist."
fi
