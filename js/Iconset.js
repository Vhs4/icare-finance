class IconSet extends HTMLElement {
    constructor() {
        super();
        this.imageUrl = this.getAttribute('imageUrl');
        this.imageClass = this.classList;
    }

    connectedCallback() {
        this.fetchAndReplaceIcon();
        
    }

    fetchAndReplaceIcon() {
        if (this.imageUrl) {
            fetch(this.imageUrl)
                .then(response => response.text())
                .then(svgContent => {
                    const tempContainer = document.createElement('svg');
                    
                    tempContainer.innerHTML = svgContent;

                    const svgElement = tempContainer.querySelector('svg');

                    if(this.classList.length>0){
                         svgElement.classList.add(this.imageClass);
                    }
                    
                    this.parentNode.replaceChild(svgElement, this);
                })
                .catch(error => console.error('Error fetching SVG:', error));
        }
    }
}

// Define the new element
customElements.define('icon-set', IconSet);
