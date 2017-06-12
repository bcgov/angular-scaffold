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

### Install [yarn](https://yarnpkg.com/lang/en/docs/install/#alternatives-tab).

`npm i -g yarn`

## Build and Deployment

1. `ng serve` to start the a webpack server to run the application on port 4200

    Go to http://localhost:4300 to verify that the application is running

    To change the default port, open `.angular-cli.json`, change the value on default.serve.port
1. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, like so: `ng serve --prod` to run in production mode.
1. `ng lint` to check styles


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Example: Generate a customer component

`ng g c customer -d`

## Running Tests

### Unit tests
  
  Set up via Karma, Jasmin
1. `ng test` by default to watch file changes

### End-to-end tests
    Set up with Protractor
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Getting Help

1. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
1. `ng doc component` to look up documentation for features
1. `ng serve --help` to look up doc for `ng serve` command


## Change aspects of the application

### Change style dialect

`ng set default.styleExt css`

## Regnerate a brand new project with routing and scss options

`ng new my-app --routing --style scss`
