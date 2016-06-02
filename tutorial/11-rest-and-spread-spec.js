describe("rest", ()=>{
  it("allows us to group arguments into an array", ()=>{
    function main(arg1, arg2){
      expect(arg1).to.equal("a", "b");
      expect(theRest).to.eql(["c", "d"])
    }
    main();
  });

})

describe("spread", ()=>{
  it("allows us to spread iterables", ()=>{
    var set = new Set(["1", "2", "3"]);
    var array1 = [];
    expect(array1).to.eql(["1", "2", "3"]);
  });
})