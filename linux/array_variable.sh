#!/bin/bash

<<comment
Define Array using whitespace seperated
myArray=(1 2 Hello "Hey Man")
Get value from array
echo "${myArray[0]}"
comment

#define index array
myArray=(1 20 30.5 Hello "Hey Buddy!")

#get array index value
echo "Value in 3rd index ${myArray[3]}"

#get all values in array
echo "All the values in array are ${myArray[*]}"

#add element based in index
myArray[5]="added value using index"
echo "After adding index value Array ${myArray[*]}"

#iterating array
for element in "${myArray[@]}"; do
	echo "element iterate $element"
done
