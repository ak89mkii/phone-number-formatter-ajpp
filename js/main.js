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
		let gondor = numInputArr.toString().split(",").join('').slice(0, 13);
		formattedNumberValue.textContent = "1 (" + gondor;
		console.log(formattedNumberValue.textContent)
	}
}
	
// function testFunction(gondor) {
// 	testerText.innerHTML = "Tatooine";
// }

function testFunction() {

	testerText.innerHTML = "Vulcan!";
	console.log(formattedNumberValue.textContent)

	// // Get the text field
	// let copyText = formattedNumberValue;
  
	// // Select the text field
	// copyText.select();
	// copyText.setSelectionRange(0, 99999); // For mobile devices
  
	 // Copy the text inside the text field
	navigator.clipboard.writeText(formattedNumberValue.textContent);
  
	// Alert the copied text
	alert("Copied the Formatted Phone Number: " + formattedNumberValue.textContent);
}