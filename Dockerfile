
# Use an official Node.js runtime as a parent image
FROM node:21.5

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --ignore-scripts

# Bundle app source
COPY src/ ./src/
COPY public/ ./public/
COPY .env ./

# Expose port 5173 to the outside world
EXPOSE 5173

# Command to run your application
CMD ["npm", "run", "dev"]
