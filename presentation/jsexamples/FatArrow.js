this.whoAmI = String(this)

(function(){
	this.whoAmI = this + " inside"; 
	var fat = () => console.log(this.whoAmI);
	 

	var func = function(){
		console.log(this.whoAmI)
	}
})()