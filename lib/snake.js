(function() {
  var Animal, Snake;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Animal = require("./animal");
  module.exports = Snake = (function() {
    __extends(Snake, Animal);
    function Snake() {
      Snake.__super__.constructor.apply(this, arguments);
    }
    Snake.prototype.move = function() {
      console.log("Slithering...");
      return Snake.__super__.move.call(this, 5);
    };
    return Snake;
  })();
}).call(this);
