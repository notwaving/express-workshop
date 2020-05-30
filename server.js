const express = require('express');
const app = express();
const formidable = require('express-formidable');
// // Save blog post data on this machine's hard drive, i.e. file-system
// const fs = require('fs')
// Serve the static assets in our public folder
app.use(express.static("public"));
// Uses the express-formidable library
app.use(formidable());
// // __dirname is a Node global object that gives you a path to the working directory
// fs.readFile(__dirname + '/data/posts.json', function (error, file) {
//     console.log(file);
//     console.log(file.toString());
//     const parsedFile = JSON.parse(file);
// });
// Post to endpoint (html page doesn't exist)
app.post("/create-post", function(req, res){
    // Works if sending JSON files
    const blogPost = req.fields;
    // // Converts JSON to string
    // fs.writeFile('data/posts.json', JSON.stringify(blogPost), function (error) {
    // });
    console.log(req.fields);
});
    //.fields extracts the form data you're receiving
    

// Listen for requests on port 3000
app.listen(3000, function(){
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
