// Form validation event handler called when onsubmit triggered
function validateForm(formType) {

    // Creates empty array of error messages
    var modal_text = [];

    // Retrieves elements
    if(formType == 'login'){
        var username_login = $("#username_login");
        var password_login = $("#password_login");
    } else if(formType == 'register'){
        var first_name = $("#first_name");
        var last_name = $("#last_name");
        var email = $("#email");
        var major = $("#major");
        var university = $("#university");
        var username_register = $("#username_register");
        var password_register = $("#password_register");
        var confirm_password = $("#confirm_password");

        // Pushes error messages to array
        modal_text.push(check_email(email.val()));
        modal_text.push(check_name(first_name.val()));
        modal_text.push(check_name(last_name.val()));
        modal_text.push(check_password(password_register.val(),confirm_password.val()));
    }

    // Empties current modal
    $(".modal-body").empty();
    var hasError = false;

    // Creates div for error message and adds to modal
    for (var i = 0; i<modal_text.length; ++i){
        if(modal_text[i] != null){
            var new_div = document.createElement("div");
            new_div.innerHTML = modal_text[i];
            $(".modal-body").append(new_div);
            hasError = true;
        }
    }

    // Shows if modal does indeed have errors and returns correct value to determine
    // if form can submit
    if(hasError){
        $("#alertModal").modal("show");
        return false;
    }
    return true;
}

// Checks if passwords are equal to one another
function check_password(passwordOne, passwordTwo) {
    if(passwordOne != passwordTwo) {
        return "Passwords do not match"
    }
    return null;
}

// Checks if email format is valid
function check_email(email) {
    var emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!(email).match(emailReg)) {
        return "Email entered is invalid";
    }
    return null;
}

// Checks if names include only letter
function check_name(name) {
    if(/^[a-zA-Z]+$/.test(name) == false){
        return "Please type name with only letters"
    }
    return null;
}
