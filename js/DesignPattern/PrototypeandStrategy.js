// Prototype patterns and  Strategy patterns
var Greeter = function(strategy) {
  this.strategy = strategy;  
};

// Greeter provides a greet function that is going to
// greet people using the Strategy passed to the constructor.
Greeter.prototype.greet = function() {
  return this.strategy();
};

// Since a function encapsulates an algorithm, it makes a perfect
// candidate for a Strategy.
// Here are a couple of Strategies to use with our Greeter.
var Strategy1 = function() {
 return("Hello ownwer of:"); 
};
 
var Strategy2 = function() {
  return("Hey owner of:");
};
 
var Strategy3 = function() {
  return("What's up ownwer of:");
};

//Car function 
function Car(make, model, level, color, warranty) {
    this.make     = make;
    this.model    = model;
    this.level    = level;
    this.color    = color;
    this.warranty = warranty;
}
 // using prototype patterns
Car.prototype = {
    getInfo: function () {
      return "Make: " + this.make + '\n ' +"Model:" + this.model + '\n ' +"Level:" +this.level + '\n '+"Color:"+ this.color + '\n ' +"Warranty:"+ this.warranty;
    }
};

// Let's use these strategies!
var politeGreeter   = new Greeter(Strategy1);
var friendlyGreeter = new Greeter(Strategy2);
var boredGreeter    = new Greeter(Strategy3); 
//  outputing  the results 
var aCar = new Car('Acura', 'TL', 'Sport', 'blue', 5);
console.log(politeGreeter.greet()+ '\n'+ aCar.getInfo());  
var aCar = new Car('BMW', 'X5', 'Sport', 'black', 4);
console.log(friendlyGreeter.greet()+ '\n'+aCar.getInfo());  
var aCar = new Car('Audi', 'A6', 'Coupe', 'White', 6);
console.log(boredGreeter.greet()+'\n'+aCar.getInfo()); 