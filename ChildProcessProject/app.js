const express = require('express'); 
const app = express(); 
const {fork}=require("child_process")



app.get("/one",(req,res)=>{
    const sum= longCalculation()
  res.send({sum:sum})
  let newPath = path.join(__dirname, '../../../storage/' + attachmentData.location);
                    let file = fs.readFileSync(newPath);
                    res.setHeader('Content-Disposition', 'attachment; filename="' + attachmentData.filename + '"');
                    res.setHeader('Content-Type', attachmentData.mimetype);
                    res.end(file, 'binary');
})
app.get("/two",async(req,res)=>{
    const sum= await longCalculator();
    res.send({sum:sum})
    
})
app.get("/three",(req,res)=>{
    const child = fork("./longCal.js")
    child.send('start')
    child.on('message',(sum)=>{
        res.send({sum:sum})
    })
})
app.listen(8088, () => console.log(`Listening on port 8088..`));

function longCalculation () {
    let sum=0;
    for (let i=0; i<1e9;i++){
        sum+=i;
    }
    return sum
}

function longCalculator () {
    return new Promise((resolve,reject)=>{
        let sum=0;
        for (let i=0; i<1e9;i++){
            sum+=i
        }
        resolve(sum);
    })
}