(function() {
  var Animal, Horse;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Animal = require("./animal");
  module.exports = Horse = (function() {
    __extends(Horse, Animal);
    function Horse() {
      Horse.__super__.constructor.apply(this, arguments);
    }
    Horse.prototype.move = function() {
      console.log("Galloping...");
      return Horse.__super__.move.call(this, 45);
    };
    return Horse;
  })();
}).call(this);
