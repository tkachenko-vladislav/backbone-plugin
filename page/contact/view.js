// Generated by CoffeeScript 1.8.0
(function() {
  define(["text!./template.html"], function(template) {
    var View;
    return View = Backbone.View.extend({
      className: "view",
      initialize: function() {
        this.$el.css({
          opacity: 0
        });
        return this.$el.html(template);
      }
    });
  });

}).call(this);
