document.addEventListener('DOMContentLoaded', function() {
    // Select the IconSet element
    const iconSet = document.querySelector('IconSet');
    
    // Get the imageUrl attribute
    const imageUrl = iconSet.getAttribute('imageUrl');
    
    // Fetch the SVG content
    fetch(imageUrl)
        .then(response => response.text())
        .then(svgContent => {
            // Create a temporary container to parse the SVG content
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = svgContent;
            
            // Get the SVG element
            const svgElement = tempContainer.querySelector('svg');
            
            // Replace the IconSet element with the SVG element
            iconSet.parentNode.replaceChild(svgElement, iconSet);
        })
        .catch(error => console.error('Error fetching SVG:', error));
});
