ARG NODE_VERSION=18.14.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy the rest of the source files into the image.
COPY package.json .
COPY tsconfig.json .

RUN npm install
# RUN npm run build

COPY . .

# Expose the port that the application listens on.
# EXPOSE 3000

# Run the application.
CMD npm start
