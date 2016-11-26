
FlowRouter.route('/', {
    name: 'Main.show',
    action: function(params, queryParams) {
        console.log("This will be the main page");
        BlazeLayout.render('App_body', {main: 'main'});
    }
});

FlowRouter.route('/verify', {
    name: 'Verify.show',
    action: function(params, queryParams) {
        console.log("This will be the evidence verification page");
        BlazeLayout.render('App_body', {main: 'verify'});
    }
});

FlowRouter.route('/add', {
    name: 'Add.show',
    action: function(params, queryParams) {
        console.log("This will be the add page");
        BlazeLayout.render('App_body', {main: 'add'});
    }
});
