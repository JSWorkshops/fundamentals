"use strict";
const expect = require('chai').expect;
const data = [
  { name: "Capital", link: "/capital" },
  { name: "Culture", link: "/culture" },
];

describe("template strings", () => {
  it("simplifies concatination of strings", function() {
    function processData(data) {
      var ul = "<ul>";
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var li = '<li><a href="' + item.link;
        li += '">' + item.name;
        li += '</a><li>\n';
        ul += li;
      }
      ul += "</ul>";
      return ul;
    }
    const result = processData(data);
    expect(result).to.equal(
      `<ul>\n  <li><a href="/capital">Capital</a></li>\n  <li><a href="/culture">Culture</a></li>\n</ul>`
    );
  });
});
