$(".radio-card").click(function() {
    $(this).parent().find(".radio-card").removeClass("radio-card_checked")
    $(this).addClass("radio-card_checked")
})