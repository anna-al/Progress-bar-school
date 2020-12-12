// скрыть элемент
const childItems = document.querySelectorAll('.child');
const selectedChild = document.querySelector('.childSelect');

const klassItems = document.querySelectorAll('.klass');
const selectedKlass = document.querySelector('.klassSelect');

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

//обработчик выбора класса
selectedKlass.onchange = function () {
    for (const klass of klassItems) {
        klass.classList.add('hidden');
    }
    const visibleKlasses = document.querySelectorAll('.'+selectedKlass.value);
    for (const visibleKlass of visibleKlasses) {
        visibleKlass.classList.remove('hidden');
    }
}
