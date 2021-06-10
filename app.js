const express= require("express");
const bodyParser=require("body-parser");
const order=require("./routes/route");
const app=express();
app.use(bodyParser.json());

app.use("/api",order);


app.listen("3000",function(req,res){
  console.log("server is up at 3000");
});
