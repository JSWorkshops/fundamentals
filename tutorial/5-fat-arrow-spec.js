"use strict";
const expect = require('chai').expect;

describe('fat arrow', () => {
  it('allows functions to be written more succinctly', () => {
    const myFunction = function() {};
    expect(myFunction.toString()).to.equal('() => {}');
  });

  it('omits parenthesis when we have a single argument', () => {
    const myFunction = function(firstArg) {};
    expect(myFunction.toString()).to.equal('firstArg => {}');
  });

  it('omits curly braces and return when we have a single return value', () => {
    const sayHi = function() {
      return 'hi!';
    };
    expect(sayHi.toString()).to.equal("() => 'hi!'");
  });

  it('supports multiple statements', () => {
    /**
     * Check if something is edible based on a restriction
     *
     * @param  {RegExp} restriction E.g. "/^a/" fruits that start with "a"
     */
    function edible(restriction) {
      return function fruitFilter(fruit) {
        return restriction.test(fruit);
      };
    }
    const fruits = ['apple', 'orange', 'apricot'];
    const edibleFruitFilter = edible(/orange/);
    const edibleFruit = fruits.filter(edibleFruitFilter);
    expect(edibleFruit).to.eql(["apple", "apricot"]);
  });

  it('encourages creating small utility functions', () => {
    const data = [
      { name: "Capital", link: "/capital" },
      { name: "Autos", link: "/autos" },
      { link: "" },
      { name: "Future", link: "/future" },
      { name: "TV", link: "/tv" },
      { name: "Åutos", link: "/autos" },
      { name: "Culture", link: "/culture" },
      { name: "/link-to-nowhere", link: "" },
    ];
    const sortedData = data;
    //.filter() out things with no name or link
    //.sort() using .localeCompare
    expect(sortedData.length).to.be(6);
    expect(sortedData[0].name).to.be("Autos");
    expect(sortedData[1].name).to.be("Åutos");
    expect(sortedData[5].name).to.be("TV");
  });

});
