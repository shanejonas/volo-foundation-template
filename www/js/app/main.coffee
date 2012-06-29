define (require)->

  $ = require 'jquery'
  Backbone = require 'backbone'
  Index = require 'cs!./views/index/index'

  #testing importing a foundation library
  orbit = require 'foundation/jquery.orbit-1.4.0'

  class Application extends Backbone.Router

    $el: ($ 'body')

    initialize: ->
      @indexView = new Index

    routes:
      '': 'index'

    index: ->
      @$el.html @indexView.render().el

  $ ->
    new Application
    Backbone.history.start()
