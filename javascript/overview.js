//---------- Option Select ----------
// Get option buttons
var button1 = document.getElementById("body-only");
var button2 = document.getElementById("body-extra");

// Get descriptions to be altered
var bodyDetails = document.getElementById('body-details');
var cameraDetails = document.getElementById('camera-details');

// Get prices to be altered
var bodyPrice = document.getElementById('body-price');
var cameraPrice = document.getElementById('camera-price');

// Get preview image to be altered
var previewImage = document.getElementById('preview-image');

// Option Select Function
function optionSelect(selectedButton, hiddenDetails, visibleDetails, hiddenPrice, visiblePrice, imageSrc) {
  button1.classList.remove("selected");
  button2.classList.remove("selected");
  selectedButton.classList.add("selected");

  hiddenDetails.classList.add("hidden");
  visibleDetails.classList.remove("hidden");

  hiddenPrice.classList.add("hidden");
  visiblePrice.classList.remove("hidden");

  extendField.classList.remove("camera-extended", "body-extended");
  extendField.classList.add("not-extended");

  previewImage.src = imageSrc;
}

button1.addEventListener("click", function() {
  optionSelect(button1, cameraDetails, bodyDetails, cameraPrice, bodyPrice, "images/image_body_front.png");
});

button2.addEventListener("click", function() {
  optionSelect(button2, bodyDetails, cameraDetails, bodyPrice, cameraPrice, "images/image_camera_front.png");
});


//---------- Extend Field Set ----------
var extendButton = document.getElementById("extend-button");
var extendField = document.getElementById("extend-field");

extendButton.addEventListener("click", function() {
  var isNotExtended = extendField.classList.contains("not-extended");
  extendField.classList.remove("camera-extended", "body-extended", "not-extended");

  if (cameraDetails.classList.contains("hidden")) {
      extendField.classList.add(isNotExtended ? "body-extended" : "not-extended");
  } else {
      extendField.classList.add(isNotExtended ? "camera-extended" : "not-extended");
  }
});

