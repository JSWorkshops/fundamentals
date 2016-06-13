"use strict";
const expect = require('chai').expect;

// Let's make favoriteColor a const
describe('let', function() {

  var object = {
    greeting: "hello!"
  };


  it("shouldn't leak out of context", function() {
    for (var prop in object) {
      expect(prop).to.equal("greeting");

      var item = object[prop];
      expect(item).to.equal("hello!");
    }

    expect(function(){
      return (prop);
    }).to.throw(ReferenceError);

    expect(function(){
      return (item);
    }).to.throw(ReferenceError);
  });

  it("should be possible to reassign a let, in different scope", function() {
    const iCanChange = "can I? can I really?";
    expect(function() {
      iCanChange = "yes! I can!";
    }).to.not.throw();

    expect(iCanChange).to.equal("yes! I can!");
  });

});
