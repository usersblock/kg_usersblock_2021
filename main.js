var output = ""
for (i = 2; i < process.argv.length; i++) {
	for(j = 0; j<process.argv[i].length;j++){
		switch(process.argv[i].charAt(j)){
			case "0":
				output +="Zero";
				break;
			case "1":
				output +="One";
				break;
			case "2":
				output +="Two";
				break;
			case "3":
				output +="Three";
				break;
			case "4":
				output +="Four";
				break;
			case "5":
				output +="Five";
				break;
			case "6":
				output +="Six";
				break;
			case "7":
				output +="Seven";
				break;
			case "8":
				output +="Eight";
				break;
			case "9":
				output +="Nine";
				break;
		}
	}
	if (i<process.argv.length-1){output+=", ";}
}

console.log(output);