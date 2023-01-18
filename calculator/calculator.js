window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	let values = {
		amount: 100000,
		years: 10,
		rate: 0.05,
	};
	document.getElementById("loan-amount").value = values.amount;
	document.getElementById("loan-years").value = values.years;
	document.getElementById("loan-rate").value = values.rate;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentValues = getCurrentUIValues();
	updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let p = values.amount;
	let n = values.years * 12;
	let i = values.rate / 12;
	let formula = (p * i) / (1 - (1 + i) ** -n);
	let monthPymt = formula.toFixed(2);
	console.log(monthPymt);
	return monthPymt;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyUI = document.getElementById("monthly-payment");
	monthlyUI.innerText = "$" + monthly;
}
