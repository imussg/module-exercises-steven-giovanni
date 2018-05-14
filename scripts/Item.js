'use strict';


const Item = (function(){
	
	const validateName = (function(name) {
		// console.log(name ? name : '');
		try{
			if(name === '') {
				throw 'Name does not exist.';
			}
		}
		catch(err) {
			console.log("Cannot add item: " + err.message);
		}
	});

	function create(name) {
		return {
			id: cuid(),
			name: name,
			checked: false
		};
	}

  	return {
  		validateName: validateName,
  		create: create
  	};

}());