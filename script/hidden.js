// скрыть элемент
const childItems = document.querySelectorAll('.child');
const selectedChild = document.querySelector('.childSelect');

const klassItems = document.querySelectorAll('.klass');
const selectedKlass = document.querySelector('.klassSelect');

//console.log(childItems)

//применяю стартовые значения принудительно чтобы всегда работало
// ******** в разработке *************
//console.log(selectedChild.value)
//for (const child of childItems) {
    //child.classList.add('hidden');
//}
//const visibleChild = document.querySelector('.'+selectedChild.value);
//visibleChild.classList.remove('hidden');
//*****закончила выставлять стартовые значения

//обработчик выбора ребенка

selectedChild.onchange = function () {
    for (const child of childItems) {
        child.classList.add('hidden');
    }
    const visibleChild = document.querySelector('.'+selectedChild.value);
    visibleChild.classList.remove('hidden');
}

//обработчик выбора класса
selectedKlass.onchange = function () {
//    console.log("2  ");    
//    console.log("2  "+selectedKlass.value);
    for (const klass of klassItems) {
//        console.log(klass);
        klass.classList.add('hidden');
    }
    const visibleKlasses = document.querySelectorAll('.'+selectedKlass.value);
    for (const visibleKlass of visibleKlasses) {
//        console.log('');
//        console.log(visibleKlass);
        visibleKlass.classList.remove('hidden');
    }
}
