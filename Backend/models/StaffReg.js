const mongoose =require('mongoose')
const StaffSchema=new mongoose.Schema({

    gymName:{
        type:String,
        required:true
    },
    
    ownerName:{
        type:String,
        require:true,
    },

    StaffName:{
        type:String,
        require:true,
    },
    fitnessPlace:{
        type:String,
        require:true,
    },

    phoneNumber:{
        type:Number,
        require:true

    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    





})

('Staff',StaffSchema)