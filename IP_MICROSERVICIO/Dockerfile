# Use the official Node.js image with a specified version as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory inside the container
COPY . .

# Expose the port on which the app runs
EXPOSE 2001

# Command to run the app when the container starts
CMD ["node", "index.js"]
