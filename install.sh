#!/usr/bin/env bash

dir=/var/www/html/relativesize;

if [ ! -d "$dir" ];
then
	echo "directory '$dir' is missing. It will be created.";
	mkdir -p "$dir";
fi;

rsync -azvh -P *.js *.html *.css "$dir/";
sudo chown -R manny:www-data "$dir";
sudo chmod -R 750 "$dir";
