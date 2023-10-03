const express = require('express');

const app = express();
const port = 3000;

app.use(express.static("./public"));
app.get("/", function(req,res){
res.sendFile(_dirname + "/src/pages/index.html");
});

app.post("/", function(req, res) {
  res.redirect('/switch');
});

app.listen(process.env.PORT || 3000, function(){
  console.log(`Server is running at on port ${process.env.PORT}.`);
});
