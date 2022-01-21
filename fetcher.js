const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const website = args[0];
const file = args[1];

request(website, (error, response, body) => {
  if (response.statusCode === 200) {
    fs.writeFile(file, body, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
});