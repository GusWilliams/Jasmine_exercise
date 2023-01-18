it("should calculate the monthly rate correctly", function () {
	let values = { amount: 100000, years: 10, rate: 0.05 };
	expect(calculateMonthlyPayment(values)).toEqual("1060.66");
});

it("should return a result with 2 decimal places", function () {
	let values = { amount: 100000, years: 10, rate: 10 };
	expect(calculateMonthlyPayment(values)).toEqual("83333.33");
});
