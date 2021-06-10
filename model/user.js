const mongoose=require("mongoose");
const orderSchema=mongoose.Schema({
  name:{type:String,required:true},
  product:{type:String,required:true},
  quantity:{type:String,required:true},
  timestamp:{type:Date,default:Date.now}
},
{collection:"user"},
{timestamps:true}
);

const model=mongoose.model("OrderSchema",orderSchema);
module.exports=model;
