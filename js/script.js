$(document).ready(function(){
    $('.third__slider_1').slick({
        speed: 1600,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
      });
      $('.third__slider_2').slick({
        speed: 1600,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
      });
      $('.third__slider_3').slick({
        speed: 1600,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
      });
      $('.third__slider_4').slick({
        speed: 1600,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
      });
      $('.third__slider_5').slick({
        speed: 1600,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
      });
      $('.third__slider_6').slick({
        speed: 1600,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
      });
      $(window).scroll(function() {
        if ($(this).scrollTop() >1200) {
            $('.page_up_arrow').fadeIn();
        } else {
            $('.page_up_arrow').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
