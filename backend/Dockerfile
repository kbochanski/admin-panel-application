
FROM node:16-alpine 

WORKDIR /app

# Install required app packages
COPY package*.json /app/
RUN npm install

# Install OS specific sqlite version
RUN rm -r node_modules/sqlite3
RUN npm install sqlite3 --save

# Mount local folder to container for developing
VOLUME /app

EXPOSE 3030

ENTRYPOINT ["./entrypoint.sh"]