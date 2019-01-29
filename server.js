const connect = require('connect');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 8080;

connect().use(serveStatic(`${__dirname}/dist`)).listen(PORT, function(){
  console.log(`Server running on ${PORT}...`);
});