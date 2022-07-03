let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
 
	function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	}
	
	let hole = getHole (index);

	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole") === true) {
			dead.innerHTML++;
            if (dead.textContent == 10) {
                alert ("Вы победили!");
                dead.innerHTML = 0;
                lost.innerHTML= 0;
            }    
		} else {
			lost.innerHTML++;
            if (lost.textContent == 5) {
                alert ("Вы проиграли");
                dead.innerHTML = 0;
                lost.innerHTML = 0;
            }
		}
	}
}
