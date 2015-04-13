Router.configure({
  layoutTemplate: 'applayout' 
});

Router.route('/', function() {
  this.render('Home', {
    data: function() { return true; }
  });
});
