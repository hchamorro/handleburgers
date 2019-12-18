const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 8080;

//static connect
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//connect routes
app.use(routes);

// Start server
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
