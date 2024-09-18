const toogleCollapse = function () {
    const element = document.getElementById('collapseAside');
    if (element) {
        element.classList.toggle("show");
        console.log(element);
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

const collapse = function () {
    const element = document.getElementById('collapseAside');
    if (element) {
        element.classList.remove("show");
        console.log(element);
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}