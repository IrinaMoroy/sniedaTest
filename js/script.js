"use strict"

const now = new Date();

const dBox = document.getElementById('days');
const hBox = document.getElementById('hours');
const mBox = document.getElementById('minutes');
const sBox = document.getElementById('seconds');

const showTimer = (day, hour, min, sec) => {
	dBox.innerHTML = day;
	hBox.innerHTML = hour;
	mBox.innerHTML = min;
	sBox.innerHTML = sec;
}

const timer = times => {
	// объявляем идентификатор таймера и запускаем функцию 'setInterval'
	let tm = setInterval(() => {
		// уменьшаем значение секунд на 1
		times[3]--;
		if (times[1] == 0 && times[2] == 0 && times[2] == 0) {
			clearInterval(tm);
		} else {
            if (times[3] < 0) {
                times[2] = 59;
				times[1] = 59;
                times[0] -= 1;
            }
            
            if (times[3] < 0) {
				times[2]--;
                times[1]--;
            }
        }
 
		let d = (times[0] < 10) ? + times[0] : times[0],
			h = (times[1] < 10) ? + times[1] : times[1], 
			m = (times[2] < 10) ? + times[1] : times[2],
			s = (times[3] < 10) ? + times[2] : times[3];
 
		showTimer(d, h, m, s);
	}, 1000);
}

let times = [
	18 - now.getDay(),
    22 - now.getHours(),
    5 - now.getMinutes(),
    0 - now.getSeconds(),
];

timer(times);