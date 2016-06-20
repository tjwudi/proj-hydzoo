/* globals alert */
'use strict';

/**
 * @ngdoc function
 * @name hydzooApp.controller:AboutCtrl
 * @description
 * Controller of the hydzooApp
 */
angular.module('hydzooApp')
  .controller('CitiesCtrl', function ($scope, $http) {
    $scope.rawData = [];
    $scope.mapvData = [];
    $scope.year = '1997';
    $scope.dIndex = '0';

    function filterData(rawData, dIndex, year) {
      // filter year
      return rawData.filter(function (item) {
        return item.year === year;
      }).map(function (item) {
        return {
          lat: item.lat,
          lng: item.lng,
          data: item.d[dIndex]
        };
      });
    }

    $scope.$watch('rawData', function (newVal) {
      $scope.mapvData = filterData(newVal,
        parseInt($scope.dIndex, 10),
        parseInt($scope.year, 10));
    });

    $http({
      method: 'GET',
      url: '/data/data.json'
    }).then(function (res) {
      $scope.rawData = res.data;
    }, function () {
      alert('Failed to load data!');
    });
  });

