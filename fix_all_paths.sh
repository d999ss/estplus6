#!/bin/bash

# Fix all HTML files to remove hus6.com prefix
echo "Fixing paths in all HTML files..."

# Find all HTML files and fix the paths
find . -name "*.html" -type f | while read -r file; do
    echo "Processing: $file"
    # Remove hus6.com/ prefix from href and src attributes
    sed -i '' 's|href="hus6\.com/|href="|g' "$file"
    sed -i '' 's|src="hus6\.com/|src="|g' "$file"
done

echo "All HTML files have been fixed!"