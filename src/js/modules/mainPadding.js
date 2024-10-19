function setMainTopPadding() {
    let mainPadding, bannerPadding
    if ($(window).innerWidth() > 1024) {
        mainPadding = $(".header").outerHeight() + 20 + $(".header__row_out").outerHeight() + 28;
    } else {
        mainPadding = $(".header").outerHeight() + 35
        bannerPadding = $(".header").outerHeight() + 35
    }

    $("main").css("padding-top", `${mainPadding}px`);
    bannerPadding ? $(".main-banner").css("padding-top", `${bannerPadding}px`).css("margin-top", `-${bannerPadding}px`) : $(".main-banner").css("padding-top", '')
}
setMainTopPadding()

$(window).resize(function() {
    setMainTopPadding()
})