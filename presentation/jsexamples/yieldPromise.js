(function(){
	"use strict";
	function* fileList(listOfNames, listOfExtensions){
		for(var file of listOfNames){
			for(var ext of listOfExtensions){
				yield `${file}.${ext}`;
			}
		}
	}

	function* dlFiles(fileList){
		for(var file of fileList){
			yield dlFile(file);
		}
	}

	function dlFile(file, delay=1000){
		return new Promise((resolve, reject)=>{
			var xhr = new XMLHttpRequest();
			xhr.open("GET", `${file}?foo=${Math.random()}`);
			xhr.onload = ( e ) => {
				if(e.target.status === 200) {
					return resolve({data: e.target.responseText, type:e.target.responseType}) 
				}
				reject(new Error("HTTP Error: " + e.target.status));			
			}; 
			xhr.onerror = xhr.ontimeout = reject;
			if(delay){
				setTimeout(()=>{xhr.send()}, delay);
			}else{
				xhr.send();
			}
		})
	}

	function processData({data, type}){
		console.log(data, type);
	}

	document.querySelector("button").onclick = () =>{
		var list = fileList(["data/filea", "data/fileb"], 
			                ["json", "xml"])
		for(var dl of dlFiles(list)){
			dl.then(processData, (err) => { console.log("err")});
		}
		dl.then(
			()=>{
				var list = fileList(["data/fileb", "data/filea"], ["xml", "json"])
				sequentialDownload(list);
			}
		)

		function sequentialDownload(list){
			var next = list.next().value;
			if(next){
				dlFile(next).then(processData).then(()=>{sequentialDownload(list)});
			}
		}
	}
}());