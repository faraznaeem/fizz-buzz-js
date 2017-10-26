function FizzBuzz() {
  this.check = function(number){
    if(_isInvalid(number)){
      return 'WTF?';
    } else if(_hasZeroReminder(number, 15)){
      return 'fizz-buzz';
    } else if(_hasZeroReminder(number, 3)){
      return 'fizz';
    } else if(_hasZeroReminder(number, 5)){
      return 'buzz';
    } else {
      return number;
    }
  }

  var _hasZeroReminder = function (number, divisor) {
    return (number % divisor === 0);
  };

  var _isInvalid = function(number){
    if(isNaN(number) || Math.sign(number) === -1){
      return true;
    } else {
      return false;
    }
  }
};
