function initAccordion(accordionElem) {
    function handlePanelClick(event){
        showPanel(event.currentTarget);
    }
    function showPanel(panel){
        var expandedPanel = accordionElem.querySelectorAll(".active")
        if(expandedPanel){
            expandedPanel.classList.remove("active");
        }
        panel.classList.add(active);
    }
    var allPanelElemts = accordionElem.querySelectorAll(".panel");
    for (var i = 0; len = allPanelElems.length; i < len; i++){
        allPanelElems[i].addEventListener("click", handlePanelClick)
    }
    showPanel(allPanelElems[0]);
}

initAccordion(document.getElementById("accordion"))
