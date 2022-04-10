
let array = ["anger", "beach", "cobra", "dress", "earth", "fence",];
let inc = 0; 
window.onload = function(){
    document.getElementsByName(`main`)[0].value = "#####";

}; 

// any key pressed
$(document).keyup(function(event) {
	let msDelay = Math.floor(Math.random() * 4000) + 1000
	console.log ("The number is random", msDelay);
    if (event.which === 32) { // was spacebar pressed?
        // delay the next line of code for a random value x ms
		//setTimeout(() => {console.log("this is the first message")}, 5000);
		//setTimeout(event.whic, 10000);
		console.log("Starting timeout");
		setTimeout(() => {document.getElementsByName(`main`)[0].value = array[inc];}, msDelay);
        //document.getElementsByName(`main`)[0].value = array[inc];
		setTimeout(() => {document.getElementsByName(`main`)[0].value = "#####";}, msDelay + 25);
		console.log("Word flashed");
        // have another timer for a constant ms time to show the word -> then set back to plus
        inc++;
		inc = inc % array.length


        // for ref  https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
        //           https://www.w3schools.com/js/js_timing.asp
        //setTimeout(() => {console.log("this is the first message")}, 5000);

        // console.log();
    }
	//
});  


//function myFunction() {
    //alert('Hello');
//}