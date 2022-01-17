const figlet = require('figlet');
require('colors')

figlet('Hello World!!', function (error, data) {
  if (error) {
    console.log('Something went wrong...');
    console.dir(error);
    return;
  }
  console.log(data.blue);
});
