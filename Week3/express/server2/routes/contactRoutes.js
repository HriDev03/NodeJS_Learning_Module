const express=require("express");

//fetching all the controllers
const {getContacts,restoreContact,createContact,getContact,updateContact,deleteContact}=require("../controllers/contactControllers");

//express router object
const router=express.Router();

const validateToken=require("../middlewares/validateTokenHandler");

// validate token will be used for all the routes
//since validate token hrr jaha use hoga soo we can simple use it as a midleware

//default route will get all contacts
router.get("/",validateToken,getContacts);

//creating a contact
router.post("/",validateToken,createContact);

//getting a contact
router.get("/:id",validateToken,getContact);


//updating a contact
router.put("/:id",validateToken,updateContact);

//deleting a contact
router.delete("/:id",validateToken,deleteContact)

// Soft deleting a contact
router.delete("/:id",validateToken, deleteContact);

// Restoring a soft delete contact
router.patch("/:id/restore",validateToken,restoreContact);

module.exports=router