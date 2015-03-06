window.modules.ui.draggable = function (Storage, zIndex) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      var options = {
        start: function () {
          element.zIndex(zIndex++);
        },
        stop: function () {
          var ui = Storage.get(attr.id) || {};

          ui.position = element.position();
          Storage.save(attr.id, ui);
        }
      };

      if (attr.handle) {
        options.handle = attr.handle;
      }

      element.draggable(options);

      var ui = Storage.get(attr.id);

      if (ui && ui.position) {
        element.offset(ui.position);
      }
    }
  }
};
