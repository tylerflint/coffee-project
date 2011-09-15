Animal = require "./animal"

module.exports = class Horse extends Animal
  move: ->
    console.log "Galloping..."
    super 45