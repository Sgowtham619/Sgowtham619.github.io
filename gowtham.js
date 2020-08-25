 
var animationEnd = (function(el) {
    var animations = {
      animation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };
  
    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  })(document.createElement('div'));

$(document).ready(function(){
    
    $("#to").hover(function(){
        $("#to").addClass('animated fadeOutDown').one(animationEnd, function(){
            $("#to").removeClass('animated fadeOutDown')
        });
    })
});
$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 150) {
            $('#start').addClass('scrolled-start');
        } else if (scrollTop < 150) {
            $('#start').removeClass('scrolled-start');
        } 
    
    });
    var scrollFunction=function(e,num){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(e.target.attributes.href.value).offset().top
        }, num);
    }
    $("#abt").click(function(e) {
        scrollFunction(e,1000);
    });
    $("#int").click(function(e) {
        scrollFunction(e,1200);
    });
    $("#con").click(function(e) {
        scrollFunction(e,1300);
    });
    $("#ski").click(function(e) {
        scrollFunction(e,1400);
    });
    $("#pro").click(function(e) {
        scrollFunction(e,1300);
    });
    $("#gotoabt").click(function(e){
        scrollFunction(e,700);
    })
    
});

