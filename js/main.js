const numberInputSection = document.getElementById("numberInput");
const formattedNumberValue = document.getElementById("formattedNumber");
const testerButton = document.getElementById("testButton");
const testerText = document.getElementById("testText");

	
numberInputSection.addEventListener("input",  function(e) {
    numberFormat(e);
});
	
testerButton.addEventListener("click",  function() {
    testFunction();
});

// Phone Number Formatting Change Function	
function numberFormat(e) {
	let numberInput = e.target.value;
	// var countArr = 0;
	let numInputArr = numberInput.split("");
	for (var i = 0; i < 11; i++) {
		if (i === 0) {
		} else if (i === 3) {
			numInputArr.splice(i,0,") ");
		} else if (i === 7) {
			numInputArr.splice(i,0,"-");
		} else if (i > 11) {
			// var finalNumInputArr = numInputArr;
		}
		var gondor = numInputArr.toString().split(",").join('').slice(0, 13);
		formattedNumberValue.textContent = "1 (" + gondor;
	}
}
	
// function testFunction(gondor) {
// 	testerText.innerHTML = "Tatooine";
// }