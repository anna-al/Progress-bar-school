const ProgressBarItem = document.querySelector('.ProgressBar');

const PredmetItem = document.querySelectorAll('.Predmet');
for (const Predmet of PredmetItem) {
    if (Predmet.classList.contains('ProgressBar_background-color_yellow')) {
        Predmet.classList.remove('ProgressBar_background-color_yellow');  
    } else {
        Predmet.classList.add('ProgressBar_background-color_yellow');  
    }
}
//PredmetItem.classList.toggle('ProgressBar_background-color_yellow');

console.log(ProgressBarItem);
console.log(PredmetItem);
console.log(PredmetItem.textContent);
console.log('Вот и я');

