const express=require('express')
const topwo=require('../models/topmodel')
const mongoose=require('mongoose')
const router=express.Router()
router.get('/',async(req,res)=>{
    const wof=await topwo.find({}).sort({createdAt:-1})
    res.status(200).json(wof)
})
router.get('/:id',async (req,res)=>{
    const {id}=req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({Err:"err"})
   }
    const work=await topwo.findById(id)
    if(!work)
    {
        return res.status(404),json({error:"errdf"})
    }
    res.status(200).json(work)
} )
router.post('/',async (req,res)=>{
    const {firstName,lastName,email,dob,branch,city,  fatherName,motherName,fatherMobileNumber,motherMobileNumber,fatherEmail,motherEmail,hobbies,interestedGames}=req.body
    try{
        const wot=await topwo.create({firstName,lastName,email,dob,branch,city,  fatherName,motherName,fatherMobileNumber,motherMobileNumber,fatherEmail,motherEmail,hobbies,interestedGames})
        res.status(200).json(wot)
    }
    catch(err){
        res.status(400).json(
            {
                err:err.message
            }
        )
    }
})
router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({err:"Err"})
    }
    const work=await topwo.findByIdAndDelete(id)
    if(!work)
    {
        return res.status(404).json({err:"err"})
    }
    res.status(200).json(work)
})
router.patch('/:id',async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({err:"Err"})
    }
    const work=await topwo.findOneAndUpdate({_id:id},{
        ...req.body
    })
    res.status(200).json(work)
})
module.exports=router