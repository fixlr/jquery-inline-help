(function( $ ){
  $.fn.inlineHelp = function() {
    this.each(function() {
      input = $(this)
      input.click(function() {
        help_text = $('<span class="help">'+input.attr('data-help')+'</span>')
        input.after(help_text)
        $(this).blur(function() {
          help_text.remove()
        })
      })
    })
  };
})( jQuery );