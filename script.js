const app = document.querySelector('.application');
const result = document.querySelector('.app-result');
const back = document.querySelector('.text ion-icon');

app.addEventListener('click', function () {
    result.classList.add('show');
});

back.addEventListener('click', function () {
    result.classList.remove('show');
});