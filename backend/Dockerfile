FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Install nodemon globally for dev
RUN npm install -g nodemon

EXPOSE 5000

CMD ["nodemon", "src/server.js"]
