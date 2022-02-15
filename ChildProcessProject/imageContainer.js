process.on('message',(message)=>{
    if(message === 'start'){
        let imageData=[
            {id:1, imageUrl:"https://i.imgur.com/xDfTbRB.jpg"}
        ]
    process.send(imageData)
    }
    
})