 const express = require('express');
 const bodyParser = require('body-parser');
 const {PORT}=require('./Config')




 const app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT,()=>{
  console.log(`server is running in ${PORT}`);
  
})
