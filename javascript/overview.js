//---------- Option Select ----------
// Get references to the buttons
var button1 = document.getElementById("body-only");
var button2 = document.getElementById("body-extra");
// Get preview image to be altered
var previewImage = document.getElementById('preview-image');

// Button Select Behavior
button1.addEventListener("click", function() {
  button2.classList.remove("selected");
  button1.classList.add("selected");
  previewImage.src = "images/image_body_front.png";
});

button2.addEventListener("click", function() {
  button1.classList.remove("selected");
  button2.classList.add("selected");
  previewImage.src = "images/image_camera_front.png";
});



//---------- Extend Field Set ----------
var extendButton = document.getElementById("extend-button");
var extendField = document.getElementById("extend-field");

// Toggle if the field set is extended
extendButton.addEventListener("click", function() {
  if(extendField.classList.contains("not-extended")){
    extendField.classList.remove("not-extended");
    extendField.classList.add("extended");
} else {
    extendField.classList.remove("extended");
    extendField.classList.add("not-extended");
}
});



