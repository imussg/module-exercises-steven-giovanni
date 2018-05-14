
/* global shoppingList, Item cuid */

// eslint-disable-next-line no-unused-vars
// const store = {
  
// };

$(document).ready(function() {
	shoppingList.bindEventListeners();
	shoppingList.render();
	const itemNames = [ 'asdf', 'apples', 'pears' ];
	itemNames.forEach(name => {
		try {
		    Item.validateName(name);
		    store.items.push(Item.create(name));
	  	} catch(error) {
	    console.log('Cannot add item: ' + error.message);
	  }
	});
	shoppingList.render();
});
