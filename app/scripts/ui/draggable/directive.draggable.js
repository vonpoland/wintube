window.modules.ui.draggable = function (Storage, zIndex) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      var options = {
        start: function () {
          element.zIndex(zIndex++);
        },
        stop: function () {
          Storage.save(attr.draggable, element.position());
        }
      };

      if (attr.handle) {
        options.handle = attr.handle;
      }

      element.draggable(options);

      var previousPosition = Storage.get(attr.draggable);

      if (previousPosition) {
        element.offset(previousPosition);
      }
    }
  }
};
