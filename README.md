These are our wireframes designed on Figma at first sprint:

Home page , Energisers page and Energiser-Detail page:
https://www.figma.com/file/FBvvVO1VL5GLueK8Z5a6jt?node-id=0%3A1&fuid=1031319103329822795

Create-Energiser page , Log in and Sign Up page:
https://www.figma.com/file/3ObG61vnz2xPc8KCzvUjPB/Create-energiser?node-id=0%3A1&t=JhYHYr4Xo33TmHRy-0

Our Sources
We have used the following resources to add content to our application
https://unsplash.com/
https://www.sessionlab.com/blog/online-energizers/

# Starter Kit

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://rende gir.com/deploy?repo=https://github.com/CodeYourFuture/cyf-final-project-starter-kit)

- [x] Full stack ES8+ with [Babel]
- [x] [Node] LTS support (verified working on 14.x, 16.x and 18.x LTS releases)
- [x] [Express] server
- [x] Logging with [Winston] and [Morgan]
- [x] [React] client with [Webpack]
- [x] Client-side routing with [React Router]
- [x] Linting with [ESLint] and [Prettier]
- [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
- [x] Production build (single deployment artifact, React loaded via CDN)
- [x] [Render] deployment
- [x] [Cloud Foundry] deployment
- [x] [Docker] build
- [x] [Postgres] database with [node-postgres]

## Setup

Pick one member of the team to own the repository and pipeline. That person should do the following:

1.  Click the "Use this template" button above (see [GitHub's docs][1]) to create your team repository and name it something appropriate for your project.
2.  In your repo, click the "Deploy to Render" button at the top of the README and log in using GitHub when prompted.
3.  Fill in a service group name for your application and then click "Apply".
4.  Once it has deployed successfully, click the "managed resources" link to view the application details.

Whenever you commit to main (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

- `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
  the frontend is proxied to it).
- `lint`: runs ESLint and Prettier against all the code in the project.
- `serve`: builds and starts the app in production mode locally.

### Database
You can run a local PostgreSQL database instance using Docker. Run a container like this:

docker run --name cyf-postgres -p 5432:5432 -e POSTGRES_DB=cyf -e POSTGRES_PASSWORD=cyf -d postgres

To run psql and access the database, you can use the same Docker image like this:

docker run -it --rm --network host -e PGPASSWORD=cyf postgres psql -h localhost -U postgres cyf

knex is being used to manage database migrations (to update the database schema). Here is a guide to the main commands:

npx knex migrate:up - will update the local environment to the most recent schema

npx knex migrate:make 001_label - to create a new database migration in migrations/. Make sure to increment the 001 to a new available index and use a descriptive label.

For creating migration, please read knex https://knexjs.org/guide/schema-builder.html

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Security

If the project handles **any kind of** Personally Identifiable Information (PII) then make sure the following
principles are followed:

- Only collect **strictly necessary** PII;
- Access to PII should be as restricted as possible;
- Access to PII should only be possible after authentication. Authentication **must be done** via GitHub. **Ad hoc
  authentication solutions are not allowed**;
- Admins must be able to control who has access to the platform and at which levels using only GitHub groups;
- There must be an audit mechanism in place. It is required by law to know who accessed what and when;
- Code must be reviewed by senior developers before being pushed to production;
- APIs must be secure. Make sure we are not handling security on the frontend.

### Troubleshooting

See the guidance in the [wiki].

[1]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
[Babel]: https://babeljs.io/
[Cloud Foundry]: https://www.cloudfoundry.org/
[collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
[Docker]: https://www.docker.com
[ESLint]: https://eslint.org/
[Express]: https://expressjs.com/
[Morgan]: https://github.com/expressjs/morgan
[Node]: https://nodejs.org/en/
[node-postgres]: https://node-postgres.com/
[Postgres]: https://www.postgresql.org/
[Prettier]: https://prettier.io/
[pull request]: https://help.github.com/en/articles/about-pull-requests
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/web
[Render]: https://render.com/
[Webpack]: https://webpack.js.org/
[wiki]: https://github.com/textbook/starter-kit/wiki
[Winston]: https://github.com/winstonjs/winston
