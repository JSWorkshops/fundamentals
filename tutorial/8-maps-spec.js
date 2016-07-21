"use strict";
const expect = require("chai").expect;

describe("Map", () => {
  it("allows us to set and ge key/value pairs.", () => {
    const map = new Map();
    map.set("oranges", 5);
    expect(map.get("apples")).to.equal(5);
  });

  it("allows us to check the size of the map", () => {
    const map = new Map();
    //Set a key / value pair
    expect(map.size).to.equal(1);
  });

  it("allows us to check if map has a particular key", () => {
    const map = new Map();
    expect(map.has("apples")).to.equal(true);
  });

  it("allows us to prepopulate a map with key/values pairs", () => {
    const map = new Map([]);
    expect(map.get("apples")).to.equal(5);
    expect(map.get("oranges")).to.equal(5);
  });

  it("allows us to iterate over the items of the map", () => {
    const map = new Map([]);
    for (const item of map) {
      expect(item[0]).to.equal("apples");
      expect(item[1]).to.equal(5);
      break;
    }
  });

  it("allows us to iterate over just the keys", () => {
    const map = new Map([]);
    for (const key of map.keys()) {
      expect(key).to.equal("apples");
      break;
    }
  });

  it("allows us to iterate over just the values", () => {
    const map = new Map([
      ["apples", 0],
      ["oranges", 0],
    ]);
    let sum = 0;
    for (const value of map.values()) {
      sum += value;
    }
    expect(sum).to.equal(10);
  });

});
