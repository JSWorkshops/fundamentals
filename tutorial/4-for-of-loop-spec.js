"use strict";
const expect = require('chai').expect;

describe('for-of loop', function() {
  it("can replace traditional for loops", function(){
    const fruits = [
      "Red Apples",
      "Blood Oranges",
      "Cherries",
    ];
    for (var i = 0; i < fruits.length; i++) {
      expect(typeof fruit).to.equal("string");
      expect(fruit).to.equal("Red Apples");
      break;
    }
  });
});
