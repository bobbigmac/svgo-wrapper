SVGO = Npm.require('svgo');
Future = Npm.require('fibers/future');

//SVGO.optimize has wrong callback sig for wrapAsync (needs (err, res), has res.error/res.data)
//SVGO.prototype.optimizeSync = Meteor.wrapAsync(SVGO.prototype.optimize);

SVGO.prototype.optimizeSync = function(svgString) {
	var future = new Future();

	try {
		this.optimize(svgString, function(result) {
			if(!future.isResolved || (future.isResolved && !future.isResolved())) {
				if(result.error) {
					future.return(svgString);
				} else {
					//success
					future.return(result.data);
				}
			}
		});
		
		return future.wait();
	} catch(exc) {
		//probably warped/broken xml
		console.warn('Exception while optimising svg, returning original svgString', exc.message);
		return svgString;
	}
};