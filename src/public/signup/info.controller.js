(function () {
  "use strict";

  angular.module('public')
    .controller('InfoController', InfoController);

  InfoController.$inject = ['user', 'ApiPath'];
  function InfoController(user, ApiPath) {
    var info = this;
    info.basePath = ApiPath;
    info.user = user;
  }

})();