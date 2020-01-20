/*! Copyright (c) 2013 Denys Petiukov. License: MIT. */
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

  var addEvent = function(selector, type, fn) {
    if (typeof window.addEventListener !== 'undefined') {
      selector.addEventListener(type, fn);
    } else {
      selector.attachEvent('on' + type, fn);
    }
  }

  var numberInput = document.getElementById('number');
  
  addEvent(numberInput, 'keydown', function(e) {
    var code = e.keyCode;
    // allow only number input
    if ( 
      (code >= 65 && code <= 90) 
      || (code >= 106 && code <= 122) 
      || (code >= 186 && code <= 192) 
      || (code >= 219 && code <= 222) 
    ) {
      typeof e.preventDefault !== 'undefined' ? e.preventDefault() : e.returnValue = false;
    }
  });

}());
