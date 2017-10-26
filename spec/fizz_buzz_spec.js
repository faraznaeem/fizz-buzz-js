describe('FizzBuzz', function(){
  var game;

  beforeEach(function(){
    game = new FizzBuzz();
  })

  it('returns "WTF" if number is negative', function(){
    expect(game.check(-10)).toEqual('WTF?');
  })

  it('returns "WTF?" if object is not a number', function(){
    expect(game.check('Thomas')).toEqual('WTF?');
  })

  it('returns "fizz" if number is divisable by 3', function(){
    expect(game.check(3)).toEqual('fizz');
  })

  it('returns "buzz" if number is divisable by 5', function(){
    expect(game.check(5)).toEqual('buzz');
  })

  it('returns "fizz-buzz" if number is divisable by 15', function(){
    expect(game.check(15)).toEqual('fizz-buzz');
  })

  it('returns number if number is NOT divisable by 3', function(){
    expect(game.check(4)).toEqual(4);
  })


})
