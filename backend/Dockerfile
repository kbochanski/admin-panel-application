
FROM node:16-alpine 

WORKDIR /app

# Install required app packages
COPY package*.json /app/
RUN npm install

# Install OS specific sqlite version
# Note that you should rebiuld with docker compose build --no-cache to avoid capturing your local OS with sqlite3 install
RUN rm -r node_modules/sqlite3
RUN npm install sqlite3 --save
# db should be for napi-v6-linux-musl-x64 os
RUN ls /app/node_modules/sqlite3/lib/binding

# Mount local folder to container for developing
VOLUME /app

EXPOSE 3030

CMD [ "npm", "run", "dev" ]
