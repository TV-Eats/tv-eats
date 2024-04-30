# TV-Eats

The best place to find restaurants as-seen-on-TV

## Prerequisites

- Windows Users: Configure Unix-style line endings in Git
  - `git config core.autocrlf false`
  - If you are using VSCode, the `.vscode` folder setting `"files.eol": "\n"` should take care of this. If you are using another editor make sure it is set to use LF endings (\n) and not CRLF (\r\n)

## Repo Folder Structure

- `data` Restarant data retrieval scripts
- `public` Assets served by the Frontend
- `src` Source for the Frontend
- `supabase` Database migrations and backend.

## Frontend

- Install [Node.js v20](https://nodejs.org/en/download). Windows Users: make sure you check "Install Dependencies".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Database & Backend

This project uses [Supabase](https://supabase.com/) as it's database. It is also used as the backend and authentication platform. I recommend you create an account linked to your GitHub account.

### Setup

#### 1. Install Docker Desktop

[Download & install from here.](https://www.docker.com/products/docker-desktop/)
You can skip signing in.

#### 2. Be invited to the TV-Eats Supabase org

Ask to be invited to the org to get access to the project

#### 3. Install the Supabase CLI tool

Follow the getting [started guide](https://supabase.com/docs/guides/cli/getting-started)

#### 4. Login to Supabase and Link the TV-Eats project

`supabase login`
`supabase link`

#### 5. Start the local database

`supabase start`

You should now be able to see the database locally at [http://127.0.0.1:54323/project/default/database/tables](http://127.0.0.1:54323/project/default/database/tables)
