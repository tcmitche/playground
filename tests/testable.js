var test = require('tape'),
    square = require('../src/testable/square.js');

tape('square test', function(t) {
    t.plan(3);

    t.equal(square(2), 4);
    t.equal(square(3), 9);
    t.equal(square(12), 144);
});