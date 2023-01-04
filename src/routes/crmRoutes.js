import { addNewContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
      .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request from: ${req.method}`);
        next();
      }, (req, res, next) => {
        res.send('GET request successful');
      })

      .post(addNewContact);


    app.route('/contact/:contactId')
      .put((req, res) =>
        res.send('PUT Successful!')
    )
    .delete((req, res) =>
        res.send('DELETE Successful!')
    )    
};

export default routes;