// function to generate markdown for README
function generateMarkdown(data) {
console.log(data);
  return `#${data.projectName}
## README Generator By Steph Morrison

##Description:
![Licence] (https://img.shields.io/badge/License-blue.svg "license Badge)

## Project Name:
  ${data.projectName}

## Author:
${data.projectAuthor}

## How to install:  
${data.projectInstructions}  

## How to use:
${data.Useage}

## License Name: 
${data.LicenseName}

## Github Username:
${data.githubUsername}

## Email Address:  
${data.emailAddress}

## Contributors: 
${data.contributors}

## Tests: 
${data.tests}

## Questions
 ${data.questions}

## Any Further Questions:
    For questions about the GENERATOR you can go to my github page at the following link:
  
  - [Github Profile] (https://github.com/smorrison-uoft/README-generator-)

For additional questions please reach out to my email at: (smorrison.to@gmail.com)
`;
}



  module.exports = generateMarkdown;

