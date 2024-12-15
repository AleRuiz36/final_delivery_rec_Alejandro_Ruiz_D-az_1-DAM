
const images = document.querySelectorAll('img');


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}


function handleScroll() {
    images.forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('show');
        }
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);


    console.log("JavaScript cargado");


    const images = document.querySelectorAll('img');
    console.log("Imágenes encontradas:", images);

}


