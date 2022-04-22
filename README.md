# NOT COMMITTING HERE ANYMORE...
broke this repo into two independent repos (1 for server, 1 for ui)
https://github.com/JacobB-codes/thirdjob-server
https://github.com/JacobB-codes/thirdjob-ui

playing with graphql and mikroORM

... now its a job board ... and were using typeorm

For development (so far)

- create a db in postgres
- `yarn watch` will listen to for file changes and update the `/dist`
- `yarn dev` will run the server based on from the dist folder
- navigate to localhost:4000/graphql to play with the Job CRUD and User CRUD
- frontend up at localhost:3000
