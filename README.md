
# Node Register

A demo to use node & csv databse to build a register system.

## How To Run

1. install node.
1. `npm install -g webpack` to install webpack
1. `npm install` in project root folder.
1. `webpack` to compile script, and watch file change.
1. `node ./public/server.js` to start http server.
1. Done! Try `http://localhost:8089` in your browser:)

## How To Develop

1. add more router to functions in `src/main.js`.
1. `database.js` use to access csv database. you can put your queries in this file.
1. make sure `webpack -w` always runned in command line. it will watch any file changes from `src` folder, and compile your code from es6 to es6.
1. run `node ./public/server.js` to see what happend.