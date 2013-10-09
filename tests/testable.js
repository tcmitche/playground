var assert = require('assert'),
    square = require('../src/testable/square.js');

describe('square', function() {
    it('should return the square of a number', function() {
        assert.equal(square(2), 4);
        assert.equal(square(3), 9);
        assert.equal(square(12), 144);
    });
});