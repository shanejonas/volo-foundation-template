// Defines the main app module. This one does the top level app wiring.

define(function (require) {
    'use strict';
    var $ = require('jquery');
    var Backbone = require('backbone');
    var orbit = require('foundation/jquery.orbit-1.4.0');
    var text = 'sup im a foundation button';
    var template = " \
      <div class='container'> \
      <h2>Foundation Bootstrap</h2>
      <div class='nice round button'>sup im a foundation button</div> \
      </div>
    ";
    $('body').html(template);
});
