"use strict";
const expect = require('chai').expect;

// Let's make favoriteColor a const
describe('const', function() {

  var favoriteColor = "red";

  it('throws if you try to change its value', function() {
    expect(function() {
      favoriteColor = "blue";
    }).to.throw();
  });

  it('should not change value', function() {
    expect(favoriteColor).to.equal("red");
  });

  it('can be redefined in a function scope', function() {
    // favoriteColor = "orange"
    expect(favoriteColor).to.equal("orange");
  });

  it('doesnt get changed by other scopes', function() {
    expect(favoriteColor).to.equal("red");
  });

});


















// describe('const', function() {
//   const favoriteColor = "red";

//   it('throws if you try to change its value', function() {
//     expect(function() {
//       favoriteColor = "blue";
//     }).to.throw();
//   });

//   it('should not change value', function() {
//     expect(favoriteColor).to.equal("red");
//   });

//   it('can be redefined in a function scope', function() {
//     const favoriteColor = "orange";
//     expect(favoriteColor).to.equal("orange");
//   });

//   it('doesnt get changed by other scopes', function() {
//     expect(favoriteColor).to.equal("red");
//   });

// });
