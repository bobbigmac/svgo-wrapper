# svgo-wrapper

Unofficial package for [Meteor](https://www.meteor.com) to wrap [svgo: nodejs-based tool for optimizing SVG vector graphics files](https://github.com/svg/svgo).

## Usage

Meteor-friendly (synchronous)

```javascript
var svgo = new SVGO(); // uses defaults
var optimized = svgo.optimizeSync(svgString); // \o/
```

or original API (asynchronous)

```javascript
var svgo = new SVGO({
  plugins: [{
    removeDoctype: false
  }, {
    cleanupNumericValues: {
      floatPrecision: 2
    }
  }]
  // ...
});

svgo.optimize(svgString, function(result) {
	if(result.error) {
		console.error(result.error);
	} else {
		console.log('optimized', result.data);
	}
});
```

## Notes

Documentation isn't very clear on SVGO, figured out options from [ben-eb:gulp-svgmin](https://github.com/ben-eb/gulp-svgmin#plugins) and call model from [remy:inliner](https://github.com/remy/inliner/blob/feature/compress-svg/lib/tasks/svg.js).

See [svgo plugins](https://github.com/svg/svgo/tree/master/plugins) for full list of options. Not sure how to get detailed options for each other than reading the source.