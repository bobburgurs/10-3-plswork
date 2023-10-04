const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/src/pages/index.html");
});

app.post("/switch", function(req, res) {
  res.redirect('/switched'); // Assuming you have a page named "switched"
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
