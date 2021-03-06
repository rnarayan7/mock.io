// Function to create accordion
function initAccordion(){
    var accordionElem = $("#accordion")

    // Event handler for when button for accordion is selected
    function handlePanelClick(event){
        showPanel(event.currentTarget);
    }

    // Shows or hides panel based on selection
    function showPanel(panel){
        var isAlreadyActive = panel.querySelector(".accordion-body").classList.contains("active")

        var expandedPanel = $(".active");
        if (expandedPanel){
            expandedPanel.removeClass("active");
        }
        if(isAlreadyActive != true) {
            panel.querySelector(".accordion-body").classList.add("active");
        }
    }

    // Assigns click event to all panel elements
    var allPanelElems = $(".accordion-panel");
    allPanelElems.on("click",handlePanelClick)
}
// Call initialization for accordion
$(document).ready(initAccordion);
