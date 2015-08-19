// lucky_sevens?([2,1,5,1,0]) == true # => 1 + 5 + 1 == 7
// lucky_sevens?([0,-2,1,8]) == true # => -2 + 1 + 8 == 7
// lucky_sevens?([7,7,7,7]) == false
// lucky_sevens?([3,4,3,4]) == false

function lucky_sevens(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] === 7)
      return true;
    }
  return false;
  }

lucky_sevens([2,1,5,1,0]);
