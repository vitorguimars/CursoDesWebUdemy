function iniciaJogo(){


	var url = window.location.search;

	var nivel_jogo = url.replace("?","");
	

	
	
	

	var tempo_segundos = 0;

	if(nivel_jogo == 1){// nivel facil -> 120 segundos

		tempo_segundos = 120;
	}

	if(nivel_jogo == 2){// nivel normal-> 60 segundos

		tempo_segundos = 60;
	}


	if(nivel_jogo == 3){// nivel dificil-> 30 segundos

		tempo_segundos = 30;
		
	}


	//Inserir os segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;


	//Qunantida de balões
	var qde_baloes = 10;

	cria_baloes(qtde_baloes);


}


function cria_baloes(qtde_baloes){

	for (var i = 1; i <= qtde_baloes; i++) {

		var balao = document.creatElement("img");

		balao.src = 'imagens/balao_azul_pequeno.png';

		document.getElementById('cenario').appendChild(balao);
		
	}


}