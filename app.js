var firecracker = document.getElementById('firecracker');
var audio = document.getElementById("sound");
firecracker.addEventListener('click', function(){
	firecracker.src = "assets/explosion.png";
	audio.play();

})