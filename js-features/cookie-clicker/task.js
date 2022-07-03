const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");

cookie.onclick = function changeSizes (){
    
    clicker.textContent ++;
    if ((clicker.textContent % 2) === 0 ){
    cookie.width = 100;
    
    } else {
        cookie.width = 200;
    
    }
};
 
