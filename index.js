//  Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// need to add a toc and badge
//  This is a generic readme structure to be filled in by the prompts in the terminal
function fillREADME (res) {
    const {title, description, installation, usage, contribution, test, license, gitHub, email} = res;
    return `
# ${title}

## Description
${description}
    
    
## Installation
    
${installation}
## Usage 
    
${usage}
    
## License
This project is licensed under the ${license} license.
    
## Contributing 
    
${contribution}    
## Test 
    
${test}   
## Questions
To contact me or if any questions, please email me at ${email}.
Go to https://github.com/${gitHub} to view my github profile.    
`
};



// user will be prompted to answer questions that will be later passed through as data to fill out a README.
inquirer.
    prompt([
        {
            type: "input",
            message: "What would you like the title of your README to be?",
            name: "title"
        },
        {
            type: "input",
            message: "Please type out the description of your README.",
            name: "description"
        },
        {
            type: "input",
            message: "Please type out the installation process of your README.",
            name: "installation"
        },
        {
            type: "input",
            message: "Please type out the usage of your README.",
            name: "usage"
        },
        {
            type: "input",
            message: "Please type out the contribution section of your README.",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please type out the test instructions for your README.",
            name: "test"
        },
        {
            type: "list",
            message: "Please select a licensing to use for your README?",
            name: "license",
            choices: ["mit" , "ibm"] 
        },
        {
            type: "input",
            message: "Please type out your GitHub profile name.",
            name: "gitHub"
        },
        {
            type: "input",
            message: "Please type out your email address where you can be contacted.",
            name: "email"
        },

    ])
    .then((res) => {fs.writeFile("SampleREADME.md",fillREADME(res) , function (err) {
        if (err) {
          console.log(err.message);
        } else {
          console.log("README has been created!");
        }
    })
});