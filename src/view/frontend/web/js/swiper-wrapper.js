/**
 * This script is a simple wrapper that allows you to use idangero.us/swiper with Magento 2
 */

define([
    "jquery",
    "Phoenix_IdangerousSwiper/js/swiper.jquery.min"
], function($){
    return function (config, element) {
        $(document).ready(function () {
            return new Swiper(element, config);
        });
    }
});