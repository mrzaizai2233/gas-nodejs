const mongoose = required('mongoose');
const productSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number
},
    price:Number,


})