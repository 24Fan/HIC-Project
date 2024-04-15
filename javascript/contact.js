// get button
var chatButton = document.getElementById("live-chat-button");

// make window visible
function chat() {
    var chatClick = document.getElementById("chat-window");
    chatClick.style.display = "block";
}

// live chat functionality
chatButton.addEventListener("click", function() {
    chat();
});

// timestamp for chat messages
var now = new Date();
var timestamp = now.toLocaleString();
document.getElementById("timestamp").innerHTML = timestamp;