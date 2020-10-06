# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Code Overview

SSR: The application will be SSR with Angular Univeral and express engine which is a built-in tool available in Angular.

Bundling: Application has been packed with webpack.

Styling: Bootsrap 4 has been used for styling and has been modified as per the requirements of the responsive design. The styling used is SCSS.

Unit Testing: Jasmine and Karma have been used for unit testing the code. Currently the code coverage is low due to time shortage but will be increased soon.

Coding Approach: The app is divided into 3 components Filter, Cards and Card. 
Filter Component contains all the logica and template related to filter and the selections are passed to Cards Component via component communiation(@Input and @Output).
Cards Component will contain all the cards whose data is passed to individual card from this component via @Input. This component also utilizes SpaceX service to hit the api, there are two apis available but only one is used which passes the api params based on the scenario. The service method is an Observable.
Card Component is a reusable component which creates one card. This component has been iterated in Cards Component to generate all the cards.

Depolyment: The app has been deployed to https://hrmnsngh.github.io/XT-Assignment/.

LightHouse Score: The app has been scored 89 in lighthouse scoring.
