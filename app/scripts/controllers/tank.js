'use strict';

/**
 * @ngdoc function
 * @name hydzooApp.controller:AboutCtrl
 * @description
 * Controller of the hydzooApp
 */
angular.module('hydzooApp')
  .controller('TankCtrl', function ($scope) {
    $scope.tankdata = {
      0: [
        { 'title': '朱钟炎', 'subtitle1': '设计教育学博士', 'subtitle2': '教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学学士', 'subtitle2': '教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '朱钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' }
      ],
      1: [
        { 'title': '钟炎', 'subtitle1': '设计教育学博士', 'subtitle2': '教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学学士', 'subtitle2': '教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' },
        { 'title': '钟炎', 'subtitle1': '设计教育学硕士', 'subtitle2': '副教授' }
      ]
    };
    // expand data to be divisible by 4
    for (var i in $scope.tankdata) {
      var remaining = $scope.tankdata[i].length % 4;
      for (var j = 0; j < remaining; j ++) {
        $scope.tankdata[i].push('blank');
      }
    }

    $scope.openTankTab = function(idx) {
      $scope.currentTabIdx = idx;
      $scope.currentTabData = $scope.tankdata[idx];
    };
    $scope.openTankTab(0);
  });
