$(".tels-toggle").click(function(e) {
    
    if (!$(e.target).hasClass("tels-toggle")) { return }

    $(this).parents(".tel-input").find(".tels-toggle-list").addClass("tels-toggle-list_active")  

})

$(".tels-toggle-list__item").click(function() {
    let country = $(this).attr("data-tel-country"),
        imgSrc = $(this).find("img").attr("src")

    $(this).parents(".tels-toggle-list").removeClass("tels-toggle-list_active")  
    $(this).parents(".tels-toggle").find(".tels-toggle__active img").attr("src", imgSrc)
    $(this).parents(".tel-input").find("input[type='tel']").hide()
    $(this).parents(".tel-input").find(`input[type='tel'][data-tel-country='${country}']`).show()
})