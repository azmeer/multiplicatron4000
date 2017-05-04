const multiply = require ('./multiplier.js');

class ViewManager {

  constructor() {
    this.numberOfInputs = 2;
  }
  
  connectEventHandlers() {
    document.getElementById('form-numbers')
      .addEventListener(
	'submit',
        this.onSubmit.bind(this));
    document.getElementById('addFactor')
      .addEventListener(
	'click',
	this.onClickAddFactor.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    
    let numbers = Array.from(document.getElementsByTagName('input'))
	.map(number => parseInt(number.value, 10));

    let product = numbers.reduce(function(product, number, index) {
      // This is to ensure NaN is returned only if nothing is in either
      // of the first two inputs as per spec
      return (( index > 1 ) && isNaN(number)) ? product :
	multiply(product, number);
    }, 1);

    this.renderProduct(product);
  }

  onClickAddFactor(event) {
    const tree = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    const form = document.getElementById('form-numbers');
    const bar = document.getElementById('bar');

    newDiv.appendChild(this.createNewInput());
    tree.appendChild(newDiv);
    form.insertBefore(tree, bar);
  }

  createNewInput(){
    const newInput = document.createElement('input');
    newInput.setAttribute('id',`input-num${this.numberOfInputs}`);
    newInput.setAttribute('type','text');
    newInput.setAttribute('autocomplete','off');
    return newInput;
  }
  
  renderProduct(product) {
    document.querySelector('.product').textContent = product;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
