console.log('population chart loaded');

//create variables
var barSpacing = 0,
    barWidth = 0,
    chartHeight = 0,
    chartHeightArea = 0,
    chartScale = 0,
    maxValue = 0,
    highestYlabel = 0,
    valueMultiplier = 0;

//set global variables
    window.chartHeight = Number($('.chart-area').height());
    window.barWidth = $('.chart-area .chart-bar').width();
    window.highestYlabel = Number($('.chart-y-axis p').first().html());
    window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
    window.chartScale = chartHeightArea/window.highestYlabel;
    window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
    
    positionBars();
    animateChart();

//GLOBAL FUNCTIONS!!!

function positionBars(){
    $('.chart-area .chart-bar').each(function(index){
        var barPosition = (window.barWidth*index)+(window.barSpacing*index)+window.barSpacing;
        $(this).css('left', barPosition + 'px');
        //add text to bar and axis
        $(this).html('<p>' +$(this).attr('bar-value') +'</p>');
        //x-axis
        $('.chart-x-axis').append('<p style="left:' +(barPosition - (window.barWidth/2)) +'px">' +$(this).attr('label') +'</p>')
        //relative height of bars
        var barValue = barValue;
        
        if(barValue>window.maxValue){
            window.maxValue = barValue;
            window.valueMultiplier = window.maxValue/window.highestYlabel;
        };
    });
}; //end postion bars

function animateChart(){
    //get each bar to animate to its height
    $('.chart-area .chart-bar').each(function(index){
        //height relative to chart
        var revisedValue = Number($(this).attr('bar-value'))*window.chartScale;
        //create variable for delay
        var newDelay = 125*index;
        //animate the bar
        $(this).delay(newDelay).animate({height:revisedValue},1000,function(){
            //fadein our p tags
            $(this).children('p').delay(500).fadeIn(250);
        }) 
    })
}; //end animate chart