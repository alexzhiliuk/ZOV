$("[data-popup-open]").click(function(){
    let popup = $(this).attr("data-popup-open")
    $(`.popup[data-popup=${popup}]`).show()
    $("body, html").addClass("lock")
})

$(".popup__close").click(function() {
    $(this).parents(".popup").hide()
    $("body, html").removeClass("lock")
})


$(window).click(function() {
    $(".popup").hide()
    $("body, html").removeClass("lock")
});
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $(".popup").hide()
        $("body, html").removeClass("lock")
    }
});
$('[data-popup-open], .popup__close, .popup__inner').click(function(event){
    event.stopPropagation();
});