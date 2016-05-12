var barista = {
   	skills: new Set(['Americano', 'Cappuccino', 'mocha',  'latte']),

    makeMeA(type = 'Americano') {
    	if (!this.skills.has(type)){
    	   var msg = `Can't make a ${type}`;
		   return Promise.reject(msg)
    	}

    	return new Promise((resolve, reject)=>{
    		setTimeout(()=>{
    			(Math.round(Math.random())) ?
    				resolve(`Here's your ${type}`) :
    				reject(`I'n not making YOU a ${type}`);
    		}, 1000 * Math.random());
    	});
    }
}
