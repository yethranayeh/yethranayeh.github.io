function shutdown() {
	document.documentElement.innerHTML = "";
	document.body.style.backgroundColor = "black";
}
export const computer = { shutdown };
