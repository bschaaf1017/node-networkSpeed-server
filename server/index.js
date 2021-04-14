const express = require('express');
const parser = require('body-parser');
const path = require('path')

const PORT = 3000;
const app = express();

const dir = path.join(__dirname, '..', 'assets', 'text2.txt') 

app.use(parser({limit: '50mb'}));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Get Request")
  res.end();
})

app.get('/dlSpeed', (req, res) => {
  console.log("DLSPEED")
  res.sendFile(dir)
})

app.post("/speed",(req, res) => {
  console.log('hello world'); 

  res.send({resp: "it worked"});
  
  }
)

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}!`);
});