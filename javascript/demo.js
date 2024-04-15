//---------- Tutorial Select ----------
// Get Tutorial Options
var t1 = document.getElementById('tutorial-1');
var t2 = document.getElementById('tutorial-2');
var t3 = document.getElementById('tutorial-3');
var t4 = document.getElementById('tutorial-4');
// Get Accessory Options
var a1 = document.getElementById('accessory-1');
var a2 = document.getElementById('accessory-2');
var a3 = document.getElementById('accessory-3');
var a4 = document.getElementById('accessory-4');
// Get video to be altered
var demoVideo = document.getElementById('demo-video');
// Get descriptions for each option
var DescriptionT1 = document.getElementById('description-t1');
var DescriptionT2 = document.getElementById('description-t2');
var DescriptionT3 = document.getElementById('description-t3');
var DescriptionT4 = document.getElementById('description-t4');
var DescriptionA1 = document.getElementById('description-a1');
var DescriptionA2 = document.getElementById('description-a2');
var DescriptionA3 = document.getElementById('description-a3');
var DescriptionA4 = document.getElementById('description-a4');

// Select Tutorial
function tutorialSelect (selectedTutorial, selectedDescription, videoSrc) {
    t1.classList.remove("selected-cell");
    t2.classList.remove("selected-cell");
    t3.classList.remove("selected-cell");
    t4.classList.remove("selected-cell");
    a1.classList.remove("selected-cell");
    a2.classList.remove("selected-cell");
    a3.classList.remove("selected-cell");
    a4.classList.remove("selected-cell");
    selectedTutorial.classList.add("selected-cell");

    DescriptionT1.classList.add("hidden");
    DescriptionT2.classList.add("hidden");
    DescriptionT3.classList.add("hidden");
    DescriptionT4.classList.add("hidden");
    DescriptionA1.classList.add("hidden");
    DescriptionA2.classList.add("hidden");
    DescriptionA3.classList.add("hidden");
    DescriptionA4.classList.add("hidden");
    selectedDescription.classList.remove("hidden");

    demoVideo.src = videoSrc;
}

// Handle clicking on tutorial options
t1.addEventListener("click", function() { tutorialSelect(t1, DescriptionT1, "https://www.youtube.com/embed/5G38Q9r0oaU"); });
t2.addEventListener("click", function() { tutorialSelect(t2, DescriptionT2, "https://www.youtube.com/embed/MpF3rutTxVQ"); });
t3.addEventListener("click", function() { tutorialSelect(t3, DescriptionT3, "https://www.youtube.com/embed/foEW7osSHj0"); });
t4.addEventListener("click", function() { tutorialSelect(t4, DescriptionT4, "https://www.youtube.com/embed/gQq1BS0RWYw"); });
a1.addEventListener("click", function() { tutorialSelect(a1, DescriptionA1, "https://www.youtube.com/embed/Gxeozna5O1s"); });
a2.addEventListener("click", function() { tutorialSelect(a2, DescriptionA2, "https://www.youtube.com/embed/t1BAyl6xwJw"); });
a3.addEventListener("click", function() { tutorialSelect(a3, DescriptionA3, "https://www.youtube.com/embed/0v1NHrVwzLw"); });
a4.addEventListener("click", function() { tutorialSelect(a4, DescriptionA4, "https://www.youtube.com/embed/QXQUQH3FKD0"); });