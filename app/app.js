var  mkmApp = angular.module('mkmApp',['ngRoute']);

mkmApp.config(['$routeProvider',function($routeProvider){

  $routeProvider
    .when('/home',{
      templateUrl: 'views/home.html'
    })
    .when('/directory',{
      templateUrl: 'views/directory.html',
      controller :  'mojtabaController'
    })
    .otherwise({
        redirectTo:'/home'
    });

}]);


mkmApp.run(function(){


});

mkmApp.controller('mojtabaController',function($scope, $route, $routeParams, $location){

    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.removeLine = function(p)
    {
      var  removePerson = $scope.persons.indexOf(p);
      $scope.persons.splice(removePerson,1);


    };

    $scope.watch = function() {
        console.log( "salalalal");
        console.log( $location.path());

    };

    $scope.addNewPerson = function()
    {
      $scope.persons.push(
        {
          name: $scope.newPerson.name ,
          belt: $scope.newPerson.belt,
          rate:parseInt( $scope.newPerson.rate),
          availabel: true
        });
        $scope.newPerson.name ="";
        $scope.newPerson.belt ="";
        $scope.newPerson.rate ="";


    };


    $scope.message="Salam Bar  angular";
    $scope.fruits=['k1','k2','ff','gg','ddssdsa'];
    $scope.persons=[
      {
        name:"ali",
        belt:"yellow",
        rate:100,
        availabel:true,
        thumb: "content/img/1.png"
      },
      {
        name:"sharam",
        belt:"blue",
        rate:80,
        availabel:false,
        thumb: "content/img/2.png"

      },

      {
        name:"payam",
        belt:"green",
        rate:500,
        availabel:true,
        thumb: "content/img/3.png"
      },

      {
        name:"Timmy",
        belt:"red",
        rate:20,
        availabel:false,
        thumb: "content/img/4.png"
      },

      {
        name:"Young",
        belt:"brown",
        rate:10,
        availabel:true,
        thumb: "content/img/1.png"
      }

    ];
});
