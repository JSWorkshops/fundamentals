"use strict";
const expect = require('chai').expect;

// Let's make favoriteColor a const
describe('let', function() {

  var object = {
    greeting: "hello!"
  }

  for(var prop in object){
    var item = object[prop];
  }

  it("shouldn't leak out of context", function(){
    expect(item).to.be.undefined;
    expect(item).to.not.equal("hello!");    
    expect(prop).to.be.undefined;
    expect(prop).to.not.equal("greeting");
  });

  it("should be possible to reassign a let, in different scope", function(){
    const iCanChange = "can I? can I really?";
    expect(function(){
      iCanChange = "yes! I can!";
    }).to.not.throw();

    expect(iCanChange).to.equal("yes! I can!");
  })

});

