const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    const data = req.param('name');
    res.json({message : "Hello" + ' ' + data});
})


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

