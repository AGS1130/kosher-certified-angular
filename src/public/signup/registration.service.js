(function () {
  "use strict";

  angular.module('public')
    .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['MenuService'];
  function RegistrationService(MenuService) {
    var service = this;

    service.save = function (user) {
      return MenuService.menuItemExists(user.favorite_dish).then(function (response) {
        if (response) {
          service.user = user;
          return "Your information has been saved.";
        }
        else {
          return "No such menu number exists.";
        }
      })
    }

    service.getUser = function () {
      if (service.user) {
        return MenuService.getMenuItem(service.user.favorite_dish).then(function (response) {
          service.user.favorite_dish = response;
          return service.user;
        })
      }
      else {
        return null;
      }
    }
  }
})();