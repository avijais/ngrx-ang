# MovieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## To use action in ngRx, Install ngRx store first, command to install ngRx store above Ang CLI 6

Run command `ng add @ngrx/store@latest --minimal false`
--minimal false will add some files and folders, it should create reducer folder with reducers and metaReducers, but if you are going to use only action then not need it.
This command will add `"@ngrx/store":"^11.1.1"` line in the file `package.json`



## Create action

1. Create directory `app/Store`
2. Create directory `app/Store/Actions`
3. Create file `expense.action.ts`
4. Will create 3 action
5. All action will have 2 property, 1 is Type(means identification of action) and another is property(so what action brings like payload) 