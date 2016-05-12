"use strict";
const expect = require('chai').expect;

describe('fat arrow', () => {
  it('allows functions to be written more succinctly', () => {
    const myFunction = function() {};
    expect(myFunction.toString()).toEqual('() => {}');
  });

  it('omits parenthesis when we have a single argument', () => {
    const myFunction = function(firstArg){}
    expect(myFunction.toString()).toEqual('firstArg => {}');
  });
  
  it('omits curly braces and return when we have a single return value', () => {
    const sayHi = function(){ return 'hi!' }
    expect(myFunction.toString()).toEqual("() => 'hi!'");
  });

  it('supports multiple statements', () => { 
    /**
     * Check if something is edible based on a restriction
     * 
     * @param  {RegExp} restriction E.g. "/^a/" fruits that start with "a"
     */
    function edible(restriction){
      return function fruitFilter(fruit){
        return restriction.test(fruit);
      }
    }
    const fruits = ['apple','orange','apricot'];
    const edibleFruits = edible(/orange/);
    expect(fruits.filter(edible)).to.eql([ "apple", "apricot" ]);)
  })

});
