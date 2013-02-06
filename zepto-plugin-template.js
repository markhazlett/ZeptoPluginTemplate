(function($, document, window, undefined) {
  // Default options for the plugin as a simple object
  var defaults = {
  };

  function Plugin(element, options) {
    this.element = element;

    // Merge the options given by the user with the defaults
    this.options = $.extend({}, defaults, options);

    this.$el      = $(el);
    this.$el.data(name, this);

    this.defaults = {};

    var meta      = this.$el.data(name + '-opts');

    this.init();
  }

  Plugin.prototype.init = function() {
    // You have access to this.options and this.element
  };

  $.fn.plugin = function(options) {
    settings = $.extend({}, $.fn.plugin.defaults, defaults);
    return this.each(function() {
      var element = this;
      var paragraph = $(this);

      new Plugin(this, options);
    });
  };
})(Zepto, document, window);