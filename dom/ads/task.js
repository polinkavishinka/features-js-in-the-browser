const rotatorCase = document.querySelectorAll('.rotator__case');
console.log (rotatorCase);

let arrRotatorCase = Array.from(rotatorCase);
console.log (arrRotatorCase);

let lengthArr = arrRotatorCase.length;
console.log (lengthArr);

let i = 0;

setInterval(()=>{
    arrRotatorCase[i].classList.remove('rotator__case_active');
    if ( i == lengthArr -1){
     i = 0
     arrRotatorCase[i].classList.add('rotator__case_active');
    } else {
        ++i;
        arrRotatorCase[i].classList.add('rotator__case_active');
    }
},1000)