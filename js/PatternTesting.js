function Strawberries(FrozenYogurt){
    this.cost = function(){
        return FrozenYogurt.cost() + 0.5;
    };
}
	test('decorator test()', function(cherries,strawberries){
	ok(FrozenYogurt.cost(0.5,0.5), "the cost should be $4" );
	ok(FrozenYogurt.cost(3), "the cost should be $3" );
});

 test('facade()', function(){
 	
 	var morningFacade = tv.on(); 
 	equal(morningFacade, tv.on(), "TV is on");
 	
 	var morningFacade = coffeeMachine.on(); 
 	equal(morningFacade, coffeeMachine.on(), "coffeeMachine is on");
 	
 });
 
 test('Prototype', function(){
 	expect(5);
 	var make = 'Toyota';
    var model = 'Rav4';
    var level = 'sport';
    var color = 'black';
    var warranty = 5,
     c= new Car(make, model, level, color, warranty);
    equal(c.make, make, 'Make');
    equal(c.model,model, 'Model');
    equal(c.level,level, 'level');
    equal(c.color,color,'color');
    equal(c.warranty,warranty, 'warranty');
    
 });