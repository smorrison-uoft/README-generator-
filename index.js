const inquirer = require ("inquirer");
const fs = require ("fs");
const path= require ("path");
const generateMarkdown = require("./generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectName",
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
        name: "Useage",
        message: "Instructions on how to use"
    },{

        type: "list",
        name: "LicenseName",
        choices: ['Apache 2.0' , 'MIT' , 'GNU'],
    
    },{

        type: "input",
        name: "githubUsername",
        message: "What is your github username?"
        
    },{

        type: "input",
        name: "emailAddress",
        message: "What is your email address?"

    },
    {
        name: "contributors",
        message: "Contributors",
        default: "None"
    },
    {
        name: "tests",
        message: "Any current tests? ", 
        default: "Currently no tests are available."
    }, 
    {
        name: "questions",
        message: "Any more questions",
        default: "None"

    }, 
    {
        name: "readme",
        message: "Readme Generated",
        default: "Success!" 
        
    
    }

    
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }
  
  // function to initialize program
  function init() {
      inquirer.prompt(questions).then((answers)=>{
          console.log("README")
        writeToFile("readme.md",generateMarkdown({answers}))
      })

      
     
  }
  
  
  
  // function call to initialize program
  init();
  