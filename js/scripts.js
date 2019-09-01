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
let myToppingsPrices = new ToppingsPrices(2,2,2,2,2, 2);

//Create pizza size prices
function PizzaSizePrice(small,large,family) {
	this.small = small;
	this.large = large;
	this.family = family;
}
//Create an instance of the size price
let myPizzaSizePrice = new PizzaSizePrice(8,10,13);

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
