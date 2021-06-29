# 0. Requirements

1. ### Node v10.x.x

   install node v10.x.x running:

   ```bash
   $ nvm install lts/dubnium
   $ nvm use lts/dubnium
   Now using node v10.24.1 (npm v6.14.12)
   ```

   check node version:

   ```bash
   $ node -v
   v10.24.1
   ```

2. ### npm v6.x.x

   check npm version

   ```bash
   $ npm -v
   6.14.12
   ```

   install npm v6.x.x

   ```bash
   $ npm i -g npm@6
   + npm@6.14.13
   updated 3 packages in 5.35s
   ```

3. ### Copy `.env.sample` to `.env` file

   ```bash
   # .env.sample file has environment variables with preset values that are used below

   # from root
   $ cp .env.sample .env
   ```

4. ### PostgreSQL running with

   - User: bayer_user
   - Password: bayer_pass
   - Database: bayer_app
   - Test database: bayer_app_test
   - Host: 127.0.0.1
   - Port: 5432

   **Obs.: The parameters above are already preset at `.env.sample` and can be modified at `.env` and `.env.test` files to follow your local environment;
   `.env.test` parameters are used only for running the tests**

   ***

   ## Note

   **You can set `DB_DIALECT=sqlite` at `.env`/`.env.test` to use a local database file-based instead of running an instance of PostgreSQL**

   ***

# 1. Build the client app

- npm

```bash
# install dependencies
$ cd src/client
$ npm install
# build client app
$ npm run build
# back to root
$ cd ../..
```

# 2.Run the server app

- npm

```bash
# from root, install dependencies
$ npm install

# copy .env sample file
$ cp .env.sample .env
# run migrations
$ npx sequelize db:migrate
# run seeders (this will populate db with some dummy data)
$ npx sequelize db:seed:all
# start app
$ npm run start
```

# 3. Access the application

Access the application at http://localhost:3000 or at any port set in `PORT` at `.env` file

# 4. Run tests

To run the server app tests

```bash
# make sure you have set parameters at .env.test to match your test environment

# from root
npm run test
```

# 5. Some Details about the app

- as best practice, `.env` file is ignored by git. So you can copy the `.env.sample` file with preset values to run this challenge
- sequelize was used at server-side as ORM
- the client Angular app was placed at `src/client` folder
- jest was used to write/run the server app tests
- database modeling and relationships:
  - three tables: Farmers, Addresses, Documents
  - Farmer has one Address and one Document (it does **not** contain foreign key)
  - Document belongs to Farmer (it contains a foreign key `farmer_id`)
  - Address belong to Farmer (it contains a foreign key `farmer_id`)
- a fake delay can be set for server-side responses at `.env`/`.env.test` files
