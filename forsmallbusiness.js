$(function(){
    $(".hamburger").on('click',function(){
        hamburger()
    });

    $('#nav a').on('click',function(){
        hamburger()
    });
    
    $('.slide-up').on('inview',function(event,isInView,visiblePartX,visiblePartY){
        if(isInView){
            $(this).stop().addClass('show');
        }
    });

    $('a[href^="#"]').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html':href);
        let position = target.offset().top
        $("html,body").animate({scrollTop:position}, 600, "swing");
        return false
    });

});

function hamburger(){
    $('.hamburger').toggleClass('active');
    if($('.hamburger').hasClass('active')){
        $('#nav').addClass('active');
    }else{
        $('#nav').removeClass('active');
    };
}