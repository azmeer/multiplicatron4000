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
    
    let num1 = document.getElementById(
      "input-num1").value;
    let num2 = document.getElementById(
      "input-num2").value;
    
    num1 = parseInt(num1,10);
    num2 = parseInt(num2,10);

    const product = multiply(num1, num2);

    this.renderProduct(product);

  }

  onClick(event) {
    const tree = document.createDocumentFragment();
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");

    newDiv.setAttribute("id", `div-input-num${++this.numberOfInputs}`);
    newInput.setAttribute("id",`input-num${this.numberOfInputs}`);
    newInput.setAttribute("type","text");
    newInput.setAttribute("autocomplete","off");
    newDiv.appendChild(newInput);
    tree.appendChild(newDiv);
    document.getElementById(`div-input-num${this.numberOfInputs - 1}`)
      .appendChild(tree);
  }
  
  renderProduct(product) {
    document.querySelector(".product").textContent = product;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
