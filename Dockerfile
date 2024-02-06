
# Use a lightweight Node.js base image
FROM node:18-alpine

# Set a working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Vite application
RUN npm run build

# Expose the port the application will run on
EXPOSE 5173 

# Start the application
CMD ["npm", "run", "dev"]
