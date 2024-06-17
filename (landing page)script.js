document.addEventListener('DOMContentLoaded', ()=>{
    const features = document.querySelectorAll('.feature');
    features.forEach(feature =>{
        feature.addEventListener('mouseenter', ()=>{
            feature.classList.add('hovered');
        });
        feature.addEventListener('mouseleave', ()=>{
            feature.classList.remove('hovered');
    });
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const zoomableImages = document.querySelectorAll('.zoomable');
const closeBtn = document.getElementById('close');

zoomableImages.forEach(image => {
    image.addEventListener('click', () =>{
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});

closeBtn.onclick = function(){
    modal.style.display = 'none';
}

window.onclick = function (event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}

const pricingImages = document.querySelectorAll('.price-card img');
pricingImages.forEach(image =>{
    image.addEventListener('click', ()=>{
        modal.style.display = 'block';
        modalImg.src = image.src;
    });
});
});
