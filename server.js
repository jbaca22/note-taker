//allows us to use express
const express = require("express");
const app = express();
//establishes port 3100 to be used by application
const PORT = process.env.PORT || 3001;
const htmlRoute = require('../note-taker/routes/htmlRoutes/htmlRoute')
//uses express to call the routes from the pages in the route folder
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoute);


//begins the application and sends it to the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  
