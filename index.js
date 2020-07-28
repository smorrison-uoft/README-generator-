const inquirer = require ("inquirer");
const fs = require ("fs");
const path= require ("path");
const generateMarkdown = require("./generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectname",
        message: "What is the name of your project"
    
    },{
        type: "input",
        name: "projectAuthor",
        message: "Author name"
    },{
        type: "input",
        name: "projectInstructions",
        message: "How to install"
    },{

        type: "input",
        name: "How to use",
        message: "Instructions on how to use"
    },{

        type: "list",
        name: "Licence name",
        choices: ['Apache 2.0' , 'MIT' , 'GNU'],
    
    },{

        type: "input",
        name: "github username",
        message: "What is your github username?"
        
    },{

        type: "input",
        name: "email address",
        message: "What is your email address?"

    },
    {
        name: "contributors",
        message: "List any contributors: ",
        default: "None"
    },
    {
        name: "tests",
        message: "Explain how to run testing: ", 
        default: "Currently no tests are available."
    }, 
    {
        name: "questions",
        message: "Remaining questions: ",
        default: "None"

    }, 
    {
        name: "input",
        message: "Readme generated",
        default: "Success!" 
        
    
    }

    
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }
  
  // function to initialize program
  function init() {
      inquirer.prompt(questions).then(function(answers){
        writeToFile("README.MD",generateMarkdown(answers))
      })

      
     
  }
  
  
  
  // function call to initialize program
  init();
  