const fs = require('fs');
const parse = require('csv-parse');
const { Poke, connectToMongo } = require('../server/database');

const Pokemon = Poke.pokemonSchema;
const output = [];
const parser = parse({
	columns: true
});

const getPokemonFromCSV = () => {
	return new Promise((resolve, reject) => {
		fs.createReadStream('./datasets_2756_4568_pokemon.csv', 'utf8')
			.pipe(parser)
			.on('data', row => {
				output.push(row);
			})
			.on('end', () => {
				let convertedOutput = output.map((item) => {
					Object.keys(item).map((key) => {
						if (key == 'abilities') {
							item[key] = JSON.parse(item[key].replace(/'/g, '"'))
						} else if (isFinite(item[key])) {
							item[key] = Number(item[key]);
						}
					});
					return item
				});
				resolve(convertedOutput)
			});
	});
}

const populateBD = async () => {
	await connectToMongo();
	const pokemonArr = await getPokemonFromCSV();
	Pokemon.insertMany(pokemonArr, function (err) {
		if (err == null) {
			console.log(`Inserted ${pokemonArr.length} documents.`)
		} else {
			console.log(err)
		}
	});
}

populateBD();