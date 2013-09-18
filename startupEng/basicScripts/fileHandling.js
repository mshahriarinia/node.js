var fs = require('fs');
var outfile = "hello.txt";
var string = "bla bla bla"
fs.writeFileSync(outfile, string)
console.log('script: ' + __filename + '\nwrote ' + string + "To: " + outfile)
