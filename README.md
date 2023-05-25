# Authentication App [Docker + Nx + Angular + Express + Mongoose]

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Description and technologies used

This GitHub repository contains an Authentication App implemented using the following technologies:

- Container: Docker
- Workspace: Nx
- Frontend: Angular v16
- Backend: Express
- Database: Mongoose
- Tests: Jasmine
- Styling: Ng Bootstrap
- Security: JWT Token (Frontend) and environment files for production (Backend)

To ensure security and authentication, the JWT Token is required in each API request if the user wants to POST any information. To access the MongoDB Atlas server, developers need to edit their own process.env file and insert the necessary credentials. This will enable them to connect to their Mongoose DB for development purposes.

Feel free to explore and contribute to this repository for future enhancements and features.

## Screenshots

![Screenshot 2023-05-25 at 19 34 58](https://github.com/paulo-bettencourt/auth-login-docker-nx-angular-jasmine-karma/assets/37920932/2d2bf3ae-152a-4f4d-b37d-1c6b97efb1df)

`If the user tries to login with the wrong credentials, the app will return an error and won't allow the user to login`

![Screenshot 2023-05-25 at 19 35 20](https://github.com/paulo-bettencourt/auth-login-docker-nx-angular-jasmine-karma/assets/37920932/a9a39273-02ca-419f-9507-eb82e99b8db1)

`After loggin in, the user will have access to his dashboard and a JWT Token is provided`

![Screenshot 2023-05-25 at 19 35 33](https://github.com/paulo-bettencourt/auth-login-docker-nx-angular-jasmine-karma/assets/37920932/9ee5dbe8-5bca-4843-ab0e-4fa97e9b6459)

## Understand this workspace

1. Build the app by executing the command docker build -t auth .. This command will create a Docker image for the Authentication App.

2. Once the image is built, run the app using docker-compose up. This command will start the Nx workspace, allowing the Frontend and Backend apps to run seamlessly. Additionally, the Docker container will establish the necessary connections with the Database, ensuring smooth interaction between the components of the app.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
