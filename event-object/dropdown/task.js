const dropdownList = document.querySelector('.dropdown__list '),
dropdownValue  = document.querySelector('.dropdown__value '),
dropdownItem =  Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.onclick = function  (){
    dropdownList.classList.toggle('dropdown__list_active');
}
console.log (dropdownItem);

dropdownList.onclick = function (event){
event.preventDefault();
dropdownValue.textContent = event.target.textContent;
dropdownList.classList.remove('dropdown__list_active');

    
}
