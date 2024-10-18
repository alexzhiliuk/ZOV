$("[data-marker-text]").each(function(i, el) {
    let bgColor = $(this).attr("data-marker-bg")
    $(this).css("--markerBg", bgColor)
})