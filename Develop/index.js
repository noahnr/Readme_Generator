const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a short description of the project, directions for installation, usage information, contribution guidlines, and instructions to test the project.",
        name: "description"
    },
    {
        type: "input",
        message: "Give short instructions to installing your application",
        name: "installing"
    },
    {
        type: "input",
        message: "Give a short description of how to run a test on your app.",
        name: "runTest"
    },
    {
        type: "list",
        name: "license",
        message: "What license will you be using?",
        choices: [
            {name: 'GPL'},
            {name: 'MIT'},
            {name: 'Apache License 2.0'},

        ],
    },
    {
        type: "input",
        message: "Author",
        name: "author"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "Github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    },
];
return inquirer.prompt(questions);


// function to write README file
function writeToFile(fileName, data) {
 
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
