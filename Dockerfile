FROM node:22.4

RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/

WORKDIR ./app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .

COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh /usr/local/bin/entrypoint.sh

EXPOSE 8081

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]