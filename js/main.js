'use strict'
{ 
 const direction = [
   '右', '左'
 ];
 const start = document.getElementById('start');

 const stop = document.getElementById('stop');

 const foot = document.getElementById('direction');

 const music = new Audio('sound/Countdown01-1.mp3');

 const sound = new Audio('sound/小鼓（こつづみ）.mp3');

 let i = 0;

 
 
function delite (){
  foot.textContent ='';
}
 
 

 function footwork (){
  sound.play();

  foot.textContent = direction[Math.floor(Math.random()*2)];

  const second = document.getElementById('color').value *1000;

  const interval = second - 500;

  const count = document.getElementById('count').value;

  const intervalId = setTimeout(footwork,second);

  const IntervalId = setTimeout(delite,interval);

  i++;

 
 if(i > count){
   clearTimeout(intervalId);
   clearTimeout(IntervalId);
  }
  
}

start.addEventListener('click', () =>{
  music.play();
  i = 0;
  setTimeout(footwork,3000);
 });

stop.addEventListener('click', () =>{
  i = document.getElementById('count').value;
  
 });
}