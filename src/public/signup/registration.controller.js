(function () {
  "use strict";

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['RegistrationService'];
  function RegistrationController(RegistrationService) {
    var reg = this;

    reg.message = "";

    reg.submit = function () {
      RegistrationService.save(reg.user).then(function (response) {
        reg.message = response;
      });
    };
  }

})();