//Class to be decorated so it passes down the value
function FrozenYogurt(){
    this.cost = function(){
        return 3;
    };
    
}

//sets the decorator
function cherries(FrozenYogurt){
    this.cost = function(){
        return FrozenYogurt.cost() + 0.50;
    };
}

//sets another decorator
function Strawberries(FrozenYogurt){
    this.cost = function(){
        return FrozenYogurt.cost() + 0.5;
    };
}

//sets yet another decorator
function Sprinkles(FrozenYogurt){
    this.cost = function(){
        return FrozenYogurt.cost() + 0.2;
    };
}
//final decorator
function GummyBears (FrozenYogurt){
    this.cost = function(){
        return FrozenYogurt.cost() + 0.5;
    };
}


//implementation of the design with factory patterns

var FrozenYogurt = new FrozenYogurt(FrozenYogurt);
FrozenYogurt = new Sprinkles(FrozenYogurt);
FrozenYogurt = new cherries(FrozenYogurt);
FrozenYogurt = new Strawberries(FrozenYogurt);
FrozenYogurt = new GummyBears(FrozenYogurt);
console.log("The cost of Frozen Yogurt $ "   + FrozenYogurt.cost());  
