const body = document.body;
const endTime = new Date('December 31 2021 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function creatSnowflake(){
    var snowFlake = document.createElement('i')
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');

    snowFlake.style.left = Math.random()*window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random()*3+2+ 's';
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random()*10 + 10 + 'px';
    document.body.appendChild(snowFlake);

    setTimeout(()=>{
        snowFlake.remove();
    },5000);
}

function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}


setInterval(creatSnowflake, 100);
setInterval(updateCountdown, 1000)
