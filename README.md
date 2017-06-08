# angular-scaffold
Baseline application to help you start a new project fast

# Prerequisites

## Node and NPM 

Last Node LTS must be installed 

## Install angular-cli

`npm i -g @angular/cli`

`ng` is the CLI itself

    Verify the installation

    `npm list -g @angular/cli --depth=0`
    `ng -v`

### Preferrablly, install [yarn](https://yarnpkg.com/lang/en/docs/install/#alternatives-tab).

`npm i -g yarn`

# Build and Run

1. `ng serve` to start the a webpack server to run the application on port 4200

    Go to http://localhost:4200 to verify that the application is running

    To change the default port, open `.angular-cli.json`, change the value on default.serve.port
1. `ng serve --prod` to run in production mode.
1. `ng build` build the application, build assets are `dist` directory.

## Build and Deployment
1. `ng lint` to check styles



## Test

### Unit test
  
  Set up via Karma, Jasmin
1. `ng test` by default to watch file changes

### End-to-end test
Set up with Protractor
1. `ng e2e` build and launch browser, serve the app


## Getting Help

1. `ng doc component` to look up documentation for features
1. `ng serve --help` to look up doc for `ng serve` command

## Regnerate a brand new project with routing and scss options

`ng new project-name --routing --style=scss`