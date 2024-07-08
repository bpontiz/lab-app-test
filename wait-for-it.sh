#!/usr/bin/env bash

host="$1"
shift
cmd="$@"

until nc -z "$host" 3306; do
  echo "Waiting for MySQL database..."
  sleep 1
done

>&2 echo "MySQL is up - executing command"
#exec $cmd
