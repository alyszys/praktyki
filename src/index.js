import "./style.scss"
console.log('index.js loaded');

$(document).ready(function(){ 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#button').fadeIn();
        } else {
            $('#button').fadeOut();
        }
    }); 

    $('#button').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

});