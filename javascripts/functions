   console.log("test if monday is empty "+jQuery.isEmptyObject(monday));
	if (typeof monday == "undefined" || !(monday instanceof Array)) {
			var monday = [];
			console.log("initialized monday");
    }
	
	console.log("test if tuesday is empty "+jQuery.isEmptyObject(tuesday));
	if (typeof tuesday == "undefined" || !(tuesday instanceof Array)) {
			var tuesday = [];
			console.log("initialized tuesday");
    }

	console.log("test if wednesday is empty "+jQuery.isEmptyObject(wednesday));
	if (typeof wednesday == "undefined" || !(wednesday instanceof Array)) {
			var wednesday = [];
			console.log("initialized wednesday");
    }

	console.log("test if thursday is empty "+jQuery.isEmptyObject(thursday));
	if (typeof thursday == "undefined" || !(thursday instanceof Array)) {
			var thursday = [];
			console.log("initialized thursday");
    }

	console.log("test if friday is empty "+jQuery.isEmptyObject(friday));
	if (typeof friday == "undefined" || !(friday instanceof Array)) {
			var friday = [];
			console.log("initialized friday");
    }



	
	function menuFunction(theDiv) {
				document.getElementById('Home').style.display = 'none';
				document.getElementById('Monday').style.display = 'none';
				document.getElementById('Tuesday').style.display = 'none';
				document.getElementById('Wednesday').style.display = 'none';
				document.getElementById('Thursday').style.display = 'none';
				document.getElementById('Friday').style.display = 'none';
				document.getElementById(theDiv).style.display = 'block';
	}

	
	function mondayList(){
		monday.push(document.getElementById('monItemInput').value);
		console.log("Monday is  "+monday);
	}
	
	function tuesdayList(){
		tuesday.push(document.getElementById('tuesItemInput').value);
		console.log("Tuesday is  "+tuesday);
	}
	function wednesdayList(){
		wednesday.push(document.getElementById('wedItemInput').value);
		console.log("Wednesday is  "+wednesday);
	}
	function thursdayList(){
		thursday.push(document.getElementById('thursItemInput').value);
		console.log("Thursday is  "+thursday);
	}
	function fridayList(){
		friday.push(document.getElementById('friItemInput').value);
		console.log("Friday is  "+friday);
	}



	
	function printMonday(){
		console.log("length of monday is  "+monday.length);
		if (monday.length!=0){
			for(var i=0;i<monday.length;i++){
			document.getElementById("monItemInput").innerHTML = monday[i];
			}
		}
	}
	
	function printTuesday(){
		console.log("length of tuesday is  "+tuesday.length);
		if (tuesday.length!=0){
			for(var i=0;i<tuesday.length;i++){
			document.getElementById("tuesItemInput").innerHTML = tuesday[i];
			}
		}
	}

	function printWednesday(){
		console.log("length of wednesday is  "+wednesday.length);
		if (wednesday.length!=0){
			for(var i=0;i<wednesday.length;i++){
			document.getElementById("wedItemInput").innerHTML = wednesday[i];
			}
		}
	}

	
	function printThursday(){
		console.log("length of thursday is  "+thursday.length);
		if (thursday.length!=0){
			for(var i=0;i<thursday.length;i++){
			document.getElementById("thursItemInput").innerHTML = thursday[i];
			}
		}
	}
	
	
	function printFriday(){
		console.log("length of friday is  "+friday.length);
		if (friday.length!=0){
			for(var i=0;i<friday.length;i++){
			document.getElementById("friItemInput").innerHTML = friday[i];
			}
		}
	}
