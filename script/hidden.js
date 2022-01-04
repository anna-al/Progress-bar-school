// скрыть элемент
const childItems = document.querySelectorAll('.child');
const selectedChild = document.querySelector('.childSelect');

const klassItems = document.querySelectorAll('.klass');
const selectedKlass1 = document.querySelector('.klassSelect1');
const selectedKlass2 = document.querySelector('.klassSelect2');

//применяю стартовые значения принудительно чтобы всегда работало
const visibleChild0 = document.querySelector('.'+selectedChild.value);
const visibleKlasses01 = document.querySelectorAll('.'+selectedKlass1.value);
const visibleKlasses02 = document.querySelectorAll('.'+selectedKlass2.value);

//ребенок
for (const child of childItems) {
    child.classList.add('hidden');
}
visibleChild0.classList.remove('hidden');

//класс
for (const klass of klassItems) {
    klass.classList.add('hidden');
}
for (const visibleKlass of visibleKlasses01) {
    visibleKlass.classList.remove('hidden');
}
for (const visibleKlass of visibleKlasses02) {
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
    for (const klass1 of klassItems) {
        klass1.classList.add('hidden');
    }
    const visibleKlasses1 = document.querySelectorAll('.'+selectedKlass1.value);
    for (const visibleKlass1 of visibleKlasses1) {
        visibleKlass1.classList.remove('hidden');
    }
}

//обработчик выбора класса 2
selectedKlass2.onchange = function () {
    for (const klass2 of klassItems) {
        klass2.classList.add('hidden');
    }
    const visibleKlasses2 = document.querySelectorAll('.'+selectedKlass2.value);
    for (const visibleKlass2 of visibleKlasses2) {
        visibleKlass2.classList.remove('hidden');
    }
}
