const express = require('express'); 
const app = express(); 
const {fork}=require("child_process")
const cors = require('cors');
app.use(cors());


app.get("/",(req,res)=>{
    const child = fork("./imageContainer.js")
    child.send('start')
    child.on('message',(imageData)=>{
        res.send(imageData)
    })
})
app.listen(8888, () => console.log(`Listening on port 8888..`));