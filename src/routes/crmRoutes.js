import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
      .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request from: ${req.method}`);
        next();
      }, getContacts)

      .post(addNewContact);


    app.route('/contact/:contactId')
      //Get Single
      .get(getContactWithId)

      .put(updateContact)
      .delete(deleteContact)    
};

export default routes;