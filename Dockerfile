FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy source
COPY . .

# App listens on port 8080
EXPOSE 8080

# Start app
CMD ["node", "server.js"]
