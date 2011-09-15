(function() {
  var Animal;
  module.exports = Animal = (function() {
    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.move = function(meters) {
      return console.log(this.name + (" moved " + meters + "m."));
    };
    return Animal;
  })();
}).call(this);
