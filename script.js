const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener('click', playOnClick));
window.addEventListener('keydown', playOnKey);

function playOnClick(){
	let currentSound = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
	currentSound.play();
	currentSound.currentTime = 0;
	toggleBorder(this);
}

function playOnKey(event){
	let currentKey = event.keyCode;
	let sound = document.querySelector(`audio[data-key="${currentKey}"]`);
	sound.currentTime = 0;
	let key = document.querySelector(`div[data-key="${currentKey}"]`);
	sound.play();
	toggleBorder(key);
}

function toggleBorder(event){
	event.classList.toggle("playing");
	setTimeout(function(){event.classList.toggle("playing")}, 100);
}