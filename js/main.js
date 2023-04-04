// active class css remove or add
$(document).ready(function () {
    $("#navLink li").mouseover(function () {
      $("#navLink li").removeClass("active");
      $(this).closest("li").addClass("active");
    });


    $("#menuBar").click(function(){
        $(".side-bar").toggleClass("widthMin");
        $(".title-heading").toggle();
        $("nav").toggle();
        $(".container").toggleClass("containerHide");
    });
});
// Start Statistics Chart js 
  var xValues = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          borderColor: "red",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
// Monthly Statistics Chart js 
var yValues = [80, 20];
var barColors = ["#210a76","#62d181"];
new Chart("myMonthly", {
    type: "doughnut",
    data: {
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
});
// Start Yearly Chart js 
var yValues = [80, 20];
var barColors = ["#62d181","#210a76"];
new Chart("myYearly", {
    type: "doughnut",
    data: {
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
});
// Start Earning Chart js 
var yValues = [80, 20];
var barColors = ["#62d181","#210a76"];
new Chart("myEarning", {
    type: "doughnut",
    data: {
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
});