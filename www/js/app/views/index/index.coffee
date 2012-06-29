define (require)->

  Backbone = require 'backbone'

  class Index extends Backbone.View

    className: 'container'

    initialize: ->

    render: ->
      button = @make 'div', class: 'nice round button'
      button.innerHTML = "Foundation Button"

      @$el.html button
      this
