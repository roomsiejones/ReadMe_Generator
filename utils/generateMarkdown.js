
const fillREADME = require('../fillREADME');
// const fs = require('fs');

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
};
// Make the IBM and the MIT functions
function mit(info) {
  info.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

 
};

function ibm(info) {
  info.badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'


};

module.exports = generateMarkdown;
