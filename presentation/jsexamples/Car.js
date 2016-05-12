
function Car(name = "no name"){
  this.name = name;
  this.drive = (distance = 100) => {
    return new Promise((resolve, reject) => {
      var interval = setInterval( () => {
        if(--distance === 0){
            resolve(`${this.name} done!`);
            clearInterval(interval);
        }
      }, Math.random() * 100);
    });
  };
}

var car1 = new Car("one"),
    car2 = new Car("two"),
    car3 = new Car("three"),
    carRace = [car1.drive(), car2.drive(), car3.drive()];

Promise.race(carRace).then(e => console.log(e));
Promise.all(carRace).then(e => console.log(e));
