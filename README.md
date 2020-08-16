# stylo-stationery
To run the project, install node.js [here](https://nodejs.org/en/).
To check if node has been installed successfully, run the command node --version , if it does give the version you installed, node has been successfully installed. If not, reinstall node and go through the setup.

Now cd into the directory "stylo-stationery" and run npm i (this command will install all the dependencies).
Now install nodemon (npm package which helps to automatically restart the server upon changing the code) but you will have to refresh localhost:3000 each time you make changes but will not be required to rerun the server. Install nodemon [here] (https://www.npmjs.com/package/nodemon)

Now staying in the directory "stylo-stationery", run npm start, this will start the server and will show "Server started on port 3000" on the terminal.
Open localhost to see the project [here] (http://localhost:3000/)

In the future while specifying the paths, dont write public/ since a command has been written in app.js to render static elements and the paths should be specified relative to the public folder.

:)
