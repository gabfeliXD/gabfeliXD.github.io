function colocarHTML(tipo){
	var content = document.getElementById("content")
	if(tipo == 3){
		content.innerHTML = `
		<ul id='contact-list'>
			<li id='contact-github'>
				<a href='https://github.com/gabfelix'>Github</a>
			</li>
			<li id='contact-linkedin'>
				<a href='www.linkedin.com/in/gabfelixop'>LinkedIn</a>
			</li>
			<li id='contact-gmail'>
				<a href='mailto:gabfelixop@gmail.com'>Gmail</a>
			</li>
		</ul>
		`;                                   
	}else if (tipo == 2){
		
		content.innerHTML = `
		<h3>Jogos</h3>
		<ul id='game-list'>
			<li>
				<a href='https://beladona-games.github.io/botd-j1/'>Beware of the Darkness</a>
			</li>
			<li>
				<a href='https://gabfelix.github.io/The%20legend%20of%20zestria%202.0/'>The Legend of Zestria</a>
			</li>
			<li>
				<a href='https://beladona-games.github.io/bb-612n/'>BLOB b-612</a>
			</li>
						`;
	}else if (tipo == 1){
		content.innerHTML = `<p>Meu nome é Gabriel Felix, tenho 16 anos, e atualmente faço o curso integrado do ifrn de programação de jogos digitais, no campus ceará-mirim</p>`;
	}

}

