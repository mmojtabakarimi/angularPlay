var  mkmApp = angular.module('mkmApp',[]);

mkmApp.config(function(){



});

mkmApp.run(function(){


});

mkmApp.controller('mojtabaController',function($scope){

    $scope.message="Salam Bar  angular";
    $scope.fruits=['k1','k2','ff','gg','ddssdsa'];
    $scope.persons=[
      {
        name:"ali",
        belt:"yello",
        rate:100
      },
      {
        name:"sharam",
        belt:"blue",
        rate:80
      },

      {
        name:"payam",
        belt:"green",
        rate:500
      },

      {
        name:"Timmy",
        belt:"red",
        rate:20
      },

      {
        name:"Young",
        belt:"brown",
        rate:10
      }

    ];
});
