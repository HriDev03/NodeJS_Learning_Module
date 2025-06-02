//whenever we interact with db we get a promise to handle it we make an async function
const asyncHandler = require("express-async-handler");

// we need to make the public routes as private routes so only authentic users can access it 
/*
    PROTECT ALL THE CONTACT ROUTES SO ONLY A VALID USER CAN CREATE,
    DELETE,UPDATE AND READ THE CONTACTS THAT THEY HAVE CREATED FOR THEMSELVES

    WE NEED TO ASSOCIATE THAT CONTACT WITH THE USER ID THATS CREATING IT
*/
//fetching model to do crud operations
const Contact=require("../models/contactModel");

//make USER OF THE USER ID AND THEN DO CRUD OPERATIONS

// Get all contacts
// route Get /api/contacts
// @access private
const getContacts= async (req,res,next)=>{
    try{
        const contacts=await Contact.find({user_id:req.user.id});
        res.status(200).json(contacts);
    }catch(err){
        next(err);
    }
};


// Create new contacts
// route post/api/contacts
// @access private
const createContact= async (req,res)=>{
    try{
        //201 : new resource created
        console.log("the request body is ",req.body);
        const {name,email,phone}=req.body;
    
        if(!name||!email||!phone){
            res.status(400);
            throw new Error("All fields are mandatory!");
        }

        const contact=await Contact.create({
            name,
            email,
            phone,
            user_id:req.user.id
        });

        res.status(200).json(contact)
    }
    catch (err) {
        next(err);
    }
};


//  Get contact
// route get/api/contacts/:id
// @access private
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
// @access private
const updateContact= async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    // first finding if it exists then updating it , a good approach for error handling
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    // check ki same user hoo update krr raha hai yaa fir another user is trying to access
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        console.log("User Dosen't have permission to update contacts of other users ");
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
// @access private


// we can also use a async error handler module named as asyncHandler 
// when ever an exception is occured itll pass it to the error handler
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    
    // check ki same user hoo delete krr raha hai yaa fir another user is trying to access
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        console.log("User Dosen't have permission to delete contacts of other users ");
    }


    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Deleted contact ${req.params.id}` });
});

module.exports={getContacts,createContact,getContact,updateContact,deleteContact}


