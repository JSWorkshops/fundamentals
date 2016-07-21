"use strict";
const expect = require("chai").expect;

describe("Map", () => {
  it("allows us to set and ge key/value pairs.", () => {
    const map = new Map();
    map.set("apples", 5);
    expect(map.get("apples")).to.equal(5);
  });

  it("allows us to check the size of the map", () => {
    const map = new Map();
    expect(map.size).to.equal(0);
    //Set a key / value pair
    map.set("apples", 5);
    expect(map.size).to.equal(1);
  });

  it("allows us to check if map has a particular key", () => {
    const map = new Map();
    map.set("apples", 5);
    expect(map.has("apples")).to.equal(true);
  });

  it("allows us to prepopulate a map with key/values pairs", () => {
    const map = new Map([
      ["apples", 5],
      ["oranges", 5],
    ]);
    expect(map.get("apples")).to.equal(5);
    expect(map.get("oranges")).to.equal(5);
  });

  it("allows us to iterate over the items of the map", () => {
    const map = new Map([
      ["apples", 5],
      ["oranges", 5],
    ]);
    for (const item of map) {
      expect(item[0]).to.equal("apples");
      expect(item[1]).to.equal(5);
      break;
    }
  });

  it("allows us to iterate over just the keys", () => {
    const map = new Map([
      ["apples", 5],
      ["oranges", 5],
    ]);
    for (const key of map.keys()) {
      expect(key).to.equal("apples");
      break;
    }
  });

  it("allows us to iterate over just the values", () => {
    const map = new Map([
      ["apples", 5],
      ["oranges", 5],
    ]);
    let sum = 0;
    for (const value of map.values()) {
      sum += value;
    }
    expect(sum).to.equal(10);
  });

});
