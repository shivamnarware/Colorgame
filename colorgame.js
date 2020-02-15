var numsquare=6
var colors=generaterandomcolors(numsquare);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;
var message=document.getElementById("message");
var resetbutton=document.getElementById("reset");
var h1=document.querySelector("h1");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
   hardbtn.classList.remove("selected");
   easybtn.classList.add("selected");
   numsquare=3;
   colors=generaterandomcolors(numsquare);
   pickedcolor=pickcolor();
   colordisplay.textContent=pickedcolor;
   for(var i=0;i<squares.length;i++)
   {
   	if(colors[i])
   	{
   		squares[i].style.background=colors[i];
   	}
   	else
   	{
       squares[i].style.display="none";
   	}
   }
});
hardbtn.addEventListener("click",function(){
   easybtn.classList.remove("selected");
   hardbtn.classList.add("selected");
   numsquare=6;
      colors=generaterandomcolors(numsquare);
   pickedcolor=pickcolor();
   colordisplay.textContent=pickedcolor;
   for(var i=0;i<squares.length;i++)
   {
   squares[i].style.background=colors[i];
   squares[i].style.display="block";
  }
});

reset.addEventListener("click",function(){
    colors=generaterandomcolors(numsquare);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    message.textContent="";
  for(var i=0;i<squares.length;i++)
  {
  	squares[i].style.background=colors[i];
  }
  h1.style.background="steelblue"
});



for(var i=0;i<squares.length;i++)
{    
	// add initial color to square
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
     // grab the intial color
	 var clickedcolor = this.style.background;
	 console.log(clickedcolor,pickedcolor);
	 if(clickedcolor===pickedcolor)
	 {
	 	message.textContent="correct";
	 	changecolor(clickedcolor);
	 	resetbutton.textContent="play again";
	 	h1.style.background=clickedcolor;
	 } 
	 else
	 {
	 	this.style.background="#232323";
	 	message.textContent="tryagain";
	 }
	}
	 );
}

function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
	      squares[i].style.background=color;
	}
}
function pickcolor()
{
	var random=Math.floor((Math.random()*colors.length));
	return colors[random];
}
function generaterandomcolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
        arr.push(randomcolor());
	}
	return arr;
}
function randomcolor()
{
	var r=Math.floor((Math.random()*255));
	var g=Math.floor((Math.random()*255));
	var b=Math.floor((Math.random()*255));
	return "rgb("+r+", "+g+", "+b+")";
}