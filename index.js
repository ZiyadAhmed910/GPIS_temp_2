$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('.school-logo').addClass('school-logo-black');
           }

           else {
                 $('.school-logo').removeClass('school-logo-black');
           }
     })
