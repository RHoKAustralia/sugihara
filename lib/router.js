FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'main'});
    }
});

FlowRouter.route('/verify', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'verify'});
    }
});
