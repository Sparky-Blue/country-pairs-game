
A country-capital matching game, records score and can advance through rounds.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Setup
You will need Node.js, npm and git installed before being able to run this project.

Installing
Clone the repository to a directory on your local machine:

git clone https://git@github.com:Sparky-Blue/country-pairs-game.git
Open the directory and install it’s dependencies:

cd country-pairs-game
npm i
To start a development environment:

npm run start
This will launch a server which will run on http://localhost:3000 and live version of your app, you can make changes to your code and on save these changes will be reflected on the live page.

Deployment
To deploy I recommend netlify.

To install:

npm i netlify
Create a build package from the project, navigate to your project directory:

cd country-pairs-game
npm run build
To deploy

netlify deploy
Enter the build folder when prompted.

Built With
React JS - front end framework CSS

Authors
Clare Pickering
