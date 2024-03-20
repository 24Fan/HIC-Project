//----------Option Select----------
//Get references to the buttons
var button1 = document.getElementById("body-only");
var button2 = document.getElementById("body-extra");
// Get preview image to be altered
var previewImage = document.getElementById('preview-image');


//Function to handle button click
function handleButtonClick(clickedButton) {
  //Deselect both buttons
  button1.classList.remove("selected");
  button2.classList.remove("selected");
  //Select the clicked button
  clickedButton.classList.add("selected");
}

//Add click event listeners to buttons
button1.addEventListener("click", function() {
  handleButtonClick(button1);
  previewImage.src = "images/image_body_front.png";
});

button2.addEventListener("click", function() {
  handleButtonClick(button2);
  previewImage.src = "images/image_camera_front.png";
  
});



//----------Extend Field Set----------
var extendButton = document.getElementById("extend-button");
var extendField = document.getElementById("extend-field");

//toggle if the field set is extended
function extend(extendField) {
    if(extendField.classList == "not-extended"){
        extendField.classList.remove("not-extended");
        extendField.classList.add("extended");
    } else{
        extendField.classList.remove("extended");
        extendField.classList.add("not-extended");
    }
}

extendButton.addEventListener("click", function() {
    extend(extendField);
});



