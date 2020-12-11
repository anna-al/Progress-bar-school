// скрыть элемент
const childName1 ='andrei';
const childName2 ='victor';
const selectedChild = document.querySelector('.childSelect');
const childSelect1 = document.querySelector('.'+childName1);
const childSelect2 = document.querySelector('.'+childName2);

console.log('1  '+ selectedChild.value);
console.log('11  ');
console.log(childSelect1);
console.log('12  ');
console.log(childSelect2);

selectedChild.onchange = function () {
    console.log("2  "+selectedChild.value);
    if (selectedChild.value === childName1) {
        console.log("3  "+selectedChild.value);
        childSelect1.classList.remove('hidden');
        childSelect2.classList.add('hidden');
    }

    if (selectedChild.value === childName2) {
        console.log("4  "+selectedChild.value);
        childSelect2.classList.remove('hidden');
        childSelect1.classList.add('hidden');
    
    }
}

