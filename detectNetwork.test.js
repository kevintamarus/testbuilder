/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
//var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  /// A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  
  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38123456781234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39123456781234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('341234567890123') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('371234567890123') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.should();
  
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
   
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

// prefix: 6011, 644-649, 65
// length: 16, 19
describe('Discover', function() {
  var expect = chai.should();

  it('has a prefix of 6011 and a length of 16',function(){
    detectNetwork('6011567890123456').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19',function(){
    detectNetwork('6011567890123456789').should.equal('Discover');
  })
  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it(`has a prefix of ${prefix} and a length of 16`,function(){
      detectNetwork(String(prefix)+'4567890123456').should.equal('Discover');
    });
    it(`has a prefix of ${prefix} and a length of 19`,function(){
      detectNetwork(String(prefix)+'4567890123456789').should.equal('Discover');
    });
  })(prefix)
};
    it('has a prefix of 65 and a length of 16',function(){
    detectNetwork('6534567890123456').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19',function(){
    detectNetwork('6534567890123456789').should.equal('Discover');
  });
  



});

// prefix: 5018, 5020, 5038, 6304
// length: 12-19
describe('Maestro', function() {
  var should = chai.should();
  for (var length = 12; length <= 19; length++) {
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function() {
        detectNetwork('5018' + Array(length - 3).join('0')).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + length, function() {
        detectNetwork('5020' + Array(length - 3).join('0')).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function() {
        detectNetwork('5038' + Array(length - 3).join('0')).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + length, function() {
        detectNetwork('6304' + Array(length - 3).join('0')).should.equal('Maestro');
      });
    })(length)
  }
});

// prefix: 622126, 622926, 624-626, 6282, 6288
// length: 16-19
describe('should support China UnionPay', function() {
  var should = chai.should();
  for (var prefix1 = 622126; prefix1 < 622926; prefix1++) {
    (function(prefix1) {
      it('has a prefix of ' + prefix1 + ' and a length of 16', function() {
        detectNetwork(prefix1 + '7890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix1 + ' and a length of 17', function() {
        detectNetwork(prefix1 + '78901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix1 + ' and a length of 18', function() {
        detectNetwork(prefix1 + '789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix1 + ' and a length of 19', function() {
        detectNetwork(prefix1 + '7890123456789').should.equal('China UnionPay');
      });
    })(prefix1)
    }
    for (var prefix2 = 624; prefix2 <= 626; prefix2++) {
      (function(prefix2) {
        it('has a prefix of ' + prefix2 + ' and a length of 16', function() {
        detectNetwork(prefix2 + '4567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix2 + ' and a length of 17', function() {
        detectNetwork(prefix2 + '45678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix2 + ' and a length of 18', function() {
        detectNetwork(prefix2 + '456789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix2 + ' and a length of 19', function() {
        detectNetwork(prefix2 + '4567890123456789').should.equal('China UnionPay');
      });
    })(prefix2)
  }
  for (var prefix3 = 6282; prefix3 <= 6288; prefix3++) {
      (function(prefix3) {
        it('has a prefix of ' + prefix3 + ' and a length of 16', function() {
        detectNetwork(prefix3 + '567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix3 + ' and a length of 17', function() {
        detectNetwork(prefix3 + '5678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix3 + ' and a length of 18', function() {
        detectNetwork(prefix3 + '56789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix3 + ' and a length of 19', function() {
        detectNetwork(prefix3 + '567890123456789').should.equal('China UnionPay');
      });
    })(prefix3)
  }
})

// prefix: 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759
// length: 16, 18, 19
describe('should support Switch', function() {
  var should = chai.should();
  var switchArray = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for (var i = 0; i < switchArray.length; i++) {
    (function(number) {
      it('has a prefix of ' + switchArray[i] + ' and a length of 16', function() {
        detectNetwork(number + Array(17 - number.toString().length).join('0')).should.equal('Switch')
      })
      it('has a prefix of ' + switchArray[i] + ' and a length of 18', function() {
        detectNetwork(number + Array(19 - number.toString().length).join('0')).should.equal('Switch')
      })
      it('has a prefix of ' + switchArray[i] + ' and a length of 19', function() {
        detectNetwork(number + Array(20 - number.toString().length).join('0')).should.equal('Switch')
      })
    })(switchArray[i])
  }
})