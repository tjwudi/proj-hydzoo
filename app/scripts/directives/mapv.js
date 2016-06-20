/* globals alert, BMap, Mapv */
'use strict';

/**
 * <mapv mapdata="mapdata"/>
 */
angular.module('hydzooApp')
.directive('mapv', function ($http) {
  return {
    template: '<div class="vmap-wrap"><div class="vmap"></div></div>',
    scope: {
      'mapdata': '='
    },
    link: function (scope, el) {
      const mapid = 'vmap-' + String(Math.floor(Math.random() * 1000000));
      var map;

      function reloadLayer(mapstyle) {
        console.log(scope);
        map = new BMap.Map(mapid);
        map.centerAndZoom(new BMap.Point(101,31), 5);
        map.setMapStyle({
          styleJson:mapstyle
        });
        map.enableScrollWheelZoom(true);
        var mapv = new Mapv({
            drawTypeControl: true,
            map: map  // 百度地图的map实例
        });
        var layer = new Mapv.Layer({
          zIndex: 3, // 图层的层级
          mapv: mapv, // 对应的mapv
          dataType: 'point', // 数据类型，point:点数据类型,polyline:线数据类型,polygon:面数据类型
          data: scope.mapdata,
          drawType: 'density', // 渲染数据方式, simple:普通的打点, [更多查看类参考](https://github.com/huiyan-fe/mapv/wiki/%E7%B1%BB%E5%8F%82%E8%80%83)
          // 渲染数据参数
          drawOptions: { // 绘制参数
            type: 'rect', // 网格类型，方形网格或蜂窝形
            size: 50, // 网格大小
            unit: 'px', // 单位
            opacity: '0.5',
            label: { // 是否显示文字标签
              show: true,
            },
            gradient: { // 显示的颜色渐变范围
              '0': 'blue',
              '0.6': 'cyan',
              '0.7': 'lime',
              '0.8': 'yellow',
              '1.0': 'red'
            },
          }
        });
      }

      el.find('.vmap').attr('id', mapid);

      $http({
        method: 'GET',
        url: '/data/mapstyle.json'
      }).then(function (res) {
        const mapstyle = res.data;
        reloadLayer(mapstyle);
      }, function () {
        alert('Failed to load mapstyle.json!');
      });

      scope.$watch('mapdata', function () {
        reloadLayer();
      });
    }
  };
});
