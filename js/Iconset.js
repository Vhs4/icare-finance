class IconSet extends HTMLElement {
    constructor() {
        super();
        this.imageUrl = this.getAttribute('imageUrl');
    }

    connectedCallback() {
        this.fetchAndReplaceIcon();
    }

    fetchAndReplaceIcon() {
        if (this.imageUrl) {
            fetch(this.imageUrl)
                .then(response => response.text())
                .then(svgContent => {
                    const tempContainer = document.createElement('div');
                    tempContainer.innerHTML = svgContent;

                    const svgElement = tempContainer.querySelector('svg');
                    
                    this.parentNode.replaceChild(svgElement, this);
                })
                .catch(error => console.error('Error fetching SVG:', error));
        }
    }
}

// Define the new element
customElements.define('icon-set', IconSet);
