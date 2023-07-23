# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /xbprime

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port that Nuxt.js will run on (default is 3000)
EXPOSE 3000

# Start the Nuxt.js application
CMD ["yarn", "dev"]
