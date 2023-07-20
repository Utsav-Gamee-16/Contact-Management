const asyncHandler = require("express-async-handler")
const Contact = require('../models/contactModel')


const getContact = asyncHandler(async(req,res)=>{
    // console.log(req.user.id)
    const contacts = await Contact.find({})
    res.status(200).json({contacts})
})

const getContactById = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found.")
    }
    res.status(200).json({contact })
})

const createContact = asyncHandler(async(req,res)=>{
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory.")
    }
    const contacts = await Contact.create({
        name,
        email,
        phone
    })
    res.status(200).json({contacts})
})

const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found.")
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({updateContact})
})

const deleteContact = asyncHandler(async(req,res)=>{
    // const contact = await Contact.findById(req.params.id)
    // console.log(req.params.id);
    const contact = await Contact.findByIdAndRemove(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found.")
    }
    // Contact.deleteOne(req.params.id)
    res.status(200).json('Contact deleted.')
})
module.exports = {getContact,getContactById,createContact,updateContact,deleteContact}
