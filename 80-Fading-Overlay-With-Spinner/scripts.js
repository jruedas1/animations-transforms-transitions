const button = document.getElementsByTagName("button")[0];
function showOverlay(){
    document.getElementById("overlay").className = 'show';
}

button.addEventListener('click', showOverlay);
