// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${user.title}
  #Description
  ${data.description}
  #Table of Contents
  
  #Installing
  ${data.installing}
  #Usage
  ${data.Usage}
  #License
  ${data.license}
  #Contributing
  ${data.author}
  #Tests
  ${data.runTest}
  #Questions
  ${data.email}
  ${data.GitHub}
`;
}

module.exports = generateMarkdown;
