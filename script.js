let show = document.getElementById("icon"); // share 
let hidden = document.getElementById("common-share"); // The share window


show.addEventListener("click", function (event) {
    if (hidden.style.display === "none" || hidden.style.display === "") {
        hidden.style.display = "inline-block"; // Show the share window
    } else {
        hidden.style.display = "none"; // Hide the share window
    }
    
    // Prevent click event from bubbling to document
    event.stopPropagation();
});

// Close the share window when clicking outside
document.addEventListener("click", function (event) {
    if (!hidden.contains(event.target) && event.target !== show) {
        hidden.style.display = "none"; 
    }
});
