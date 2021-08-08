"use strict"

const now = new Date();

const hBox = document.getElementById('hours');
const mBox = document.getElementById('minutes');
const sBox = document.getElementById('seconds');

const showTimer = (hour, min, sec) => {
	hBox.innerHTML = hour;
	mBox.innerHTML = min;
	sBox.innerHTML = sec;
}

const timer = times => {
	// объявляем идентификатор таймера и запускаем функцию 'setInterval'
	let tm = setInterval(() => {
		// уменьшаем значение секунд на 1
		times[2]--;
 
		// проверяем, не обнулился ли таймер и если да, то останавливаем 'setInterval'
		if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
			clearInterval(tm);
		} else {
            if (times[2] < 0) {
                // если секунды имеют отрицательное значение, это значит, что
                // они перешли 0 и должен начаться отсчёт новой минуты,
                // при этом секунды становятся равными своему максимальному значению - 59,
                // а минуты уменьшаются на 1
                times[2] = 59;
                times[1]--;
            }
            
            if (times[1] < 0) {
                // аналогично, как для минут и секунд
                // минуты выставляем в значение 59, а час уменьшаем на 1
                times[1] = 59;
                times[0]--;
            }
        }
 
		// если показания или часов, или минут, или секунд меньше 10,
		// ставим перед показанием ноль
		let h = (times[0] < 10) ? '0' + times[0] : times[0], 
			m = (times[1] < 10) ? '0' + times[1] : times[1],
			s = (times[2] < 10) ? '0' + times[2] : times[2];
 
		// выводим значение таймера на экран
		showTimer(h, m, s);
	}, 1000);
}

let times = [
    12 - now.getHours(),
    7 - now.getMinutes(),
    0 - now.getSeconds(),
];

timer(times);