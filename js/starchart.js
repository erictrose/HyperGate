//starchart.js

var starchart = document.getElementById("starchart-canvas");
var starchartctx = starchart.getContext("2d");
starchartctx.width = 275;
starchartctx.height = 167;

var lineChartData = {
    labels: ['EQUINOX','SOLSTICE','PARALAX','ORION','HORIZON'],
    datasets: [{
        fillColor: 'rgba(21,116,21,0.5)',
        strokeColor: '#05fa06',
        pointColor: 'rgba(228,27,27,1)',
        pointStrokeColor: 'rgba(228,27,27,1)',
        data: [7,12,15,20,17]
    },{
        fillColor: 'rgba(21,116,21,0.5)',
        strokeColor: '#05fa06',
        pointColor: 'rgba(228,27,27,1)',
        pointStrokeColor: 'rgba(228,27,27,1)',
        data: [5,11,18,27,23]
    }]
};

var options = {
    onAnimationComplete: done,
    pointDotRadius : 3,
    //pointHitDetectionRadius : 20,
    
};

var theLine = new Chart(starchartctx).Line(lineChartData, options);

function done(){
//    var dataUrl = starchartctx.toDataURL();
//    document.getElementById('infobit-1-img').src = dataUrl;
//    $('#infobit-1-canvas').hide();
};