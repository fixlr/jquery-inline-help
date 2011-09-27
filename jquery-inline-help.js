(function( $ ){
  $.fn.inlineHelp = function() {
    this.each(function() {
      input = $(this)
      help_text = $('<span class="help">'+input.attr('data-help')+'</span>').hide()
      input.after(help_text)

      input.click(function() {
        help_text.show()

        $(this).blur(function() {
          help_text.hide()
        })
      })
    })
  };
})( jQuery );
