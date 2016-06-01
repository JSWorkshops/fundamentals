"use strict";
const { expect } = require('chai');

function fruitMaker(name, bites = 6) {
  return {
    getBytesLeft: function() {
      return bites;
    },
    getName: function() {
      return name;
    },
    setName: function(value) {
      if (typeof value !== "string") {
        throw new TypeError("Expected string");
      }
      name = value;
      return value;
    },
    eat: function() {
      if (bites) {
        bites--;
        return `Noms! That's some tasty ${name}`;
      }
      throw new Error("😭 No bites left");
    },
  };
}

describe("Object", () => {
  it("allows for getter/setter declarations", () => {
    const apple = fruitMaker("apple", 2);
    expect(apple.name).to.equal("apple");
    expect(apple.bytesLeft).to.equal(2);
    expect(apple.eat()).to.equal("Noms! That's some tasty apple");
    expect(apple.bytesLeft).to.equal(1);
    expect(() => {
      apple.name = 123;
    }).to.throw();
    apple.eat();
    expect(() => {
      apple.eat(); // We should have no bites left
    }).to.throw();
  });
});
