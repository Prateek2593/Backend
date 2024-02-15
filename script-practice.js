const express = require('express')
const app = express()

/*Middleware ek aisa function hai jo har route se pehle chalta hai, iska matlab saare routes mein koi bhi chale usse pehle middleware chlta hai and usme likha code pehle execute hota hai
--> Node ke saath ek problem hai ki agar control ek barr kisi middleware pr gaya to control khud se agle route/middleware pr nahi jaega, usse agle par bhejne ke liye apko ek push karna pdega or yeh push kehlaega 'next' ko chlana

app.use(function(req, res, next){
  console.log('Middleware working');
  next();
});
--> req contains user data from where the request is coming whereas res contains controls on the basis of which we send responses from server*/

// Configuring ejs
app.set("view engine",'ejs');

// Configuring the express static
app.use(express.static('./public'));

/*Routes
/*app.get('/', function (req, res) {
  res.send('Hello World')
})
// Routes
app.get('/profile', function (req, res) {
  res.send('Hello from Profile')
})*/


/*Template engine => yeh ek style of markup se convert krke aapko html dete hai. types-> ejs,pug,handlebars,jade
-> ejs very very similar to html
-> ejs allow us to render content dynamically on the web
*/
app.get('/', function (req, res) {
  res.render("index", {age:20});
})

/*
Static files => images, stylesheets(css), frontend js setup krna
*/

//Error Handling
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)

/*Route Parameters
-> In a route if some part is remaining same and some part is changing for every other route, to deal with this we make Dynamic Route
-> To define a dynamic route we add ':' and variable/params name, here username is params
-> When we enter a url like 'localhost:3000/profile/prateek', it is send as a request, so to access it we write 'req.params.username', this will open web page displaying 'Hello from prateek' 

app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`);
})
*/


 