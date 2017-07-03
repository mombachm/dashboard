/*================================================
Module
================================================*/
var app = angular.module("app", ['ngRoute']);

/*================================================
Controller
================================================*/
app.controller("Ctrl", function($http, $scope) {

    var app = this;

    $http.get("http://localhost:3000/users")
      .success(function(data, status, headers) {
        console.log("http status code= "+status);
        console.log("data from server= "+JSON.stringify(data));
        app.people = data;
      })

    app.addPerson = function(person) {

        $http.post("http://localhost:3000/users", app.person)
          .success(function(data, status, headers) {
            console.log("http status code= "+status);
            console.log("data from server= "+JSON.stringify(data));
            app.people.push(data);
            console.log("new app.people= "+ app.people);
          })

          .error(function(data, status, headers, config) {
            console.log("Error with post" + status);
          })
    }
});
