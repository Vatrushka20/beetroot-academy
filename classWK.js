const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    let bar = document.querySelector('.bar');
    bar.value = (bar.value === bar.max) ? 0 : bar.value + 10;
});