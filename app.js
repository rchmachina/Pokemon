// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.getElementById('container');
const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
let value = parseInt(document.getElementById('tambah').value, 10);

function incrementValue()
{
	lastValue = isNaN(value) ? 1 : lastValue;
    value = isNaN(value) ? 0 : value;
    value+= 20;
	console.log(value)
    document.getElementById('tambah').value = value;

	for (let i = lastValue; i <=value; i++) {
		setTimeout(()=>{
			const pokeBall = document.createElement('div')
			pokeBall.classList.add('pokemon');
			const card = document.createElement('div')
			card.classList.add('card');
			const imgPokemon = document.createElement('img');
			imgPokemon.src = `${baseImgURL}${i}.png`;
			const label = document.createElement('span');
			label.innerHTML = `#${i}`;
			const label2 = document.createElement('span');
			pokeBall.appendChild(card)
			card.style.background = 'rgb(128, 116, 116)'
			card.style.margin = "50px"
			card.appendChild(imgPokemon);
			card.appendChild(label);
			container.appendChild(pokeBall);
		}, 2000)
	}
	lastValue += 20

}