# Micro Frontend Host (Module Federation)

This project is a micro-frontend host application that consumes components/pages from a remote app using Webpack Module Federation.

## Running the Host

To start the project, run:

npm run start


This will start the host application on port 3000.

## Remote Configuration

The Module Federation configuration expects a remote app to be running on port 4000, with the following mapping:

light: 'light@http://localhost:4000/remoteEntry.js'

## Setup Instructions

Before running this project, make sure to:

Clone the poc-mfe-remote
 repository.

Start the remote app.
This will provide the remoteEntry.js with the shared components.

✨ Happy hacking!
