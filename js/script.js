lucide.createIcons();


const technElements = document.querySelectorAll('.techn');
const ctxTechnElements = document.querySelectorAll('.ctx-techn');

technElements.forEach((technElement, index) => {
    technElement.addEventListener('mouseenter', () => {
        ctxTechnElements[index].style.display = 'block';
    });

    technElement.addEventListener('mouseleave', () => {
        ctxTechnElements[index].style.display = 'none';
    });

    console.log(index);
    
});