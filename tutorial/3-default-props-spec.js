"use strict";
const expect = require('chai').expect;

describe('default value', function() {

  /**
   * Returns the value in upper case, followed by the value in lowercase. 
   * 
   * @param  {String?} value The value to echo
   * @return {String} defaults to "echo"       
   */
  function echo(value){
    return (value.toUpperCase() + " " + value.toLowerCase()).trim();
  }

  it('sets the value to a default when called with nothing', function() {
    expect(function(){
      const test = echo();
    }).to.not.throw();
    expect(echo()).to.equal("ECHO echo");
  });

  it('overrides the default when called with a value', function() {
    expect(echo(/*some value here*/)).to.equal("WOOT woot");
  });

  // =============================================================

  function ElectricCar(make, model){
    this.make = make;
    this.model = model;
  }

  it('allows us to create objects with default values', function(){
    const car = new ElectricCar();
    expect(car.make).to.equal("tesla");
    expect(car.model).to.equal("model 3");
  });

  it('allows us to override default values', function(){
    const car = new ElectricCar();
    expect(car.make).to.equal("tesla");
    expect(car.model).to.equal("model s");
  });

});
