# svgo wrapper

Unofficial wrapper for [svgo: Nodejs-based tool for optimizing SVG vector graphics files](https://github.com/svg/svgo).

## Usage

```javascript
var svgo = new SVGO({
  plugins: [{
    removeDoctype: false
  }, {
    removeComments: false
  }, {
    cleanupNumericValues: {
      floatPrecision: 2
    }
  }, {
    convertColors: {
      names2hex: false,
      rgb2hex: false
    }
  }]
});

svgo.optimize(svgString, function(result) {
	if(result.error) {
		console.error(result.error);
	} else {
		console.log('optimized', result.data);
	}
});
```

[For options see svgo source](https://github.com/svg/svgo/)

## TODO

Should probably wrap in a sync wrapper since it's server-side.

## Notes

Documentation isn't very clear on SVGO, figured out options from [ben-eb:gulp-svgmin](https://github.com/ben-eb/gulp-svgmin#plugins) and call model from [remy:inliner](https://github.com/remy/inliner/blob/feature/compress-svg/lib/tasks/svg.js).

See [svgo plugins](https://github.com/svg/svgo/tree/master/plugins) for full list of options. Not sure how to get detailed options for each other than reading the source.