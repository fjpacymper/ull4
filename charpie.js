$(document).ready(function() {
    var data = {
      series: [20, 10, 30, 40]
    }

    var options = {
      donut: true,
      donutWidth: 50,
      startAngle: 270,
      total: 200
    }

    new Chartist.Pie('.chart', data, options);
});
