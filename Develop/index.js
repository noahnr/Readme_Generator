const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fileAsync = util.promisify(fs.writeFile);

// array of questions for user
inquirer.prompt([
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
            {name: 'GNU GPLv3'},
            {name: 'MIT'},
            {name: 'ApacheLicense2.0'},
            {name: 'Mozilla Public License 2.0'},

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
])
.then(function(info){
    let readMe = `

    ${info.title}



    table of contents 



        instalation

        usage

        contributors

        questions





    project description 

    

    ${info.description}



    Project Contributors 



    ${info.contributing} 



    Github User Name 



    ${info.userName}



    Email 



    ${info.email}



    questions for the project



    ${info.questions}`;





    let writeP = fileAsync("README.md", readMe);

    writeP.then(()=>{

        console.log("succesfull!");

    }).catch(function(err){

        console.log("error");

        console.log(err);

    })

});
