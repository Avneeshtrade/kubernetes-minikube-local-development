# Use an official Node.js runtime as a parent image
FROM node:20.10.0 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the production-ready build with a lightweight HTTP server
FROM nginx:alpine

# Copy the build output from the build stage to the NGINX public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
