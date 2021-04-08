const express = require('express');
const parser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(parser({limit: '50mb'}));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Get Request")
  res.end();
})

app.post("/speed",(req, res) => {
  console.log('hello world'); 

  res.send({resp: "it worked"});
  
  }
)

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}!`);
});