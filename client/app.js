const multiply = require ("./multiplier.js");

class ViewManager {

  constructor() {
    this.numberOfInputs = 2;
  }
  
  connectEventHandlers() {
    document.getElementById("form-numbers")
      .addEventListener(
	"submit",
        this.onSubmit.bind(this));
    document.getElementById("addFactor")
      .addEventListener(
	"click",
	this.onClick.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    
    let numbers = Array.from(document.getElementsByTagName("input"))
	.map(number => parseInt(number.value, 10));

    let product = numbers.reduce(function(product, number, index) {
      // This is to ensure NaN is returned only if nothing is in either
      // of the first two inputs as per spec
      return (( index > 1 ) && !number ) ? product :
	multiply(product, number);
    });

    if (typeof(product) === "number") {
      this.renderProduct(product);
    }
  }

  onClick(event) {
    const tree = document.createDocumentFragment();
    const newDiv = this.createNewDiv();
    const lastInput = document
	  .getElementById(`div-input-num${this.numberOfInputs - 1}`);

    newDiv.appendChild(this.createNewInput());
    tree.appendChild(newDiv);
    lastInput.appendChild(tree);
    this.reloadCSS();
  }

  reloadCSS() {
    const links = document.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === "stylesheet") links[i].href += "";
    }
  }
  
  createNewInput(){
    const newInput = document.createElement("input");
    newInput.setAttribute("id",`input-num${this.numberOfInputs}`);
    newInput.setAttribute("type","text");
    newInput.setAttribute("autocomplete","off");
    return newInput;
  }
  
  createNewDiv(){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `div-input-num${++this.numberOfInputs}`);
    return newDiv;
  }
  
  renderProduct(product) {
    document.querySelector(".product").textContent = product;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
