// Check webp support, add webp or no-webp class for HTML
export function isWebp() {
    // Checking webp support
    function testWebP(callback) {
        let webP = new Image(); // Similar to the createElement
        webP.onload = webP.onerror = function () { // On successful loading or on error
            callback(webP.height == 2); // We pass the condition to the callback parameters
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"; // Specify the image path
    }
    // Adding _webp or _no-webp class for HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp'; // We check whether the condition is true and write the resulting class
        document.documentElement.classList.add(className); // Assigning a class in html
    });
}