/** @format */

// Dynamic year update
document.addEventListener(
	"DOMContentLoaded",
	function () {
		const year = new Date().getFullYear();
		document.querySelector("#my_age").textContent = year - 1999;

		document.querySelector("#copyright-year").textContent = year;
	},
	false
);
