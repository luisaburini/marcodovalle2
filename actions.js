var botaoTrabalhos = document.getElementById("botaoTrabalhos");
var botaoPublicacoes = document.getElementById("botaoPublicacoes");
var botaoNoticias = document.getElementById("botaoNoticias");
var botaoParceiros = document.getElementById("botaoParceiros");

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

function onclickbotaoTrabalhos()
{
	$('#gif_bg_container').load('trabalhos.html');
}
