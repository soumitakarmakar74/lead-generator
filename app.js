import express from "express";
import bodyParser from "body-Parser";
import cors from "cors";
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((request,response,next)=>{
    const error=new Error("not found");
    error.status=404;
    next(error);
});
module.exports=app;
