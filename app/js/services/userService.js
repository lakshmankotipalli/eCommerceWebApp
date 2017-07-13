ecomm.service('userService', function () {

  this.loginDetails = {};

  this.setLoginData = function (data) {
    this.loginDetails = data;
  };

  this.getLoginData = function () {
    return this.loginDetails;
  };

});
