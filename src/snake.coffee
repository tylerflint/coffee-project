Animal = require "./animal"

module.exports = class Snake extends Animal
  move: ->
    console.log "Slithering..."
    super 5