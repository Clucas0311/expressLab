// first start by requiring express
const express = require('express');
// create an instance to have access to its modules and methods
const app = express();
// tell the app to listen for requests

//Three routes
app.get('/', (req, res) => {
	res.send(`
      <html>
       <head>
         <title>My site</title>
       </head>
       <body>
         <h1>Hello World</h1>
       </body>
      </html>
    `);
});

app.get('/puppies', (req, res) => {
	res.send(`<h1>Puppies</h1>`);
});
app.get('/kittens', (req, res) => {
	res.send(`<h1>Kittens</h1>`);
});

const PORT = 1337;
app.listen(1337, () => {
	console.log('server listening');
});
