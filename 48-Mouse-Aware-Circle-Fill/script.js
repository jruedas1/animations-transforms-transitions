// $(document).ready(function(){
//     $('.button.first').on('mouseenter', function(event) {
//         console.log(event.offsetY, event.offsetX);
//         $(this).find('.btn-bg').css({top: event.offsetY, left: event.offsetX});
//     });
// });

const button = document.querySelector('.button.first');
button.addEventListener('mouseenter', e => {
    const backgroundSpan = document.querySelector('.btn-bg');
    backgroundSpan.style.top = `${e.layerY}px`;
    backgroundSpan.style.left = `${e.layerX}px`
});