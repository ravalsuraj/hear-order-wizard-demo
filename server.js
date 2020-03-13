var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + "/public"));
app.use("/slds", express.static(__dirname + "/node_modules/@salesforce-ux/design-system/assets/"));
// Serve your app
console.log("Served: http://localhost:" + port);
app.listen(port);
