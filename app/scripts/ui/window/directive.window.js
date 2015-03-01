window.modules.ui.window = function ($compile) {
  var WINDOW_TEMPLATE = '<div class="control-panel"><button ng-click="toggle()">{{ whenHidden() }}</button></div>';

  return {
    restrict: 'A',
    scope: true,
    priority: 0,
    link: function (scope, element) {
      console.info(scope.$id);
      var hidden = false;
      element.prepend($compile(WINDOW_TEMPLATE)(scope));
      scope.toggle = function () {

        element.find('[data-content]').toggle(hidden);
        hidden = !hidden;
      };

      scope.whenHidden = function () {
        return hidden ? "+" : "-";
      }
    }
  }
};
