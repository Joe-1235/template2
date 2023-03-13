//start about me pop up
let oLinks = document.getElementById("otherlinks").parentElement;
let other = document.querySelector(".menu");
let htmlSKL = document.getElementById("htmlSKL");
let cssSKL = document.getElementById("cssSKL");
let javascriptSKL = document.getElementById("javascriptSKL");
let propSlvSKL = document.getElementById("propSlvSKL");
oLinks.onmouseover = function () {
	event.preventDefault();
	other.style.display = "block";
};
oLinks.onmouseout = function () {
	event.preventDefault();
	other.style.display = "none";
};
other.onmouseover = function () {
	event.preventDefault();
	other.style.display = "block";
};
other.onmouseout = function () {
	event.preventDefault();
	other.style.display = "none";
};
//end about me pop up
//start persentage
let pers = document.querySelector("header .persentage");
window.onscroll = function () {
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrollTop = document.documentElement.scrollTop;
	pers.style.width = `${(scrollTop / height) * 100}%`;
};
//end persentage
// start form
let sub = document.querySelector('.latestevents input[type="submit"]');
let inp = document.querySelector('.latestevents input[type="email"]');
sub.addEventListener("click", function () {
	if (inp.value === "") {
		event.preventDefault();
		return alert("please fill the input");
	} else if (inp.value !== "") {
		event.preventDefault();
		sub.style.backgroundColor = "green";
		sub.removeAttribute("value");
		sub.setAttribute("value", "done");
		let attr = document.createAttribute("readonly");
		inp.setAttributeNode(attr);
	}
});
// end form
// start latest event
let birth = new Date() - new Date("16 Feb, 2005"); //youm el milad
birth.setHours(6, 51);
let birthInYear = birth / 1000 / 60 / 60 / 24 / 365.242199; // 3ndy kam sana
let nextBirth = birthInYear; //3ndy kam sana m3 4el el 3lamat el34ria
nextBirth++; //elsana elly htmha (19)
let daysBetween = (Math.trunc(nextBirth) - birthInYear) * 365.242199; //na2s kam youm yl4an atm el sana elly gaya (19)
console.log(Math.round(daysBetween));
//tgg
let days = daysBetween;
console.log(days.toString().match(/.\w+/gi)[1] * 24);
days.toString().match(/\w+/gi)[1] * 24; //elsa3at
let hours = days;
console.log(days);
let mins = days % 60;
console.log(hours);
let secs = hours % 2;
//tgg
console.log(Math.round(daysBetween * 24));
console.log(Math.round(daysBetween * 24 * 60));
console.log(Math.round(daysBetween * 24 * 60 * 60));
// end latest event
//start pricing plans' button
let planButton = document.querySelectorAll(".plans > div .button button");
planButton[0].onclick = function () {
	if (
		planButton[1].classList.contains("toggle") ||
		planButton[2].classList.contains("toggle")
	) {
		return alert("choose one");
	} else {
		planButton[0].classList.toggle("toggle");
	}
};
planButton[1].onclick = function () {
	if (
		planButton[0].classList.contains("toggle") ||
		planButton[2].classList.contains("toggle")
	) {
		return alert("choose one");
	} else {
		planButton[1].classList.toggle("toggle");
	}
};
planButton[2].onclick = function () {
	if (
		planButton[0].classList.contains("toggle") ||
		planButton[1].classList.contains("toggle")
	) {
		return alert("choose one");
	} else {
		planButton[2].classList.toggle("toggle");
	}
};
//end pricing plans' button
/* start top videos*/
//create button
let btnMaker = function (n) {
	return document.querySelector(
		`.topvideos .vidcontainer .vidtitle button:nth-child(${n})`
	);
};
//change img
let img = document.querySelector(".pic img");
let changeUrl = function (n) {
	return img.setAttribute("src", `./photos/gameplay${n}.jpg`);
};
// change video title
let vidTitle = document.querySelector(".topvideos .vidcontainer .pic p");
let changeP = function (e) {
	vidTitle.innerHTML = e.innerHTML;
};
let btns = document.querySelectorAll(
	".topvideos .vidcontainer .vidtitle button"
);
btns.forEach((btnaya) => {
	btnaya.onclick = () => {
		changeUrl(btnaya.dataset.num);
		changeP(btnaya);
	};
});
/* end top videos*/
/* start my skills*/
let ourawesome = document.querySelector(".ourawesome");
let statsNum = document.querySelectorAll(".ourawesome .stats > div > h2");
let ourSkills = document.querySelector(".ourskills");
let sklbar = document.querySelectorAll(".main-color");
window.onscroll = function () {
	if (window.scrollY >= ourSkills.offsetTop - 200) {
		sklbar.forEach((sklbaraya) => {
			sklbaraya.style.left = 0;
		});
	}
	if (window.scrollY >= ourawesome.offsetTop - 150) {
		statsNum.forEach((i) => {
			increase(i);
		});
	}
	/* end my skills*/
	/* start my stats*/
};
function increase(e) {
	let handler = setInterval(() => {
		e.textContent === e.dataset.num ? clearInterval(handler) : e.textContent++;
	}, 2500 / e.dataset.num);
}

/* end my stats*/
/*
	if (window.scrollY >= ourawesome.offsetTop - 150) {
		statsNum.forEach((haya) => {
			let handler = setInterval(() => {
				haya.textContent++;
				if (haya.textContent >= haya.dataset.num) {
					clearInterval(handler);
				}
			}, 2000 / haya.dataset.num);
		});
	}
*/
