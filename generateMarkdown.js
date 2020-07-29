// function to generate markdown for README
function generateMarkdown(data) {
console.log(data);
  return `#${data.projectName}

# Table of Contents

-[projectInstructions] (#projectInstructions)
-[Usesage] (#Useage)
-[licenseName] (#licenceName)
-[githubUsername] (#githubUsername)
-[Contributors] (#Contributors)
-[Tests] (#Tests)
-[Questions] (#Questions)

##Description:
![Licence] (https://img.shields.io/badge/License-${data.LicenseName}-blue.svg "license Badge)

  ${data.projectAuthor}
## Author:
  ${data.projectInstructions}  
## Instructions:
  ${data.Usesage}
## Usesage:
  ${data.licenseName}
## License:
  ${data.githubUsername}
## Github Username:
  ${data.emailAddress}
## Email:
  ${data.Contributors}
## Contributors:
  ${data.Tests}
## Tests:
  ${data.Questions}

## Questions:
    For questions about the GENERATOR you can go to my github page at the following link:
  
  - [Github Profile] (https://github.com/${data.githubUsername})

For additional questions please reach out to my email at: ${data.emailAddress}
`;
}



  module.exports = generateMarkdown;

