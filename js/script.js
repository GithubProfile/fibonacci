/* Fibonacci Sequence Generator v1.0
   Author: Denis Petyukov <denis.petyukov@gmail.com>
*/
(function(){
  var FibonacciViewModel = function() {
      var self = this;
      self.numberOfNumbersToOutput = ko.observable('');
      self.fibonacciSequence = ko.computed(function() {
            var fibonacciArray = [];
            for(var i = 0; i <= self.numberOfNumbersToOutput() - 1; i++) {
              if( i === 0 ) {
                fibonacciArray[i] = 0; 
              } else if ( i === 1 ) {
                fibonacciArray[i] = 1;
              } else if ( i > 1 ) {
                fibonacciArray[i] = BigInteger(fibonacciArray[i-1]).add(fibonacciArray[i-2]);
              }
            }
            var fibonacciString = fibonacciArray.join(' ');
            return(fibonacciString);
      });
  }
  ko.applyBindings(new FibonacciViewModel());

  // focus on input
  document.getElementById('number').focus();

  var numberInput = document.getElementById('number');
  eventUtility.addEvent(numberInput, 'keydown', function(evt){
    var code = evt.keyCode;
    // allow only number input
    if ( (code >= 65 && code <= 90) || (code >= 106 && code <= 122) || (code >= 186 && code <= 192) || (code >= 219 && code <= 222) ) {
      eventUtility.preventDefault(evt);
    }
  });
}());