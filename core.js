var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

var score = 0;

var ballX = 320;
var ballY = 300;
var ballDir = 0;
var ballAngle = 0;
var hitByPlayer = false;

var paddleSize = 60;
var x=320;

update();

var up=setInterval(update, 5);

function update()
{
	clearEverything();
	
	//moveY
	if(ballDir==0)
	{
		ballY++;
	}
	else
	{
		ballY--;
	}
	
	//moveX
	ballX+=ballAngle/20;
	
	//collision
	for(var i=0;i<14;i++)
	{
		for(var o=0;o<16;o++)
		{
			var curBlock = i*16+o;
			if(trueBlocks[curBlock]!=0)
			{
				if(ballX>=o*40-5&&ballX<=40+o*40+5)
				{
					if(ballY>=i*20-5&&ballY<=25+i*20)
					{
						if(trueBlocks[curBlock]!=9)
						{
							score+=10;
							document.getElementById("score").innerHTML=""+score;
							trueBlocks[curBlock]--;
							winCondition();
						}
						hitByPlayer=false;
						//bounces
						//bottom
						if(ballY<=i*20-5&&ballDir!=1)
						{
							bounceMe(1);
						}
						//top
						else if(ballY>=i*20+15&ballDir!=0)
						{
							bounceMe(0);
						}
						//side
						//right
						else if(ballX<=o*40+5)
						{
							bounceMe(4);
							
						}
						//left
						else if(ballX>=40+o*40-5)
						{
							bounceMe(3);
						}
						break;
					}
				}
			}
		}
	}
	

	//wall and paddle bounces
	//top ding
	if(ballY<=5)
	{
		bounceMe(0);
	}
	
	//paddle ding
	else if(ballY>=385 && Math.abs(x-ballX) - 5 <= paddleSize/2 && ballY<400 && ballDir==0)
	{
		hitByPlayer=true;
		bounceMe(1);
	}
	//lost?
	else if(ballY>=400)
	{
		gameOver();
	}
	//side ding
	else if(ballX<=5 || ballX>=635)
	{
		bounceMe(2);
	}
	
	drawEverything();
}

function gameOver()
{
	clearInterval(up);
	document.write('<center><h1>Game Over</h1></br><h2>Your score: '+score+'</h2><a href="breakout.html">Try again?</a></center>');
}

function winCondition()
{
	var blockLeft = false;
	for(var i=0;i<14;i++)
	{
		for(var o=0;o<16;o++)
		{
			var curBlock = i*16+o;
			if(trueBlocks[curBlock]!=0 && trueBlocks[curBlock]!=9)
			{
				blockLeft=true;
				break;
			}
		}
		if(blockLeft)
			break;
	}
	if(!blockLeft)
	{
		clearInterval(up);
		document.write('<center><h1>GZ, Level Completed</h1></br><h2>Your score: '+score+'</h2><a href="breakout.html">Play again?</a></center>');
	}
}

function drawEverything()
{
	drawBlocks();
	drawBall();
	paddleStay();
}

function clearEverything()
{
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function paddleMove()
{
	x = event.clientX-rect.left;
}

function paddleStay()
{
	ctx.beginPath();
	ctx.fillStyle = "#555";
	ctx.strokeStyle="#444";
	ctx.lineWidth=5;
	ctx.strokeRect(x-paddleSize/2, 390, 60, 10);
	ctx.fillRect(x-paddleSize/2, 390, 60, 10);
	ctx.closePath();
}

function drawBall()
{
	ctx.beginPath();
	ctx.lineWidth=1;
	ctx.strokeStyle="#00f";
	ctx.arc(ballX,ballY,5,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

}

function drawBlocks()
{
	for(var i=0;i<14;i++)
	{
		for(var o=0;o<16;o++)
		{
			var curBlock = i*16+o;
			if(trueBlocks[curBlock]!=0)
			{
				var color = trueBlocks[curBlock];
				ctx.beginPath();
				if(color!=9)
				{
					ctx.fillStyle = "rgb("+((color%2)*125)+","+((color%3)*75)+","+((color%5)*50)+")";
					ctx.strokeStyle = "rgb("+((color%2)*60)+","+((color%3)*35)+","+((color%5)*25)+")";
				}
				else 
				{
					ctx.fillStyle = "#111";
					ctx.strokeStyle = "#000";
				}
				ctx.lineWidth=2;
				ctx.strokeRect(o*40, i*20, 40, 20);
				ctx.fillRect(o*40, i*20, 40, 20);
				ctx.closePath();
			}
		}
	}
}


function bounceMe(direction)
{
	//top ding
	if(direction==0)
	{
		ballDir=0;
	}
	//bottom ding
	else if(direction==1)
	{
		ballDir=1;
		if(hitByPlayer)
			ballAngle=ballX-x;
	}
	//side ding - wall only
	else if(direction==2)
	{
		ballAngle*=-1;
	}
	//left ding
	else if(direction==3)
	{
		if(ballAngle<0)
			ballAngle*=-1;
	}
	//right ding
	else if(direction==4)
	{
		if(ballAngle>0)
			ballAngle*=-1;
	}
}
