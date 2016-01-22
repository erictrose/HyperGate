console.log('slider.js loaded');

var sliderIn = true;

$('.left-nav').click(function(){
    console.log('slider clicked');
    if(sliderIn){
        $('#slider').animate({left: '+=735'})
        sliderIn = false;
        console.log('slider moved out');
    }else{
        $('#slider').animate({left: '-=735'})
        sliderIn = true;
        console.log('slider moved in');
    };
});