// скрыть элемент
const childItems = document.querySelectorAll('.child');
const selectedChild = document.querySelector('.childSelect');

const klassItems = document.querySelectorAll('.klass');
const selectedKlass1 = document.querySelector('.klassSelect1');
const selectedKlass2 = document.querySelector('.klassSelect2');

//применяю стартовые значения принудительно чтобы всегда работало
const visibleChild0 = document.querySelector('.'+selectedChild.value);
const visibleKlasses0 = document.querySelectorAll('.'+selectedKlass.value);

//ребенок
for (const child of childItems) {
    child.classList.add('hidden');
}
visibleChild0.classList.remove('hidden');

//класс
for (const klass of klassItems) {
    klass.classList.add('hidden');
}
for (const visibleKlass of visibleKlasses0) {
    visibleKlass.classList.remove('hidden');
}
//*****закончила выставлять стартовые значения

//обработчик выбора ребенка
selectedChild.onchange = function () {
    for (const child of childItems) {
        child.classList.add('hidden');
    }
    const visibleChild = document.querySelector('.'+selectedChild.value);
    visibleChild.classList.remove('hidden');
}

//обработчик выбора класса 1
selectedKlass1.onchange = function () {
    for (const klass of klassItems) {
        klass.classList.add('hidden');
    }
    const visibleKlasses = document.querySelectorAll('.'+selectedKlass.value);
    for (const visibleKlass of visibleKlasses) {
        visibleKlass.classList.remove('hidden');
    }
}

//обработчик выбора класса 2
selectedKlass2.onchange = function () {
    for (const klass of klassItems) {
        klass.classList.add('hidden');
    }
    const visibleKlasses = document.querySelectorAll('.'+selectedKlass.value);
    for (const visibleKlass of visibleKlasses) {
        visibleKlass.classList.remove('hidden');
    }
}
