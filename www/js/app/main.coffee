define (require)->

  $ = require 'jquery'
  Backbone = require 'backbone'
  Index = require 'cs!./views/index/index'

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
