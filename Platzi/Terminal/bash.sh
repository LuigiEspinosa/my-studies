#!/bin/bash

NEW_DIR=platzi
CURRENT_DIR=$(pwd)

if [ ! -d "/$CURRENT_DIR/$NEW_DIR" ]; then
	mkdir /"$CURRENT_DIR"/$NEW_DIR
fi

cp update.sh /"$CURRENT_DIR"/$NEW_DIR/
echo "$(date): It's ready"
