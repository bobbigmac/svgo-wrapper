SVGO = Npm.require('svgo');
Future = Npm.require('fibers/future');

//SVGO.optimize has wrong callback sig for wrapAsync (needs (err, res), has res.error/res.data)
//SVGO.prototype.optimizeSync = Meteor.wrapAsync(SVGO.prototype.optimize);

SVGO.prototype.optimizeSync = function(svgString) {
	var future = new Future();

	this.optimize(svgString, function(result) {
		if(result.error) {
			future.throw(result.error);
		} else {
			future.return(result.data);
		}
	});

	return future.wait();
};