const order=require("../model/user");
const mongoose=require("mongoose");
const request=require("request");
mongoose.connect("mongodb://localhost:27017/orders");

//Placing a order
const create=async function(req,res){
  console.log(req.body);
  var{name,product,quantity,price}=req.body;
  try{
    const response=await order.create({
      name,
      product,
      quantity,
    })
    res.send("Order placed Successfully");
    }catch(error){
      console.log(error)
      return res.json({status:"error"});
    }

}

//read order
const read=async function(req,res){
  try{
    const response=await order.find({});
    res.json(response);
  }catch(err){
    res.json({status:err});
  }
}

//read order by order_id
const specificread=async function(req,res){

  const id=req.params.user_id;
  try{
    const response=await order.findById(id)
    if(!response)
    {
      return res.status(404).send({
        message:"order not Found"
      });
    }
    res.json(response);
  }catch(error){
    res.send({message:error});
  }

}

//cancel order
const remove=async function(req,res){
  let orderid=req.params.order_id;
  try{
    const response= await order.deleteOne({_id:orderid});
    res.send("Order Deleted");
  }
  catch(error){
    console.log(error);
  }
}

//user update
const update=async function(req,res){
  const orderid=req.params.order_id;
  try{
    const response=await order.updateOne({_id:orderid},
      {$set:{name:req.body.name}},
      {$set:{quantity:req.body.quantity}}
    );
    res.status(200).send({
      message:"order updated successfully",
      data:response
    });
  }
  catch(err)
  {
    res.json(err);
  }
}


module.exports={create,read,specificread,remove,update};
