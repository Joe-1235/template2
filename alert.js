/* start services alert*/
//function create element
let cr = (e) => document.createElement(e);
let detail = cr("div");
detail.classList.add("detail");
//create child
let child = cr("div");
child.classList.add("detail-child");
//append child to detail
detail.append(child);
//create text
let p = cr("p");
p.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptastempora quaerat deleniti aliquid! Nihil consectetur mollitia beataevoluptate fugit, quae, dolores laboriosam eos, officia odio undeadipisci nisi. Asperiores id pariatur hic vero quae nesciunt magnamerror sunt, delectus obcaecati aliquid illo, animi fugiat veniam quodquasi facilis, debitis nihil!`;
let delBtn = cr("p");
delBtn.innerHTML = "x";
delBtn.classList.add("del-btn");
//add i
let i = cr("i");
//append text to detail-child
child.append(i);
child.append(p);
child.append(delBtn);
document.body.append(detail);
//btn onclick show detail
let btnAdd = document.querySelectorAll(".srvbar p");
btnAdd[0].onclick = function () {
	addregular();
	i.classList.add("fa-shield-halved");
};
btnAdd[1].onclick = function () {
	addregular();
	i.classList.add("fa-wrench");
};
btnAdd[2].onclick = function () {
	addregular();
	i.classList.add("fa-compass");
};
btnAdd[3].onclick = function () {
	addregular();
	i.classList.add("fa-code");
};
btnAdd[4].onclick = function () {
	addregular();
	i.classList.add("fa-brush");
};
btnAdd[5].onclick = function () {
	addregular();
	i.classList.add("fa-chart-simple");
};
//function
let addregular = function () {
	detail.style.cssText += `display:block;position:fixed;top:0;right:0;`;
	i.classList.remove("fa-shield-halved");
	i.classList.remove("fa-wrench");
	i.classList.remove("fa-compass");
	i.classList.remove("fa-code");
	i.classList.remove("fa-brush");
	i.classList.remove("fa-chart-simple");
	i.classList.add("fa-solid");
	setTimeout(() => (child.style.cssText += `top:50%;`), 100);
};
//btn onclick delete detail
delBtn.addEventListener("click", function () {
	child.style.cssText += `top:150%;`;
	setTimeout(() => (detail.style.cssText += "display:none;"), 100);
});
/*end service alert */
