// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
    return `# ${data.projectName}`
            `# ${data.projectAuthor}`
            `# ${data.projectInstructions}`
            `# ${data.Useage}`
            `# ${data.licenceName}`
            `# ${data.githubUsername}`
            `# ${data.emailAddress}`
            `# ${data.Contributors}`
            `# ${data.projectInstructions}`
            `# ${data.Tests}`
            `# ${data.Questions}`
            `# ${data.readme}`



  
}
  
  module.exports = generateMarkdown;
  
