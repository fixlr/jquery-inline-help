(function($){
  $.fn.inlineHelp = function() {
    this.each(function() {
      input = $(this);
      help_text = $('<span class="help">'+input.attr('data-help')+'</span>').hide();
      input.after(help_text);

      (function(input, help_text){
        input.click(function() {
          help_text.show();

          input.blur(function() {
            help_text.hide();
          });
        });
      })(input, help_text);
    });
  };
})(jQuery);
