window.modules.ui.resizable = function (Storage, zIndex) {
  return {
    restrict: 'A',
    require: "scrollable",
    link: function (scope, element, attr, scrollableCtrl) {
      var options = {
        start: function () {
          element.zIndex(zIndex++);
        },
        stop: function (event, params) {
          var ui = Storage.get(attr.id) || {};

          ui.size = params.size;
          Storage.save(attr.id, ui);
          scrollableCtrl.update();
        },
        minHeight: 100,
        minWidth: 150
      };

      element.resizable(options);

      var ui = Storage.get(attr.id);

      if (ui && ui.size) {
        element.width(ui.size.width);
        element.height(ui.size.height);
      }
    }
  }
};
