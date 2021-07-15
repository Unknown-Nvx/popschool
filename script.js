const contactBtn = document.getElementById('contact-btn');

// contactBtn.addEventListener('click', (e) => {
    
//     let x = e.clientX - e.target.offsetLeft;
//     let y = e.clientY - e.target.offsetTop;
//     let circle = document.createElement('span');

//     circle.classList.add('btn-circle-effect');
//     circle.style.left = x + 'px';
//     circle.style.top = y + 'px';

//     contactBtn.appendChild(circle);
// })


// const underlineElements = document.getElementsByClassName('underline-magical');

// for(let i = 0; i < underlineElements.length; i++){

//     underlineElements[i].addEventListener('click', (e) => {
//         let text = e.target.innerText;
//     })
// }

$(document).ready(function(){

    $(function(){
    $('#pin-emoji').draggable({
        drag: (event, ui) => {
            console.log(event);
        }
    });
});

$('#pin-emoji').click((e) => {
    console.log(e);
});

 });