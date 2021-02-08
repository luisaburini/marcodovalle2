var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");

function mouseEmcima(x)
{
	x.classList.add("circle-sketch-highlight");
	x.classList.remove("mouse_out");
		console.log("mouse over button");
}

function mouseFora(x)
{
	x.classList.add("mouse_out");
	x.classList.remove("circle-sketch-highlight");
	console.log("mouse out of the button");
}

function containerMouseOver(x)
{
	console.log("mouse over container");

}

function containerMouseOut(x)
{
	console.log("mouse out of the container");
}

function containerMouseClick()
{
	console.log("mouse click in the container");
}

function onclickBotao1()
{
	$('#gif_bg_container').load('trabalhos.html');
}
