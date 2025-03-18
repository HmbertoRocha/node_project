//this importss express
const express = require('ex[ress');

//use dotenv to expose our enviroment variables
require('dotenv').config();

//we createa new instance of express as the app object 
const app = express();
//PORT assigment
const PORT = process.env.PORT;


//router handler that will define uri/url that does something
app.get('/home' , (req, res) =>{
    res.send('Hello, World');
});


//star our server
app.listen(PORT, () =>{
    console.log(`Server started on port: ${PORT}`);
});

