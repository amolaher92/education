#!/bin/bash

#access system variable in user variable
my_hostname=$(hostname)
my_username=$(whoami)

#use define variable
echo "This is my hostname : $my_hostname and my user name : $my_username"
