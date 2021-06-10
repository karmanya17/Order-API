const express=require("express");
const router=express.Router();
const user=require("../model/user");
const createcontroller=require("../handler/order");


router.post("/placeorder",createcontroller.create);
router.get("/readorder",createcontroller.read);
router.get("/readorder/:order_id",createcontroller.specificread);
router.delete("/removeorder/:order_id",createcontroller.remove);
router.patch("/updateorder/:order_id",createcontroller.update);
module.exports=router;
