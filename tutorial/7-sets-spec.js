"use strict";
const expect = require('chai').expect;

describe("Set", () => {
  it("stores values uniquely", () => {
    //convert to a new Sets
    const fruits = ["🍏", "🍊", "🍌", "🍓"];
    const deserts = ["🍰", "🍪", "🍧"];
    //expect(fruits.has("🍌")).to.equal(false);
    //expect(fruits.has("🍒")).to.equal(true);
    //expect(fruits.size).to.equal(4);
    fruits.delete("🍌");

    // Use Array.from() to combine fruits and deserts
    // into an array
    const food = [];

    //empty the set
    expect(fruits.size).to.equal(0);
  });
});

