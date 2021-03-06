//Инициализатор (вешает ползунки)
var amountleft = $(".amount-left")
$( function() {
    var minimumRange = 0;
    var maximumRange = 1000;
    var amountleft = $(".amount-left")
    $( ".slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ minimumRange, maximumRange ],
        slide: function( event, ui ) {
            amountleft.val(ui.values[ 0 ]);
            $( ".amount-right" ).val(ui.values[ 1 ]);
        }
    });
    amountleft.val( $( ".slider-range" ).slider( "values", 0 ));
    $( ".amount-right" ).val( $( ".slider-range" ).slider( "values", 1 ));
    $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
} );
/***вешаем скролтутоп**/
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});
/***Розмещаем #map под устройство***/
$(function(){
    var map_div = $('#map');
    var device_height=$(window).height();
    $("#map").css('height', device_height*0.9); //задаем блоку высоту в 90% от высоты дисплея. Для красивого отображения елемента
});
//скрваем в фильтре все елементы после 5го
$(function(){
    var lines = $(".filter-subcategory");
    for(var i = 0; i<lines.length;i++){
        lines.eq(i).find('li').eq(4).nextAll('li.filter-subcategory-item').css('display', 'none');
        lines.eq(i).find('li:last-child').css('display','block'); //show button 'show-all'
    }
});
$('.filter-subcategory-item .showall').parent('a').click(function(event){
    event.preventDefault();
    console.log('console');
    $(this).parents('.filter-subcategory').find('li').eq(4).nextAll('li.filter-subcategory-item').css('display', 'block');
    $(this).parents('.filter-subcategory').find('li:last-child').css('display','none');
});
/*============ХЕНДЛЕРЫ ДЛЯ ФИЛЬТРА======================*/
//хендлер введения минимального значения для ползунка в фильтре каталога
$(".amount-left").keyup(function(){
    var minimumRange = parseInt($(".amount-left").val());
    var maximumRange = parseInt($(".amount-right").val());
    if($.isNumeric(minimumRange) && (maximumRange-minimumRange)>40 ){
        $( ".slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ minimumRange, maximumRange ],
            slide: function( event, ui ) {
                amountleft.val(ui.values[ 0 ]);
                $( ".amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $(".amount-left").val( $( ".slider-range" ).slider( "values", 0 ));
        $( ".amount-right" ).val( $( ".slider-range" ).slider( "values", 1 ));
    } else {
        $( ".slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 0, maximumRange ],
            slide: function( event, ui ) {
                amountleft.val(ui.values[ 0 ]);
                $( ".amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $(".amount-left").val( $( ".slider-range" ).slider( "values", 0 ));
        $( ".amount-right" ).val( $( ".slider-range" ).slider( "values", 1 ));
    }
    });
//хендлер введения максимального значения для ползунка в фильтре каталога
$(".amount-right").keyup(function(){
    var minimumRange = parseInt($(".amount-left").val());
    var maximumRange = parseInt($(".amount-right").val());
    if($.isNumeric(maximumRange) && (maximumRange-minimumRange)>0 ){
        $( ".slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ minimumRange, maximumRange ],
            slide: function( event, ui ) {
                amountleft.val(ui.values[ 0 ]);
                $( ".amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $(".amount-left").val( $( ".slider-range" ).slider( "values", 0 ));
        $( ".amount-right" ).val( $( ".slider-range" ).slider( "values", 1 ));
    } else {
        $( ".slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ minimumRange, 1000 ],
            slide: function( event, ui ) {
                amountleft.val(ui.values[ 0 ]);
                $( ".amount-right" ).val(ui.values[ 1 ]);
            }
        });
        $(".amount-left").val( $( ".slider-range" ).slider( "values", 0 ));
        $( ".amount-right" ).val( $( ".slider-range" ).slider( "values", 1 ));
    }
});
/*============СЛАЙДЕРЫ======================*/
$('.slider-wrap').slick({
    dots: true,
    autoplay: true,
    speed: 600,
    arrows: false
});
$('.product-slider').slick({
    dots: true,
    arrows: false
});
$('.feedback-photos').slick({
    infinite: true,
    slidesToShow: 4,
    adaptiveHeight: true,
    slidesToScroll: 1
});
var slikop = $('.feedback-popup').slick({
    infinite: true,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    nextArrow: '<i class="sa sa-arrow-right"></i>',
    prevArrow: '<i class="sa sa-arrow-left"></i>'
});

/*================ГАМБУРГЕР==========================*/
function menu_close() {
    $('.main-menu').slideUp(300);
    $('.menu').css('display','block');
    $('.fix').css('display','none');
    $('.close-menu').css('display','none');
    $('i.close').css('display','none');
    $('.logo').removeClass('logo-fix');
    $('.logo a').removeClass('image-fix');
    $('.logo a').addClass('centred');
    $('.profile').removeClass('profile-fix');
}
$(".burger").click(function(){
    $('.main-menu').slideDown(300);
    $('.menu').css('display','none');
    $('.fix').css('display','block');
    $('.close-menu').css('display','block');
    $('i.close').css('display','block');
    $('.logo').addClass('logo-fix');
    $('.logo a').removeClass('centred');
    $('.profile').addClass('profile-fix');
});
$(".logo .close").click(function(){
    menu_close();
});

//Active button header
$('.header-icon').click(function(){
    $('.dropdown-search').slideUp(200);
    $('.header-icon').removeClass('active');
    $(this).addClass("active");
});
//Active show pass
$('.chk-pass-lb').click(function(){
    if($(this).find("input.show-pass").is(":checked")){
        $('.auth-password').attr('type','text');
    } else if(!($(this).find("input.show-pass").is(":checked"))){
        $('.auth-password').attr('type','password');
    }
});
/*===============ХЕНДЛЕРЫ==================*/
//contacts
$('.del-phone').click(function(){
    $(".contacts").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.display-pic').css('display', 'none');
    $('.dark_background').fadeIn(300);
});
$('.contacts-close').click(function(){
    $(".contacts").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
});
//delivery
$('.delivery-box').click(function(){
    $(".delivery-section").css('display', 'block');
    $('.burger').css('display', 'none');
    $('.display-pic').css('display', 'none');
    $('.dark_background').fadeIn(300);
})
$('.delivery-close').click(function(){
    $(".delivery-section").css('display', 'none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
});
//catalog
$('.show_catalog').parents('.header-icon').click(function(){
    $(".catalog-section").css('display', 'block');
    $('.catalog-pic').css('display', 'none');
    $(this).addClass('active');
    $(".basked-section, .contacts, .delivery-section, .auth-section, .filter-section").css('display', 'none');
    menu_close();
    $('.dark_background').fadeIn(300);
});
//bucked
$('.bucket-icon').click(function(){
    $(".auth-section").css('display', 'none');
    $(".filter-section").css('display', 'none');

    $(".basked-section").css('display', 'block');
    $('.catalog-pic').css('display', 'none');
    $('.header-icon').addClass('active');
    $(".filter-section, .contacts, .delivery-section, .filter-section, .catalog-section").css('display', 'none');
    menu_close();
    $('.dark_background').fadeIn(300);
});
//filter
$('.filter-btn').click(function(){
    $(".filter-section").css('display', 'block');
    $('.catalog-pic').css('display', 'none');
    $('.header-icon').removeClass('active');
    $(".basked-section, .contacts, .delivery-section, .auth-section, .catalog-section").css('display', 'none');
    menu_close();
    $('.dark_background').fadeIn(300);
});
$('.filter-section-close').click(function(){
    $(".filter-section").css('display', 'none');
    $('.display-pic').css('display', 'block');
});
$('.control-user button').click(function(){
    $('.control-user button').removeClass('active');
    $(this).addClass('active');
});
//login
$('.profile a').click(function(){
    $(".basked-section").css('display', 'none');
    $('.header-icon').removeClass('active');
    $(".filter-section").css('display', 'none');
    $(".auth-section").css('display', 'block');
    $('.catalog-pic').css('display', 'none');
    $(".basked-section, .contacts, .delivery-section, .filter-section, .catalog-section").css('display', 'none');
    $('.dark_background').fadeIn(300);
    menu_close();

});
/******Вибор юзера новый/зарегестрированый**********/
$('.order-user button').click(function(e){
    e.preventDefault();
    $('.order-user button').removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('new-user')){
        $('.regular-user-form').css('display','none');
        $('.new-user-form').css('display','block');
    } else if($(this).hasClass('regular-user')){
        $('.new-user-form').css('display','none');
        $('.regular-user-form').css('display','block');
    }
});
$('.product-in-bucked .buy').click(function(){
    $(this).css('display', 'none');
    $('.product-in-bucked .product-in-bucked-text').css('display', 'block')
    $('.product-in-bucked .bucked-icon').css('display', 'block')
});
$('.product-in-bucked .bucked-icon').click(function(){
    $('.product-in-bucked .product-in-bucked-text').css('display', 'none');
    $('.product-in-bucked .bucked-icon').css('display', 'none');
    $('.product-in-bucked .buy').css('display', 'block');
});

//**document hide**/
$(document).click(function (e) {
    var container = $(".popup-filter");
    if (e.target!=container[0]&&container.has(e.target).length === 0){
       container.hide();
    }
});
/*******Скрыть/показать методы доставки********/
$('.show-variants').click(function(e){
    var delVar = $(this).parents('.delivery-order').find('.variants-delivery');
    if($(this).hasClass('active')){
        delVar.slideUp();
        $(this).removeClass('active');
        $(this).parents('.detail-variant-order').css({
            'background-image':'url("../img/blue-arrow.png")',
            'background-position':'96.5% 13px'
        });
    }else{
        delVar.slideDown();
        $(this).addClass('active');
        $(this).parents('.detail-variant-order')
            .css({
                'background-image':'url("../img/blue-arrow-down.png")',
                'background-position':'96.5% 17px'
            });
    }
});
/*слайд для коментария в ордере*/
$('.comments-order .info span').click(function(e){
    $(this).parent().find(".ar-cmmt").slideToggle(200);
})
/******Скрыть/показать товары в заказе******/
$('.order-list .show').click(function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
        $(this).parents('.user-form').find('.order-list .items-list').slideUp();
        $(this).parents('.user-form').find('.edit-info').slideUp();
        $(this).removeClass('active')
        $(this).text('показать');
    } else {
        $(this).parents('.user-form').find('.order-list .items-list').slideDown();
        $(this).parents('.user-form').find('.edit-info').slideDown();
        $(this).addClass('active');
        $(this).text('скрыть');
    }
});
//like
$('.product-likes-icon').click(function(){
    if($(this).find('img').attr('src')=='img/heard-gray-icon.png'){
        $(this).find('img').attr('src', 'img/heard-red-icon.png')
        $(this).addClass("active");
    } else{
        $(this).find('img').attr('src', 'img/heard-gray-icon.png')
        $(this).removeClass('active');
    }
});
//navigation click
$(".page-nav .page-num").click(function(){
    if(parseInt($(this).text())){ //if this>a is not a number do not add any class
        $(this).parent('.page-nav').find('.page-num').removeClass('active');
        $(this).addClass('active');
    }
});
//buy item
$(".item .buy").click(function(){
    if(!($(this).parents('.item').hasClass('item-end'))){
        if($(this).hasClass('bought')){
            $(this).removeClass('bought');
            $(this).find('img').attr('src','img/bucket.png');
        } else {
            $(this).addClass('bought');
            $(this).find('img').attr('src','img/bucket-red-icon.png');
        }
    }
});

/*===============КОРЗИНА==================*/
var totalPositionPrice = $('.basked-item').find('.product-nominal-price').eq(0).text();
//нажатие на добавить еденицу
$(".addItemBskd").click(function (e) {
    e.preventDefault();
   var howManyItemsInBasked=$(this).parents('.form-wrap').find('.basked-items-amount').val();
   howManyItemsInBasked++;
   $(this).parents('.form-wrap').find('.basked-items-amount').val(howManyItemsInBasked);
   $(this).parents('.form-wrap').find('.basked-items-amount').val(howManyItemsInBasked);
   $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);

});
//нажатие на отнять еденицу
$(".removeItemBskd").click(function (e) {
    e.preventDefault();
   var howManyItemsInBasked=$(this).parents('.form-wrap').find('.basked-items-amount').val();
   if(howManyItemsInBasked>1){
       howManyItemsInBasked--;
       $(this).parents('.form-wrap').find('.basked-items-amount').val(howManyItemsInBasked);
       $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
   }
});
//изминение ручками
$('.basked-items-amount').change(function(){
    if(!($.isNumeric($(this).val()))){
        $(this).val(1);
    }
    var howManyItemsInBasked=$(this).val();
    if(howManyItemsInBasked<1){
        $(this).val(1);
    }
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
});
//изминение при потере фокуса
$('.basked-items-amount').blur(function() {
    if(!($.isNumeric($(this).val()))){
        $(this).val(1);
    }
    var howManyItemsInBasked=$(this).val();
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
});
//изменение при нажатии клавиши
$('.basked-items-amount').keyup(function() {
    if(!($.isNumeric($(this).val()))){
        $(this).val(1);
    }
    var howManyItemsInBasked=$(this).val();
    $(this).parents('.basked-item').find('.product-nominal-price').text(howManyItemsInBasked*totalPositionPrice);
});
//Удаление позиции
$('.removePositionBskd').click(function (e) {
    e.preventDefault();
    $(this).parents('.basked-item').remove();
});
//==========================ГАРМОШКИ==============================//
//subcatalog
/*$('.catalog-section .catalog-item .catalog-link').click(function(e){
    e.preventDefault();
    if($(this).parent().hasClass('opened')){
        $(this).parent().removeClass('opened');
        $(this).parent().find('.catalog-subcategory').slideUp(200);
    } else{
        $(this).parent().addClass('opened');
        $(this).parent().find('.catalog-subcategory').slideDown(200);
    }
});*/
//subfilter
$('.filter-section .filter-item .filter-link').click(function(e){
    e.preventDefault();
    if($(this).parent().hasClass('opened')){
        $(this).parent().removeClass('opened');
        $(this).parent().find('.filter-subcategory').slideUp(200);
    } else{
        $(this).parent().addClass('opened');
        $(this).parent().find('.filter-subcategory').slideDown(200);
    }
});
$('.catalog-section .catalog-item .ul').click(function (e) {
    e.stopPropagation();
});
//гармошка в фильтре (5 елементов)
$(".showall").parents('.filter-subcategory-item').click(function(){

})
//search
$('.search-box').click(function(){
    if($('.dropdown-search').is(':visible')){
        $(this).removeClass('active');
        $('.dropdown-search').slideUp(200);
    } else {
        $('.dropdown-search').slideDown(200);
    }
});

/*stars*/
$('.product-raiting-star').click(function(){
    //if need rating
    if(!($(this).parent('.product-raiting-scale').hasClass('raitingOff'))){
        //clean all stars in this element
        $(this).parent().find('.product-raiting-star').removeClass('starred');
        $(this).prevAll('.product-raiting-star').addClass('starred');
        $(this).addClass('starred');
    }
});

/*****sections*******/
$('.detail-info-section-name').click(function(){
    $(this).toggleClass('detail-info-section-opened');
    $(this).parent('div').find('.detail-info-section-wrap').slideToggle(300);
});

/*===============FEEDBACK JS=================*/
$('button.replaid').click(function(){
    $('.feedback-replaid .feedback-form').slideDown(400);
});

$('.feedback-reply-cancel').click(function(e){
    e.preventDefault();
    $('.feedback-replaid .feedback-form').slideUp(400);
});

$('button.main-feedback-form').click(function(e){
    $('.leave-feedback').slideDown(300);
    e.stopPropagation();
});
/****fedback popup*********/
var $set = $('ul.feedback-photos li');
var siderPopupIndex = 0;
$('ul.feedback-photos').on('click', '.feedback-photo-link', function () {
    siderPopupIndex=$set.index(this);
});
/**************catalog category active link**********************/
$('.catalog-sort .sort-item').click(function(){
    if(!$(this).hasClass('active')){
        $('.catalog-sort .sort-item').removeClass('active');
        $(this).addClass('active')
    }
});

$('ul.feedback-photos').click(function(){
    setTimeout(function(){
        slikop.slick('slickGoTo', siderPopupIndex);
        $('.popup-wraper').fadeIn(1300);
    })
});
$('.popup-wraper .closer').click(function(){
    $('.popup-wraper').fadeOut(300);
    $('.popup-wraper').css('display','none');
});

$(window).on('load', function(){
    $('.preloader').fadeOut();
})



//обновленные функции

//закрыть попап
$('.header-popup-close').click(function(){
    $(this).parents('.header-popup').css('display','none');
    $('.burger').css('display', 'block');
    $('.display-pic').css('display', 'block');
    $('.dark_background').fadeOut();
    $('.shops').removeClass('active');
});


$(document).on('click','.dark_background',(function (e) {
       $('.header-popup').fadeOut();
       $('.dark_background').fadeOut();
       $('.shops').removeClass('active');
}));