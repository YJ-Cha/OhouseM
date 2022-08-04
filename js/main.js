

// section1 - house

var swiper = new Swiper(".swiperHouse", {});
var swiper = new Swiper(".swiperReview", {});
var swiper = new Swiper(".swiperTip", {});


// section 4 - commercial 광고

var swiper = new Swiper('.swiperCommercial', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});


$('.subMenuBtn').click(function(){
	$('.headerSubMenu').css({left : 0});
	$('.menuBg').fadeIn();
});

$('.menuBg').click(function(){
    $('.headerSubMenu').css({left : '-300px'});
    $(this).fadeOut(200);
});


$('.searchMenuBtn').click(function(){
	$('.searchSubMenu').css({top : 0});
});

$('.searchCloseBtn').click(function(){
	$('.searchSubMenu').css({top : '-100vh'});
});


$('.cartMenuBtn').click(function(){
    $('.cartSubMenu').fadeIn(100);
    $('.cartSubMenuWrap').css({top : 0});
});


$('.cartSubMenu').click(function(){
    $('.cartSubMenuWrap').css({top : '-70vh'});
    $(this).fadeOut(200);
});
$('.cartCloseBtn').click(function(){
    $('.cartSubMenuWrap').css({top : '-70vh'});
    $(this).fadeOut(200);
});