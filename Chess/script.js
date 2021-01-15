'use strict';

let sec = document.querySelector('section'), d, t = true;

for(let i = 0; i < 8; i++){
	for(let j = 0; j < 8; j++){
		d = document.createElement('div');
		sec.appendChild(d)
		d.classList.add('blok');

		if(j === 0){
			t = !t;
		} 

		if(t){
			d.classList.add('black');
		}
		else{
			d.classList.add('white');
		}

		t = !t;
	}
}




