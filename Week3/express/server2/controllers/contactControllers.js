//whenever we interact with db we get a promise to handle it we make an async function
const asyncHandler = require("express-async-handler");


//fetching model to do crud operations
const Contact=require("../models/contactModel");


// Get all contacts
// route Get /api/contacts
// @access public
const getContacts= async (req,res,next)=>{
    try{
        const contacts=await Contact.find();
        res.status(200).json(contacts);
    }catch(err){
        next(err);
    }
};


// Create new contacts
// route post/api/contacts
// @access public
const createContact= async (req,res)=>{
    try{
        //201 : new resource created
        console.log("the request body is ",req.body);
        const {name,email,phone}=req.body;
    
        if(!name||!email||!phone){
            res.status(400);
            throw new Error("All fields are mandatory!");
        }

        const contact=await Contact.create({name,email,phone,});

        res.status(200).json(contact)
    }
    catch (err) {
        next(err);
    }
};


//  Get contact
// route get/api/contacts/:id
// @access public
const getContact= async (req,res)=>{
    try{
        const contact=await Contact.findById(req.params.id)
        if(!contact){
            res.status(404);
            throw new Eroor("Contact not found")
        }
        res.status(200).json(contact);
    }
    catch(err){
        next(err);
    }
};


// updating contacts
// route put/api/contacts/:id
// @access public
const updateContact= async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    // first finding if it exists then updating it , a good approach for error handling
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact)
};



// @desc Delete new contacts
// route delete/api/contacts/:id
// @access public


// we can also use a async error handler module named as asyncHandler 
// when ever an exception is occured itll pass it to the error handler
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Deleted contact ${req.params.id}` });
});

module.exports={getContacts,createContact,getContact,updateContact,deleteContact}


// authentication : We will provide some endpoints that helps user to login and register 
// and once they login they will get a login token using hich they can manage their contacts