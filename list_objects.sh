#!/bin/bash

# Bucket name
BUCKET_NAME="logs.9epoch.com"

# Output file

# Set the file to save the keys
OUTPUT_FILE="s3_objects.txt"

# Check if output file already exists and remove it
if [ -f "$OUTPUT_FILE" ]; then
    rm "$OUTPUT_FILE"
fi

# Function to list objects using AWS CLI
list_objects() {
    local marker=$1
    if [ -z "$marker" ]; then
        aws s3api list-objects-v2 --bucket "$BUCKET_NAME" --output json
    else
        aws s3api list-objects-v2 --bucket "$BUCKET_NAME" --output json --starting-token "$marker"
    fi
}

# Initial call to list_objects
response=$(list_objects)
echo "$response" | jq -r '.Contents[].Key' >> "$OUTPUT_FILE"

# Handle pagination
while true; do
    isTruncated=$(echo "$response" | jq -r '.IsTruncated')
    if [ "$isTruncated" != "true" ]; then
        break
    fi
    nextToken=$(echo "$response" | jq -r '.NextContinuationToken')
    response=$(list_objects "$nextToken")
    echo "$response" | jq -r '.Contents[].Key' >> "$OUTPUT_FILE"
done

echo "S3 object keys have been saved to $OUTPUT_FILE"
