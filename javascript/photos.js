//---------- Image Select ----------
// Get preview images
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
// Get main image to be altered
var mainImage = document.getElementById('main-photo');


// Image Select Function
function imageSelect(selectedPreview, imageSrc) {
    b1.classList.remove("selected");
    b2.classList.remove("selected");
    b3.classList.remove("selected");
    b4.classList.remove("selected");
    b5.classList.remove("selected");
    b6.classList.remove("selected");
    c1.classList.remove("selected");
    c2.classList.remove("selected");
    c3.classList.remove("selected");
    c4.classList.remove("selected");
    c5.classList.remove("selected");
    c6.classList.remove("selected");
    c7.classList.remove("selected");
    c8.classList.remove("selected");
    selectedPreview.classList.add("selected");

    mainImage.src = imageSrc;
}

// Handle clicking on each preview image
b1.addEventListener("click", function() { imageSelect(b1, "../images/image_body_front.png"); });
b2.addEventListener("click", function() { imageSelect(b2, "../images/image_body_front_2.png"); });
b3.addEventListener("click", function() { imageSelect(b3, "../images/image_body_top.png"); });
b4.addEventListener("click", function() { imageSelect(b4, "../images/image_back.png"); });
b5.addEventListener("click", function() { imageSelect(b5, "../images/image_back_2.png"); });
b6.addEventListener("click", function() { imageSelect(b6, "../images/image_body_accessories.png"); });
c1.addEventListener("click", function() { imageSelect(c1, "../images/image_camera_front.png"); });
c2.addEventListener("click", function() { imageSelect(c2, "../images/image_back.png"); });
c3.addEventListener("click", function() { imageSelect(c3, "../images/image_back_2.png"); });
c4.addEventListener("click", function() { imageSelect(c4, "../images/image_camera_top.png"); });
c5.addEventListener("click", function() { imageSelect(c5, "../images/image_camera_accessories.png"); });
c6.addEventListener("click", function() { imageSelect(c6, "../images/image_lens_front.png"); });
c7.addEventListener("click", function() { imageSelect(c7, "../images/image_lens_top.png"); });
c8.addEventListener("click", function() { imageSelect(c8, "../images/image_lens_bottom.png"); });




//---------- Camera Option Select ----------
// Get option buttons
var bodyButton = document.getElementById("body-only");
var cameraButton = document.getElementById("body-extra");

// Get preview image options
var bodyImages = document.getElementById('body-images');
var cameraImages = document.getElementById('camera-images');

// Option Select Function
function optionSelect(selectedButton, previewImages) {
    // Display button as selected
    bodyButton.classList.remove("selected");
    cameraButton.classList.remove("selected");
    selectedButton.classList.add("selected");
    // Display correct preview images
    bodyImages.classList.add("hidden");
    cameraImages.classList.add("hidden");
    previewImages.classList.remove("hidden");
}

// Handle option selecting
bodyButton.addEventListener("click", function() {
  optionSelect(bodyButton, bodyImages);
  imageSelect(b1, "../images/image_body_front.png");
});

cameraButton.addEventListener("click", function() {
  optionSelect(cameraButton, cameraImages);
  imageSelect(c1, "../images/image_camera_front.png");
});


