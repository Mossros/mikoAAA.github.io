// JavaScript Document
function onClickAAA(){
	var buttonImg = document.getElementById('button-img');
	var audio = document.getElementById('aaa');
	audio.loop = false;
	var startPlay = setTimeout(play,0);
	function play(){
		buttonImg.src = "img/AAA.png";
		audio.play();
		buttonImg.classList.add('shake');
		audio.addEventListener("ended",function(){
			buttonImg.src = "img/No A.png";
			buttonImg.classList.remove('shake');
		});
	}
}