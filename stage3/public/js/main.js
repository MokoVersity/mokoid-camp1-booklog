$(function() {
    $('.nav [href="' + window.location.pathname + '"]').closest('li').addClass('active');
});