
Tinytest.add('SVGO exists', function (test) {
  test.equal(typeof SVGO, "function");
});

Tinytest.add('SVGO instantiates', function (test) {
  test.equal(typeof (new SVGO()), "object");
});

Tinytest.add('SVGO.optimizeSync exists', function (test) {
  test.equal(typeof (new SVGO()).optimizeSync, "function");
});

Tinytest.add('SVGO.optimizeSync runs', function (test) {
  test.equal((new SVGO()).optimizeSync('<svg version="1.1" width="10" height="20">test</svg>'), '<svg width="10" height="20">test</svg>');
});

//TODO: Could probably use some more detailed tests against actual docs and for each plugin.
