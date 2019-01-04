function colocarHTML(tipo){
	var content = document.getElementById("content")                     
	if (tipo == 2){
		
		content.innerHTML = `
		<table id="tabela-de-jogos">
			<tr>
				<td class="img_wrap">
						<a href='https://beladona-games.github.io/botd-j1/'>
							
								<img src="images/jogos/BewareOfTheDarkness.png" class="img-jogo">
							<div class="img_description_wrap">
								<p class="img_description">Um jogo de terror sobre um pesadelo sem fim. Ache a saída, ou pereça.</p>
							</div>

						</a>
				</td>

				<td class="img_wrap">
					<a href='https://gabfelix.github.io/The%20legend%20of%20zestria%202.0/'>
							<img src="images/jogos/TheLegendOfZestria.png" class="img-jogo">

							<div class="img_description_wrap">
								<p class="img_description">Enfrente monstros para salvar o reino de Zestria!</p>
							</div>

					</a>

				</td>

				<td class="img_wrap">
						<a href='https://beladona-games.github.io/bb-612n/'>
							<img src="images/jogos/Blobb-612.png" class="img-jogo">

							<div class="img_description_wrap">
								<p class="img_description">A história de um pequeno alien sobrevivendo ao inverno hostil de seu planeta.</p>
							</div>

						</a>

				</td>
			</tr>
		</table>

		
		
						`;
	}else if (tipo == 1){
		content.innerHTML = `<p>Meu nome é Gabriel Felix, tenho 16 anos, e faço o curso integrado do ifrn de programação de jogos digitais, no campus ceará-mirim. Atualmente trabalho como criador de jogos educativos para a <a href="https://educacional.tiew.com.br/index/" target="_blank">Estação Web</a>, utilizando a engine Construct 2. </p>`;
	}

}

