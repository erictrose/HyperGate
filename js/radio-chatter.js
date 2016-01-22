console.log('radio-chatter.js loaded');

var radioOff = true;
var radioSound = document.getElementById('radio-chatter');

$('#radio-chatter-icon').click(function(){
    console.log('radio clicked');
    if(radioOff){
        radioSound.play();
        radioOff = false;
        $('#radio-chatter-icon').attr("src","images/audio-on.png");
        console.log('radio on');
    }else{
        radioSound.pause();
        radioOff = true;
        $('#radio-chatter-icon').attr("src","images/audio-off.png");
        console.log('radio off');
    };
});