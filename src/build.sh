#!/bin/bash

hugo -D

echo -e "Removing previous static files..."
rm -rf ../docs

echo -e "Moving static files to 'docs' folder..."
mkdir ../docs
mv public/* ../docs/

echo -e "Build finished successfully"
