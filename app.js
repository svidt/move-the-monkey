const circle = document.querySelector('#circle');
const monkeyHide = document.querySelector('.closed');
const monkeyShow = document.querySelector('.open');

window.addEventListener('load', () => {
    circle.style.position = 'relative';
    circle.style.left = 0;
    circle.style.top = 0;
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - 25 + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + 25 + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - 25 + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + 25 + 'px';
            break;
    }
})

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
})

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
})

monkeyHide.addEventListener('click', () => {
    if (monkeyShow.classList.contains('open')) {
        monkeyShow.classList.add('active');
        monkeyHide.classList.remove('active');
    }
});

monkeyShow.addEventListener('click', () => {
    if (monkeyHide.classList.contains('closed')) {
        monkeyHide.classList.add('active');
        monkeyShow.classList.remove('active');
    }
});