//  This is a generic readme structure to be filled in by the prompts in the terminal

function fillREADME (res) {
    const {title, description, installation, usage, contribution, test, license, gitHub, email, badge} = res;
    return `
# ${title}

## Description
${description}

${badge}
 
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#test)
* [Questions](#questions)
    
## Installation
    
${installation}
## Usage 
    
${usage}
    
## License
This project is licensed under the ${license} license.
    
## Contribution 
    
${contribution}    
## Test 
    
${test}   

## Questions
To contact me or if any questions, please email me at ${email}.
Go to https://github.com/${gitHub} to view my github profile.    
`
};

module.exports = fillREADME;