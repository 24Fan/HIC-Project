//---------- Order Confirmation ----------
// Get "Confirm Order" button
var confirm_button = document.getElementById('confirm-button');
// Get the confirmation menu to be displayed
var confirmation_menu = document.getElementById('confirmation-menu');
var processing_text = document.getElementById('processing');
var complete_text = document.getElementById('complete');
// Get continue button to close confirmation menu
var continue_button = document.getElementById('continue-button');

// Asynchronus wait function to simulate processing
const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));
// Confirm Order Function
const confirmOrder = async () => {
    confirmation_menu.classList.remove("hidden");
    processing_text.classList.remove("hidden");
    await wait(3000);
    processing_text.classList.add("hidden");
    complete_text.classList.remove("hidden");
}
// Close confirmation menu
function closeOrder() {
    complete_text.classList.add("hidden");
    confirmation_menu.classList.add("hidden");
}

// Handle clicking on "Confirm Order" button
confirm_button.addEventListener("click", function() { confirmOrder(); });
continue_button.addEventListener("click", function() { closeOrder(); });

// Validate numeric input in certain fields
function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57))
        return false;

    return true;
}