var cards = [
    {
            card : 'The Diner Club',
            prefix : ['34','39'],
            length: [14]
        },
    {
            card : 'American Express',
            prefix : ['34','37'],
            length: [15]
        },
    {
            card : 'Visa',
            prefix : ['4'],
            length: [13, 16, 19]
        },
    {
            card : 'Mastercard',
            prefix : ['54','55'],
            length: [16]
        },
    {
            card : 'Discover',
            prefix : ['6011'],
            length: [16,19]
        },
    {
            card : 'Maestro',
            prefix : ['50','56','57','58'],
            length: [12,13,14,15,16,17,18,19]
        },
    {
            card : 'China Union Pay',
            prefix : ['62'],
            length: [16,17,18,19]
        },
    {
            card : 'Switch',
            prefix : ['4903','4905','4911','4936'],
            length: [16,18,19]
        }
]

var detectNetwork = function(cardNumber) {
  var result = 'Network not found';
  for(var i=0; i<cards.length; i++) {
    for(var x=0; x<cards[i].length.length; x++) {
      if(cardNumber.length === cards[i].length[x]) {
        for(var y=0; y<cards[i].prefix.length; y++) {
          if (cardNumber.slice(0,4) === cards[i].prefix[y]) {
            result = cards[i].card;
          }
          else if (cardNumber.slice(0,2)=== cards[i].prefix[y]) {
            result = cards[i].card;
          }
          else if (cardNumber[0]=== cards[i].prefix[y]) {
            result = cards[i].card;
          }
        }
      }
    }
  }
  return result;
};