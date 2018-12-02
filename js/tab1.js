$(".navcls ol li").on("click", function() {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".slider1 ul").animate({
        top: -$(".slider1").height() * $(this).index()
    }, 500);
});