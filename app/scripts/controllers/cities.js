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
    $scope.years = (function (start, end) {
      var result = [];
      for (var i = start; i < end; i ++) {
        result.push(i);
      }
      return result;
    })(1997, 2013);
    console.log($scope.years);
    $scope.titles = [{"id": 0, "title": "土地面积建成区"}, {"id": 1, "title": "第一产业从业人员比重全市"}, {"id": 2, "title": "第二产业从业人员比重全市"}, {"id": 3, "title": "第三产业从业人员比重 全市"}, {"id": 4, "title": "第一产业占的比重"}, {"id": 5, "title": "第二产业占的比重"}, {"id": 6, "title": "第三产业占的比重"}, {"id": 7, "title": "人口密度_全市"}, {"id": 8, "title": "年末部人口万人_全市"}, {"id": 9, "title": "人均地区生产总值_元_全市"}, {"id": 10, "title": "地方财政收入"}, {"id": 11, "title": "地方财政支出"}, {"id": 12, "title": " 医院卫生院床位数_全市"}, {"id": 13, "title": "城市建设用地面积_市辖区"}, {"id": 14, "title": "居住用地面积_市辖区"}, {"id": 15, "title": "工业企业数个全市"}, {"id": 16, "title": "全年供水总量"}, {"id": 17, "title": "人均生活用水量"}, {"id": 18, "title": "全年用电总量"}, {"id": 19, "title": "人均生活用电量"}, {"id": 20, "title": "全部从业人员地区"}, {"id": 21, "title": "工业用电"}, {"id": 22, "title": "高等学校教师数_全市"}, {"id": 23, "title": "普通中学教师数_全市"}, {"id": 24, "title": "小学教师数_全市"}, {"id": 25, "title": "医院数_全市"}, {"id": 26, "title": "医生数_全市"}, {"id": 27, "title": "铁路旅客运量万人"}, {"id": 28, "title": "公路客运量万人"}, {"id": 29, "title": "铁路货物运量万吨"}, {"id": 30, "title": "公路货运量万吨"}, {"id": 31, "title": "社会消费品零售总额"}, {"id": 32, "title": "本地电话年末用户数万户"}, {"id": 33, "title": "建成区绿化覆盖率市区"}];
    $scope.year = 1997;
    $scope.dIndex = '0';

    function filterData(rawData, dIndex, year) {
      // filter year
      return rawData.filter(function (item) {
        return item.year === year;
      }).map(function (item) {
        return {
          lat: item.lat,
          lng: item.lng,
          count: item.d[dIndex]
        };
      });
    }

    $scope.$watchGroup(['rawData', 'dIndex', 'year'], function (newVals) {
      $scope.mapvData = filterData(newVals[0],
        parseInt(newVals[1], 10),
        newVals[2]);
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

