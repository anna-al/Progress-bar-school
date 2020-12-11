// скрыть элемент
const childName1 ='andrei';
const childName2 ='victor';
const selectedChild = document.querySelector('.childSelect');
const childSelect1 = document.querySelector('.'+childName1);
const childSelect2 = document.querySelector('.'+childName2);

const klassItems = document.querySelectorAll('.klass');
const selectedKlass = document.querySelector('.klassSelect');


console.log('1  '+ selectedChild.value);
console.log('11  ');
console.log(childSelect1);
console.log(klassItems);


selectedChild.onchange = function () {
    if (selectedChild.value === childName1) {
        childSelect1.classList.remove('hidden');
        childSelect2.classList.add('hidden');
    }
    if (selectedChild.value === childName2) {
        childSelect2.classList.remove('hidden');
        childSelect1.classList.add('hidden');
    
    }
}

selectedKlass.onchange = function () {
    console.log("2  ");    
    console.log("2  "+selectedKlass.value);
    for (const klass of klassItems) {
        console.log(klass);
        klass.classList.add('hidden');
    }
    const visibleKlasses = document.querySelectorAll('.'+selectedKlass.value);
    for (const visibleKlass of visibleKlasses) {
        console.log('');
        console.log(visibleKlass);
        visibleKlass.classList.remove('hidden');
    }
}
