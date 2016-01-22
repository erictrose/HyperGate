//when dot clicked
$('a.dot').click(function(){
    //remove selected class from all dots
    $('a.dot').removeClass('selected');
    //add selected class on the clicked anchor
    $(this).addClass('selected');
    //var to hold info for matching div
    var dest = ".dest_detail#" +$(this).attr('destination');
    //var to hold html code
    var htmlCode = $(dest).html();
    //animate container
    $('.detail_container').fadeOut(500, function(){
        //container hidder
        //put html in the container and fade it in
        $('.detail_container .dest_detail').html(htmlCode);
        $('.detail_container').fadeIn(500);
    })
})