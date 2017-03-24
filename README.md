# Message Board

#### By Ash Laidlaw

Welcome to the Message Board. This app will allow users to post questions, and other users can submit answers to those questions.

## Technologies Used

* JavaScript
* Ember JS
* CSS
* HTML
* Bootstrap

## Goals/Development Process

The primary goals of this project are to familiarize myself with the Ember framework, and to think about how I'm going to implement my ideas before really starting the project. The following steps are a general outline of the development process:

1. Create Ember project and start the server to begin Development
2. Install Emberfire and Bootstrap
3. Create basic site template in application.hbs
4. Add Contact and About routes
5. Add Firebase database and insert information into environment.js
   * Add model for database
   * Create JSON file to seed database
6. Routes/Components/Templates
   * Routes
      * about
      * contact
      * question
      * answer
      * index
      * delete (dynamic route)

   * Components
      * question-tile
      * answer-tile

   * Templates
      * question-form
      * answer-form
7. Integrate SASS
8. Add dynamic route to individual question
   * From here, allow user to edit and/or delete question
9. Add ability to leave answers for questions

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/Yhbv24/message-board>`
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

##

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Copyright

MIT License, © Ash Laidlaw 2017
