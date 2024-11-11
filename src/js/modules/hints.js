function moveHint(el) {
    let objectId = $(el).attr("data-hint-object"),
    hintObject = $(`#${objectId}`),
    top = hintObject.offset().top - 50 + hintObject.outerHeight() / 2,
    left = hintObject.offset().left + hintObject.outerWidth() + 20

    console.log(hintObject.offset())

    $(el)
        .css("position", "absolute")
        .css("top", top)
        .css("left", left)
        .css("width", "435px")

}
    


$(".hint[data-hint-object]").each(function(i, el) {
    if ($(window).innerWidth() < 1024) { return }
    moveHint(el)
})
$(window).resize(function() {
    $(".hint[data-hint-object]").each(function(i, el) {
        if ($(window).innerWidth() < 1024) { return }
        moveHint(el)
    })
})

$(".hint__close").click(function() {
    $(this).parents(".hint").remove()
})

$(window).resize(function() {
    if ($(window).innerWidth() < 1024) {
        $(".hint[data-hint-object]")
            .css("position", "")
            .css("top", "")
            .css("left", "")
            .css("width", "")
    }
})