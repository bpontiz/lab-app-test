#!/bin/bash
set -e

# Wait for the MySQL database to be ready
/usr/local/bin/wait-for-it.sh db_bootcamp2 --timeout=60 --strict echo "MySQL is up and running"

# Run migrations
npx sequelize-cli db:migrate --config ./db/config/config.js

# Start the server
npm start
