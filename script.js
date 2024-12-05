// Function to open the lightbox and display the clicked image
function openLightbox(imageElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");

    if (imageElement && imageElement.src) {
        lightboxImg.src = imageElement.src;  // Set the lightbox image source to the clicked image's source
        lightbox.style.display = "flex";      // Show the lightbox
    } else {
        console.error("Image element or its source is missing.");
    }
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";  // Hide the lightbox
}

//Function to sort rooms
function sortRooms() {
    const container = document.getElementById("rooms-container");
    const rooms = Array.from(container.getElementsByClassName("room"));
    const sortOption = document.getElementById("sort").value;

    if (sortOption === "high-to-low") {
        rooms.sort((a, b) => b.getAttribute("data-price") - a.getAttribute("data-price"));
    } else if (sortOption === "low-to-high") {
        rooms.sort((a, b) => a.getAttribute("data-price") - b.getAttribute("data-price"));
    } else {
        // Default order if needed
        rooms.sort((a, b) => a.getAttribute("data-price") - b.getAttribute("data-price"));
    }

    container.innerHTML = "";
    rooms.forEach(room => container.appendChild(room));
}
	
// Function to sort spa treatments
function sortSpaTreatments() {
    const container = document.getElementById("spa-treatments-container");
    const treatments = Array.from(container.getElementsByClassName("treatment"));
    const sortOption = document.getElementById("spa-sort").value;

 
    if (sortOption === "high-to-low") {
        treatments.sort((a, b) => parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price")));
    } else if (sortOption === "low-to-high") {
        treatments.sort((a, b) => parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price")));
    } else {
        // Default order 
        treatments.sort((a, b) => 0); // No sorting
    }

    container.innerHTML = "";
    treatments.forEach(treatment => container.appendChild(treatment));
}





