define (require)->

  Backbone = require 'backbone'

  #testing importing a foundation library
  require 'foundation/jquery.reveal'

  class Index extends Backbone.View

    className: 'container'

    events:
      'click .button': 'revealModal'

    initialize: ->

    revealModal: ->
      (@$ '#myModal').reveal()

    render: ->
      @$el.html @template
      this

    template: '''
        <div id="myModal" class="reveal-modal">
             <h2>Awesome. I have it.</h2>
             <p class="lead">Your couch.  I it's mine.</p>
             <p>Im a cool paragraph that lives inside of an even cooler modal. Wins</p>
             <a class="close-reveal-modal">&#215;</a>
        </div>
        <div class='nice round button'>Click for Reveal Modal</div>
      '''
