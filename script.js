// Ensure that the showP function correctly updates the background image
function showP(image) { 
    console.log("Changing background image to:", image);
    document.getElementById('sp').style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(' + image + ')';
}

function changeT(text) {
    console.log("Changing title to:", text);
    document.getElementById('name').innerHTML = text;
}

// Access the button element by its id
const exploreButton = document.getElementById('explore');

document.addEventListener("DOMContentLoaded", function() {
    var aboutButton = document.querySelector(".nav-link[href='#about']");
    aboutButton.addEventListener("click", function(event) {
        event.preventDefault();
        var aboutSection = document.getElementById("About"); // Corrected to "About" instead of "about"
        setTimeout(function() {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }, 300); // Delay added for smooth scrolling
    });
});



