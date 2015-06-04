	var cekPalindrome = function(no) {
		var mod, rev = 0, temp;  
		temp = no;
		//Reverse the number obtained from the function parameter.
		while (no > 0) { 
			mod = no % 10;
			rev = rev * 10 + mod;
			no = no / 10;
			no = parseInt(no);
		}
		//If the number after reversed still the same with the number before reversed, then return 'true' value.
		if (temp == rev) {
			return true;
		} else {return false;}
	}
	
	var Palindrome = function() {
		var number = parseInt(document.getElementById("input").value);
		if (number > 0) {
			document.write("<p align='center'>");
			//Write palindrome numbers in descending orders.
			for (var i = number; i >= 0; i--) {
				if (cekPalindrome(i) == true) {
				document.write(i + " ");
				}
			}; document.write("</p><br/ ><form><p align='center'><button onClick='window.location.reload()'>Back</button></p></form>");
		} else {document.getElementById("output").innerHTML = "Minimum input is 1";}
	}