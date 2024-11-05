function moveAdditionalMenu() {
    if (window.innerWidth < 1024) {
        $(".additional-menu__inner").css("left", '')
        return
    }
    let left = $(".container_wide").offset().left - $("#additional-menu-open").offset().left + 20;
    $(".additional-menu__inner").css("left", `${left}px`)
}
moveAdditionalMenu()
$("#additional-menu-open").click(function() {
    $(".additional-menu__inner").addClass("additional-menu__inner_open")
})
$(window).resize(moveAdditionalMenu)

$("#additional-menu-close").click(function() {
    $(".additional-menu__inner").removeClass("additional-menu__inner_open")
})
$(window).click(function() {
    $(".additional-menu__inner").removeClass("additional-menu__inner_open")
});
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $(".additional-menu__inner").removeClass("additional-menu__inner_open")
    }
});
$('#additional-menu-open, #additional-menu-close, .additional-menu').click(function(event){
    event.stopPropagation();
});