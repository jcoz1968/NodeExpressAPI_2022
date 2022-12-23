const routes = (app) => {
    app.route('/contact')
      .get((req, res) => 
        res.send('Get request successful')
    )
      .post((req, res) =>
        res.send('POST Successful!')
    )


    app.route('/contact:contactId')
      .post((req, res) =>
        res.send('PUT Successful!')
    )
    .delete((req, res) =>
        res.send('DELETE Successful!')
    )    
};
