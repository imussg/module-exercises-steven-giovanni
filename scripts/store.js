'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function () {
  return {
    items: [
	    { id: cuid(), name: 'apples', checked: false },
	    { id: cuid(), name: 'oranges', checked: false },
	    { id: cuid(), name: 'milk', checked: true },
	    { id: cuid(), name: 'bread', checked: false }
	  ],
	  hideCheckedItems: false,
	  searchTerm: '',
	  findById: (function(id) {
	  	return this.items.find(function(x, index) {
	  		return x.id === id;
	  	});
	  }),
	  addItem: function(n) {
	  	try{
	  		Item.validateName(n);
	  		this.items.push({
	  			id: cuid(),
	  			name: n,
	  			checked: false
	  		});
	  	} catch(err) {console.log('in the store version of this error');}
	  },
	  findAndToggleChecked: function(id) {
	  	const item = this.findById(id);
	  	item.checked = !item.checked;
	  },
	  findAndUpdateName: function(id, name) {
	  	try {
		  	Item.validateName(name);
		  	const item = this.findById(id);
		  	item.name = name;
      } catch(err) {console.log('cannot update name');}
	  },
	  findAndDelete: function(id) {
	  	this.items.splice(this.items.findIndex(function(item) {
	  		return item.id === id;
	  	}), 1);
		},
		toggleCheckedFilter: function(){
			this.hideCheckedItems = !this.hideCheckedItems;
		},
		setSearchTerm(arg){
			this.searchTerm = arg;
		},
  };
}() );
