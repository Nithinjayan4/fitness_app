 const express = require('express');
 const bodyParser = require('body-parser');
 const {PORT, mongoURL}=require('./Config')
 const mongoose = require('mongoose');




 const app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect(mongoURL)
.then(()=>{
    console.log("App Connected to mongo")
    app.listen(PORT, ()=>{
        console.log(` server Start in ${PORT}`);
    })

}
    
).catch((error)=>{
    console.log(error)
}
)