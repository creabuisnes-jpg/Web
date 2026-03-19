// JavaScript functionality for photo upload and gallery

// Function to upload files
function uploadFile(input) {
    const files = input.files;
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.classList.add('gallery-image');
            gallery.appendChild(imgElement);
        };

        reader.readAsDataURL(file);
    }
}

// HTML structure example:
// <input type="file" multiple onchange="uploadFile(this)">
// <div id="gallery"></div>
