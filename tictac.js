var game=1;
var count=0;
var i;
var j;
var r;
var k=0;
var l=0;
var m=0;

var myData = localStorage['objectToPass'];
localStorage.removeItem( 'objectToPass' ); // Clear the localStorage
var firstData = myData[0];


function start(p1,p2){
	i = document.getElementById('player1').value;
	j = document.getElementById('player2').value;
	alert("Best of luck "+ i + " And "+j);
	document.getElementById("b1").disabled="0";
	document.getElementById("b2").disabled="0";
	document.getElementById("b3").disabled="0";
	document.getElementById("b4").disabled="0";
	document.getElementById("b5").disabled="0";
	document.getElementById("b6").disabled="0";
	document.getElementById("b7").disabled="0";
	document.getElementById("b8").disabled="0";
	document.getElementById("b9").disabled="0";

	document.getElementById("xyz").value=firstData;
}
function clickbtn(btn) {
	if(game==1){
		document.getElementById(btn).value="x";
		game=game-1;
		count=count+1;
		document.getElementById(btn).disabled="disabled";
		winner();
	}
	else{
		document.getElementById(btn).value="O";
		game=game+1;
		count=count+1;
		document.getElementById(btn).disabled="disabled";
		winner();
	}
}
function winner(){
	if(document.getElementById("b1").value=="x" && document.getElementById("b2").value=="x" && document.getElementById("b3").value=="x" || document.getElementById("b4").value=="x" && document.getElementById("b5").value=="x" && document.getElementById("b6").value=="x" || document.getElementById("b7").value=="x" && document.getElementById("b8").value=="x" && document.getElementById("b9").value=="x" || document.getElementById("b1").value=="x" && document.getElementById("b4").value=="x" && document.getElementById("b7").value=="x" || document.getElementById("b2").value=="x" && document.getElementById("b5").value=="x" && document.getElementById("b8").value=="x" || document.getElementById("b3").value=="x" && document.getElementById("b6").value=="x" && document.getElementById("b9").value=="x" || document.getElementById("b1").value=="x" && document.getElementById("b5").value=="x" && document.getElementById("b9").value=="x" || document.getElementById("b3").value=="x" && document.getElementById("b5").value=="x" && document.getElementById("b7").value=="x"){
		alert("Congrats "+ i +"\n"+" You have won the game");
		k=k+1;
		document.getElementById('pl1').value=k;
		count=0;
		Reset();
	}
	else if(document.getElementById("b1").value=="O" && document.getElementById("b2").value=="O" && document.getElementById("b3").value=="O" || document.getElementById("b4").value=="O" && document.getElementById("b5").value=="O" && document.getElementById("b6").value=="O" || document.getElementById("b7").value=="O" && document.getElementById("b8").value=="O" && document.getElementById("b9").value=="O" || document.getElementById("b1").value=="O" && document.getElementById("b4").value=="O" && document.getElementById("b7").value=="O" || document.getElementById("b2").value=="O" && document.getElementById("b5").value=="O" && document.getElementById("b8").value=="O" || document.getElementById("b3").value=="O" && document.getElementById("b6").value=="O" && document.getElementById("b9").value=="O" || document.getElementById("b1").value=="O" && document.getElementById("b5").value=="O" && document.getElementById("b9").value=="O" || document.getElementById("b3").value=="O" && document.getElementById("b5").value=="O" && document.getElementById("b7").value=="O"){
		alert("Congrats "+ j +"\n"+" You have won the game");
		l=l+1;
		document.getElementById('pl2').value=l;
		count=0;
		Reset();
	}
	else if( count==9){
		alert("Match is Draw !!!");
		m=m+1;
		document.getElementById('draw').value=m;
		count=0;
		Reset();
	}
}	
function Reset(){
	document.getElementById("b1").value="";
	document.getElementById("b2").value="";
	document.getElementById("b3").value="";
	document.getElementById("b4").value="";
	document.getElementById("b5").value="";
	document.getElementById("b6").value="";
	document.getElementById("b7").value="";
	document.getElementById("b8").value="";
	document.getElementById("b9").value="";

	document.getElementById("b1").disabled="";
	document.getElementById("b2").disabled="";
	document.getElementById("b3").disabled="";
	document.getElementById("b4").disabled="";
	document.getElementById("b5").disabled="";
	document.getElementById("b6").disabled="";
	document.getElementById("b7").disabled="";
	document.getElementById("b8").disabled="";
	document.getElementById("b9").disabled="";
	count=0;
}