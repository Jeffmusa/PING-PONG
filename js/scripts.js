var output = function(number) {
  var array = [];
  for (var index=1; index<= number; index++) {
    if ((index % 15) ===0) {
      array.push("Ping Pong");
    } else if ((index % 5) === 0) {
      array.push("Pong");
    } else if ((index % 3) === 0) {
      array.push("Ping");
    } else
      array.push(index)
    }
    console.log(index);
    return array;
};
