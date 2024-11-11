$(".tels-toggle").click(function(e) {
    
    if (!$(e.target).hasClass("tels-toggle")) { return }

    let currentFlagSrc = $("#tels-toggle-img").attr("src"),
        nextFlagSrc = $(this).attr("data-flag-src"),
        tel = $(this).attr("data-tel")


    $("#tels-toggle-img").attr("src", nextFlagSrc)
    $(this).attr("data-flag-src", currentFlagSrc)
    $(this).attr("data-tel", tel == "rus" ? "bel" : "rus")
    $(this).parents(".tel-input").find("input[type='tel']").hide()
    console.log(`input[type='tel'][data-tel-country='${tel}']`)
    $(this).parents(".tel-input").find(`input[type='tel'][data-tel-country='${tel}']`).show()

})

$(".tels-toggle-list__item").click(function() {
    let country = $(this).attr("data-tel-country"),
        imgSrc = $(this).find("img").attr("src")

    $(this).parents(".tels-toggle-list").removeClass("tels-toggle-list_active")  
    $(this).parents(".tels-toggle").find(".tels-toggle__active img").attr("src", imgSrc)
    $(this).parents(".tel-input").find("input[type='tel']").hide()
    $(this).parents(".tel-input").find(`input[type='tel'][data-tel-country='${country}']`).show()
})