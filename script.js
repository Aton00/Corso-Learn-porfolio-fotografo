const containerBackbutton = document.getElementById('containerBackbutton');

containerBackbutton.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', function () {
    let posY = window.scrollY;

    if (posY > 0) {
        containerBackbutton.style.display = 'block';
    }
     else {
        containerBackbutton.style.display = 'none';
    } 
});