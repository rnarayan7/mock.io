function highlightPage(page){
    var selector_id = "#" + page + "-link";
    $("nav").children(selector_id).css({ "border-style": "solid",
                                         "border-width": "1.5px"});
}
