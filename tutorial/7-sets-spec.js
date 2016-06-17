"use strict";
const expect = require('chai').expect;

describe("Set", () => {
  it("stores values uniquely", () => {
    //convert to a new Sets
    const fruits = ["🍏", "🍊", "🍌", "🍓"];
    const deserts = ["🍰", "🍪", "🍧"];
    //expect(fruits.has("🍌")).to.be(false);
    //expect(fruits.has("🍒")).to.be(true);
    //expect(fruits.size).to.be(4);
    fruits.delete("🍌");

    // Use Array.from() to combine fruits and deserts
    // into an array
    const food = [];

    //empty the set
    expect(fruits.size).to.equal(0);
  });
});

