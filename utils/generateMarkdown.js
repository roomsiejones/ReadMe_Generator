// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const fs = require('fs');
const fillREADME = require("../index.js");

function generateMarkdown(res) {
  switch (res.license) {
      case "mit":
      mit(res);
      break;
      case "ibm":
      ibm(res);
      break;
  }
  return fillREADME(res);
}
// Make the IBM and the MIT functions
module.exports = generateMarkdown;
