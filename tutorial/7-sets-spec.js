"use strict";
const expect = require('chai').expect;

describe("Set", () => {
  it("stores values uniquely", () => {
    //conver to a new Set
    const fruits = ["🍏", "🍊", "🍌", "🍓"];
    const deserts = ["🍰", "🍪", "🍧"];
    //expect(fruits.has("🍌")).to.be(false); 
    //expect(fruits.has("🍌")).to.be(true);
    //expect(fruits.size).to.be(4);
    fruits.delete("🍌");

    const food = []; // User Array.from() and combine fruits and desets into an array

    //empty the set
    expect(fruits.size).to.be(0);
  });
});

