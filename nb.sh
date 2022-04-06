#!/bin/bash

FILE=~/Desktop/test/$(date +%F).md

n(){
if [[ ! -f "$FILE" ]]; then
   "nb add --filename "$(date +%F).md" -c"
   else
   "nb edit --filename "$(date +%F).md" -c"
fi
}
