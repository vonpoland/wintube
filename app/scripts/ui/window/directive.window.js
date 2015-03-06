window.modules.ui.window = function ($compile, Storage) {
  var WINDOW_TEMPLATE = '<div class="control-panel"><button ng-click="toggle()">{{ whenHidden() }}</button></div>';

  return {
    restrict: 'A',
    scope: true,
    priority: 0,
    link: function (scope, element, attr) {
      var hidden = false;
      element.prepend($compile(WINDOW_TEMPLATE)(scope));
      scope.toggle = function () {
        var ui = Storage.get(attr.id) || {};

        element.find('[data-content]').toggle(hidden);
        hidden = !hidden;

        if (hidden) {
          element.addClass("auto-height")
        } else {
          element.removeClass("auto-height")
        }

        ui.hidden = hidden;
        Storage.save(attr.id, ui);
      };

      scope.whenHidden = function () {
        return hidden ? "+" : "-";
      };

      var ui = Storage.get(attr.id);

      if (ui && ui.hidden) {
        scope.toggle();
      }
    }
  }
};
