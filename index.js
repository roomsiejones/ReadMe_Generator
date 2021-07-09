//  Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Was going to try to validate email using this, didn't understand the docs.
// const validator = require("email-validator");
const generateMarkdown = require('./utils/generateMarkdown.js')



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
            name: "email",
            // vailidate the input to make sure the input was an email
            validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
        
        },
        
    ])
    // this will create a file called "SampleREADME.md" and use the inputs from the prompt to fill in the baseline readme file and write that entire string to the new file
    .then((res) => {fs.writeFile("SampleREADME.md", generateMarkdown(res) , function (err) {
        if (err) {
          console.log(err.message);
        } else {
          console.log("SampleREADME has been created or updated!");
        }
    })
});
