// TODO: Include packages needed for this application
import { error } from "console";
import fs from "fs";
import inquirer from "inquirer";
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Provide a license:",
    choices: ["MIT", "Apache-2.0", "BSL-1.0", "0BSD", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GITHUB username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];


 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
        if (badge === 'MIT') {
          return '![Badge: MIT](https://img.shields.io/badge/License-MIT-green)';
        } else if (badge === 'Apache-2.0') {
          return '![Badge](https://img.shields.io/badge/License-Apache_2.0-yellow)';
        } else if (badge === 'BSL-1.0') {
          return '![Badge](https://img.shields.io/badge/License-BSL_1.0-purple)';
        } else if (badge === '0BSD') {
          return '![Badge](https://img.shields.io/badge/License-0BSD-blue)';
        } else {
          return '';
        }
      }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        if (license === 'MIT') {
          return '[MIT](https://opensource.org/licenses/MIT)';
        } else if (license === 'Apache-2.0') {
          return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
        } else if (license === 'BSL-1.0') {
          return '[BSL-1.0](https://opensource.org/licenses/BSL-1.0)';
        } else if (license === '0BSD') {
          return '[0BSD](https://opensource.org/licenses/0BSD)';
        } else {
          return '';
        }
    }
    
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return '![license: MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache-2.0') {
        return '![license](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'BSL-1.0') {
        return '![license](https://opensource.org/licenses/BSL-1.0)';
    } else if (license === '0BSD') {
        return '![license](https://opensource.org/licenses/0BSD)';
    } else {
        return '';
    }
  }

// TODO: Create a function to write README file
function writeToFile(README, data) {
  fs.writeFile("README", data, (error) => {
    error ? console.error(error) : console.log("README successfully created!");
  });
}

// TODO: Create a function to initialize app
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Badge
${renderLicenseBadge(answers.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test Instructions](#testinstructions)
- [Questions](#questions)
   
## Installation 
${answers.installation}

## Usage 
${answers.usage}

## License 
This project is licensed under ${renderLicenseLink(answers.license)}. 

## Contributing 
${answers.contributing}

## Test Instructions 
${answers.tests}

## Questions 
If there's any additional questions I can answer for you, you can reach out to me at https://github.com/${answers.github} or [${answers.email}](mailto:${answers.email}).
   
   `;
}
//email/mail to link
//github is link to actual repo
//markdown way to do links (href level)
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    writeToFile("README", readmeContent);
  });
}

// Function call to initialize app
init();

