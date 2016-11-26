
FlowRouter.route('/', {
    name: 'Main.show',
    action: function(params, queryParams) {
        console.log("This will be the main phase is");
        BlazeLayout.render('App_body', {main: 'main'});
    }
});

FlowRouter.route('/verify', {
    name: 'Verify.show',
    action: function(params, queryParams) {
        console.log("This will be the evidence verification phase");
        BlazeLayout.render('App_body', {main: 'verify'});
    }
});
