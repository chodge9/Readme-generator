// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadme = require ("./utils/generate-readme");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "github username",
    message: "What is your github username?",
    validate: answer =>{
        if (answer !== ""){
            return true;
        } return "chodge9"
    }
}, {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
    validate: answer =>{
        if (answer !== ""){
            return true;
        } return "title is required"
    }
}, {
    type: "input", 
    name: "description",
    message: "What is the description of the project?"
}, {
    type: "input",
    name: "installation",
    message: "How do you install this software?"
}, {
    type: "input",
    name: "usage",
    message: "How is this software meant to be used?"
}, {
    type: "list",
    name: "license",
    message: "What is the license of the project?", 
    choices: ["MIT", "Apache 2.0", "GPL", "BSD 3.0"] 
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,"/example/",fileName),data)
}

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers)
        writeToFile("README.md", generateReadme(answers))
    })
}

init();
