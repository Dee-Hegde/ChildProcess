const express = require('express'); 
const app = express(); 
const multer=require('multer');
const cors = require('cors');
const axios= require("axios")

const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
});

app.use(cors());

let imageData=[
    {id:1, imageUrl:"https://i.imgur.com/xDfTbRB.jpg"}
]

const upload=multer({storage:fileStorageEngine});

app.post('/single', upload.single('image'), (req,res)=>{
    res.send(imageData);
});

app.post('/multiple', upload.array('images',20), (req,res)=>{
    res.send(imageData)
    
});
app.get("/",(req,res)=>{
    res.send(imageData)
})

app.listen(8080, () => console.log(`Listening on port 8080..`));