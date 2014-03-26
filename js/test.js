//creates a variable and assigns a function to it
var shipping = (function() {
	
	
//sets private as functions and creates functions to be called anytime
    var _private = {
         i:1,
        get : function() {
            console.log( "current value in shipping module:" + this.i);
        },
        send : function( val ) {
            this.i = val;
        },
       
        one : function() {
            console.log( "Overnight shipping" );
        },
        two: function(){
            console.log( "Standard shipping" );
        },
        three: function(){
            console.log("International shipping");
        }
    };

    return {

    
//creates and initiates facade as a function to get the values from shipping module
        facade : function( ship ) {
            _private.send(ship.val);
            _private.get();
            if ( ship.one ) {
                _private.one();
            }
        }
          
    };
}());


 
// Outputs the current value and the run function
console.log(shipping.facade( {one: true, val:1} )  );
