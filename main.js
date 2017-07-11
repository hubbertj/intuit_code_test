'use strict';
/**
"usage": "node main.js <string>"
**/

var removeDuplicates = function(str){
	var reg = /^[a-z]+$/i;
	var letterCollection = [];
	var chars = str.split('');

	if(!str.match(reg)){
		console.error('This tool only can use a-z or A-Z');
		console.error('please try again');
		return;
	}

	for(var c in chars){
		if(letterCollection.indexOf(chars[c]) === -1){
			letterCollection.push(chars[c]);
		}
	}

	console.log(letterCollection.join(""));
};

var getArgument = function(){
	if (process.argv && process.argv.length > 2 && process.argv[2] !== ''){
		return process.argv[2]
	}else{
		console.error('usage: node main.js <string>');
		console.error('please try again');
		return null;
	}
}

var strArgument = getArgument();
if(strArgument){
	removeDuplicates(strArgument);
}
return 0;