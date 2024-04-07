# Use an official Node.js runtime as the base image
FROM node:20.10.0


ENV DB_NAME=myapp
ENV DB_PORT=3306
ENV DB_USERNAME=root
ENV DB_PASSWORD=root
ENV DB_HOST=localhost
ENV ENV=dev
ENV PORT=5000


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Bundle your source code inside the Docker image
COPY . .

# Expose the port on which your Node.js application will run
EXPOSE 5000

# Command to run the Node.js application
CMD ["npm", "start"]
