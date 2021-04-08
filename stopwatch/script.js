var changer=1000;
var x;
var sec=0,hrs=0,min=0;
function Start()
{	document.getElementById('Start').disabled=true	;
	changer=100;
	
		console.log('sec');	
console.log('hrs');	
console.log('min');	

	 x=setInterval(timer,changer);
		function timer(){
		if(sec<59)
		sec++;

	else {
		sec=0;
		if(min<59)
		min++;
		else 
		{
			min=0;
			hrs++;
		}

	}

	document.getElementById('hrs').innerHTML=hrs;
		document.getElementById('min').innerHTML=min;

	document.getElementById('sec').innerHTML=sec;
	

}}
function Stop ()
{
	
	clearInterval(x);

	document.getElementById('Start').disabled=false	;
}
function Reset()
{
	sec=00;
	hrs=00;
	min=00;
document.getElementById('hrs').innerHTML=hrs;
		document.getElementById('min').innerHTML=min;

	document.getElementById('sec').innerHTML=sec;
	clearInterval(x);
	document.getElementById('Start').disabled=false	;
}

