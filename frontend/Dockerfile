FROM node:16-alpine 

WORKDIR /app

# Install required app packages
COPY package*.json /app/
RUN npm install

# Mount local folder to container for developing
VOLUME /app

EXPOSE 3000

CMD [ "npm", "run", "dev" ]