// import mongoose from "mongoose";
// import { ContactSchema } from "../models/crmModel";

// // this holds the model
// const Contact = mongoose.model('Contact', ContactSchema);

// // Contact controller which is POST
// export const addNewContact = (req, res) => {
//     let newContact = new Contact(req.body);

//     newContact.save((err, contact) => {
//         if(err)
//         {
//             res.send(err);
//         }
//         // otherwise, give us response with json contact
//         // (info that the contact that was saved in the db if successful)
//         res.json(contact);
//     });
// };

import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

// This holds the model
const Contact = mongoose.model('Contact', ContactSchema);

// Contact controller which is POST
export const addNewContact = async (req, res) => {
    try 
    {
        const newContact = new Contact(req.body);
       
        const savedContact = await newContact.save();
       
        res.json(savedContact);
    } 
    catch (err) 
    {
        res.status(500).send(err);
    }
};

// to fetch all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
};

// to fetch specific contact
export const getContactID = async(req, res) => {
    try
    {
        const contactByID = await Contact.findById(req.params.contactByID)
        res.json(contactByID);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}

// to Update using PUT -
export const updateContact = async(req, res) => {
    try{
        const updatedContact = await Contact.findOneAndUpdate({_id:req.params.contactId}, req.body, {new:true})
        res.json(updateContact);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}