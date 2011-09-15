(function() {
  var Horse, Snake, sam, tom;
  Snake = require("./snake");
  Horse = require("./horse");
  sam = new Snake("Sammy the Python");
  tom = new Horse("Tommy the Palomino");
  sam.move();
  tom.move();
}).call(this);
