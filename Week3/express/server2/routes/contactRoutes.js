const express=require("express");

//fetching all the controllers
const {getContacts , createContact, getContact, updateContact, deleteContact} = require("../controllers/contactControllers");

//express router object
const router=express.Router();

const validateToken=require("../middlewares/validateTokenHandler");

// validate token will be used for all the routes
router.use(validateToken)

//default route will get all contacts
router.get("/",getContacts);

//creating a contact
router.post("/",createContact);

//getting a contact
router.get("/:id",getContact);



//updating a contact
router.put("/:id",updateContact);

//deleting a contact
router.delete("/:id",deleteContact)

module.exports=router