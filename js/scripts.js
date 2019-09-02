//business logic
let blanks = ["cheese","onion","mushroom","olive","bacon","turkey"];
var sizePrice = 0;
var totalToppings = 0;
var finalPrice = 0;

// function AddToppings();


//Create pizza toppings object
function ToppingsPrices(cheese,onion,mushroom,olive,bacon,turkey) {
	this.cheese = cheese;
	this.onion = onion;
	this.mushroom = mushroom;
	this.olive = olive;
	this.bacon = bacon;
	this.turkey = turkey;
}

//instantiate the pricing object
let myToppingsPrices = new ToppingsPrices(200,200,200,200,200, 200);

//Create pizza size prices
function PizzaSizePrice(small,large,family) {
	this.small = small;
	this.large = large;
	this.family = family;
}
//Create an instance of the size price
let myPizzaSizePrice = new PizzaSizePrice(900,1100,1300);

//Create a method for final price

//Create pizza object
function Pizza(size,toppings) {
	this.size = size;
	this.totalToppings = toppings;
}
// //Create an instance of the object pizza
// myPizza = new Pizza(myPizzaSizePrice,myToppingsPrices);

//Create a prototype for final price on object pizza
Pizza.prototype.getFinalPrice = function(myPizzaSizePrice,myToppingsPrices) {
	return myPizzaSizePrice + myToppingsPrices;
};

//User interface logic
$(function () {

	$("input#option1").click(function () {
		// $("#size-price").show();
		// $("#size-price").toggle();
		// let price = "Ksh" + Ksh("input#option1").val();
		sizePrice = myPizzaSizePrice.small;
		let displaySizePrice = "Ksh" + sizePrice;
		let displayFinalPrice = "Ksh" + sizePrice;
		console.log(sizePrice);

		//Display subtotal and final price
		$("#size-price").show().text(displaySizePrice);
		$("#final-price").show().text(displaySizePrice);
	});
	$("input#option2").click(function () {

		sizePrice = myPizzaSizePrice.large;
		let displaySizePrice = "Ksh" + sizePrice;
		let displayFinalPrice = "Ksh" + sizePrice;
		console.log(sizePrice);

		//Display subtotal and final price
		$("#size-price").show().text(displaySizePrice);
		$("#final-price").show().text(displaySizePrice);

	});
	$("input#option3").click(function () {
		// $("#size-price").show();

		sizePrice = myPizzaSizePrice.family;
		let displaySizePrice = "Ksh" + sizePrice;
		let displayFinalPrice = "Ksh" + sizePrice;
		console.log(sizePrice);

		//Display subtotal and final price
		$("#size-price").show().text(displaySizePrice);
		$("#final-price").show().text(displaySizePrice);

	});
	// blanks.forEach(function (blank) {
	// 	let arr = parseInt(Ksh("#" + blank).val);
	// 	console.log(arr);
	// 	const totalToppings = arr => arr.reduce((a, b) => a + b, 0);
	// 	$("#toppings-price").show().text("Ksh" + totalToppings);
	// 	// console.log(totalToppings);
	// });
	// $("input#cheese").checkbox(function () {

	var checkCheese = $('input[id="cheese"]');
	let numCheese = parseInt(myToppingsPrices.cheese);
	checkCheese.change(function () {
		if (this.checked === true) {
			totalToppings += numCheese;
			console.log(numCheese);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			finalPrice = sizePrice + totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numCheese;
			console.log(numCheese);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		}
	});

	var checkOnion = $('input[id="onion"]');
	let numOnion = parseInt(myToppingsPrices.onion);
	checkOnion.change(function () {
		if (this.checked === true) {
			totalToppings += numOnion;
			console.log(numOnion);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numOnion;
			console.log(numOnion);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkMushroom = $('input[id="mushroom"]');
	let numMushroom = parseInt(myToppingsPrices.mushroom);
	checkMushroom.change(function () {
		if (this.checked === true) {
			totalToppings += numMushroom;
			console.log(numMushroom);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numMushroom;
			console.log(numMushroom);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkOlive = $('input[id="olive"]');
	let numOlive = parseInt(myToppingsPrices.olive);
	checkOlive.change(function () {
		if (this.checked === true) {
			totalToppings += numOlive;
			console.log(numOlive);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numOlive;
			console.log(numOlive);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkBacon = $('input[id="bacon"]');
	let numBacon = parseInt(myToppingsPrices.bacon);
	checkBacon.change(function () {
		if (this.checked === true) {
			totalToppings += numBacon;
			console.log(numBacon);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numBacon;
			console.log(numBacon);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkTurkey = $('input[id="turkey"]');
	let numTurkey = parseInt(myToppingsPrices.turkey);
	checkTurkey.change(function () {
		if (this.checked === true) {
			totalToppings += numTurkey;
			console.log(numTurkey);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numTurkey;
			console.log(numTurkey);
			$("#toppings-price").show().text("Ksh" + totalToppings);

			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#final-price").text("Ksh" + finalPrice);
			console.log(finalPrice);
		}
	});

  // home delivery button
$("button.deliver").click(function(){
  $(".pizzatable").hide();
  $(".choice h2").hide();
  $(".delivery").slideDown(1000);
  $("#addedprice").hide();
  $("button.deliver").hide();
  $("#pizzatotal").hide();
  let deliveryamount= checkoutTotal+200;
  console.log("You will pay sh. "+deliveryamount+" on delivery");
  $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
});
	// Create an instance of the object pizza
	// var myPizza = new Pizza(sizePrice,totalToppings);
	//Display final pizza price

		// if ($("input#cheese").change(function () {
		//
		// })) {
		// // let check = $("input#cheese").prop("checked");
		// console.log(myToppingsPrices.cheese);
		// 	// let numCheese = parseInt($("#cheese").val());
		// 	let numCheese = parseInt(myToppingsPrices.cheese);
		// 	console.log(numCheese);
		// 	totalToppings += numCheese;
		// 	console.log(totalToppings);
		// // }
		// 	$("#toppings-price").show().text("checkMushroom" + totalToppings);
		//

		// $("#toppings-price").show().text("Ksh" + totalToppings);
	// });

	// $("input#onion").click(function () {
	// 	let numOnion = parseInt($("#onion").val());
	// 	totalToppings += numOnion;
	// 	$("#toppings-price").show().text("$" + totalToppings);
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#mushroom").click(function () {
	// 	let numMushroom = parseInt($("#mushroom").val());
	// 	totalToppings += numMushroom;
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#olive").click(function () {
	// 	let numOlive = parseInt($("#olive").val());
	// 	totalToppings += numOlive;
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#bacon").click(function () {
	// 	let numBacon = parseInt($("#bacon").val());
	// 	totalToppings += numBacon;
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// $("input#turkey").click(function () {
	// 	let numTurkey = parseInt($("#turkey").val());
	// 	totalToppings += numTurkey;
	//
	// 	// $("#toppings-price").show().text("$" + totalToppings);
	// });
	// totalToppings = arr => arr.reduce((a, b) => a + b, 0);
	// $("#toppings-price").text("$" + totalToppings);
	// console.log(totalToppings);

});
