/*
    处理页面各种特效
    (C) Project Sparrow
*/
(function ($) {
    'use strict';
    var $window = $(window);
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
        } else {
            $('.header_area').removeClass('sticky slideInDown');

        }
    });


})(jQuery);