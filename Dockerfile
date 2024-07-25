# Dockerfile

# Use the official Node.js image as the base image
FROM node:16 AS build
# Set the working directory inside the container
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application source code
COPY . .
# Build the React application
RUN npm run build
# Use the official Nginx image to serve the static files
FROM nginx:alpine
# Copy the build output to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 3000
EXPOSE 3000
# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
