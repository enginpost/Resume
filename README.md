# Client-Side Resume presentation

## Description
My resume isn't super short. So over time I have fiddled with maintaining it in MS, or jamming the data into an HTML webpage, and storing copies of the contents in a raw text file. Over time, separating content from presentation has bothered me, and so this is an attempt to do that.

## How it works
I am using a few pieces of client-side technology to create this approach:
* Resume content stored in a JSON data file
* Loading of JSON data using the javascript Fetch command with syncronous promises to parse the results
* Separate ES6 JavaScript module files to contain HTML templates for presenting different parts of the resume
* ES6 JavaScript class notation to create the page App, inherit from importing the HTML templates and building the presentation of the page
* SCSS styling is used to create the CSS style sheet.

## How to install and run

### Requirements for Development

* GIT
* Node.js installed
* NPM installed

### Steps

1. Copy down the repository
2. Run "npm install" to bring down any node modules
3. Run "npm start" to launch the web server.

## Editing the App

Your resume should be stored in the _src/scripts/data/resume.json file. if you maintain the same structure the current example templates should be able to dynamically load your resume data and display it.

Changes to the resume.JSON structure will require that you reformulate your HTML template literals.

When you run "npm start" it should watch for changes in the "_src" folder and render a static HTML page with traditional CSS in the "site" folder. Node is not needed on the actual web server. The results found in the "_site" folder only require a webserve that can deliver HTML,CSS, JavaScript, and images.
