(($, document, window, undefined_) ->
  
  # Default options for the plugin as a simple object
  Plugin = (element, options) ->
    @element = element
    
    # Merge the options given by the user with the defaults
    @options = $.extend({}, defaults, options)
    @$el = $(el)
    @$el.data name, this
    @defaults = {}
    meta = @$el.data(name + "-opts")
    @init()
  defaults = {}
  Plugin::init = ->

  
  # You have access to this.options and this.element
  $.fn.plugin = (options) ->
    settings = $.extend({}, $.fn.plugin.defaults, defaults)
    @each ->
      element = this
      paragraph = $(this)
      new Plugin(this, options)

) Zepto, document, window