
module.exports = function(app) {
	app.use('/', require('./list'));
	app.use('/', require('./detail'));
	app.use(function(req, res, next) {
		var err = new Error('Not Found')
		err.status = 404;
		next(err);
	});	
}; 