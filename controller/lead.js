import express, { response } from "express";
const router=express.Router();

router.post("/new",async (req,response,next)=>{
    response.status(200).json({
        message:"Api triggered"
    })
})
module.exports=router;