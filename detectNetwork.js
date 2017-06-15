var detectNetwork = function(cardNumber) {
  var cards = [
    {
            card : `Diner's Club`,
            prefix : ['38','39'],
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
            card : 'MasterCard',
            prefix : ['51','52','53','54','55'],
            length: [16]
        },
    {
            card : 'Discover',
            prefix : ['6011', '644', '645', '646', '647', '648', '649', '65'],
            length: [16,19]
        },
    {
            card : 'Maestro',
            prefix : ['5018','5020','5038','6304'],
            length: [12,13,14,15,16,17,18,19]
        },
    {
            card : 'China UnionPay',
            prefix : ['624','625','626','6282','6283','6284','6285','6286','6287','6288'],
            length: [16,17,18,19]
        },
    {
            card : 'Switch',
            prefix : ['4903','4905','4911','4936','564182','633110','6333','6759'],
            length: [16,18,19]
        }
  ];
  //first for-loop adds the remaining prefixes to the China UnionPay prefix array(too long to manually list)
  for(var i = 622126; i < 622926; i++) {
    cards[6].prefix.push(`${i}`);
  }
  var result = 'Network not found';
  //used 3 for-loops(looping through the cards array, then through length of each card, and finally the prefix of each card)
  for(var i=0; i<cards.length; i++) {
    for(var x=0; x<cards[i].length.length; x++) {
      if(cardNumber.length === cards[i].length[x]) {
        for(var y=0; y<cards[i].prefix.length; y++) {
          if (cardNumber.slice(0,6) === cards[i].prefix[y]) {
            result = cards[i].card;
          }
          else if (cardNumber.slice(0,4) === cards[i].prefix[y]) {
            result = cards[i].card;
          }
          else if (cardNumber.slice(0,3) === cards[i].prefix[y]) {
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