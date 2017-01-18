var movies = require('./movies.json').rows;

movies.forEach((m, i) => {

	var doc = m.doc;

	delete doc.writer;
	delete doc._rev;

	doc.genre = (doc.genre ? doc.genre.join(',') : '' );
	doc.rating = (doc.imdb ? doc.imdb.rating : 6);
	delete doc.imdb;
	doc.cast = (doc.cast ? doc.cast.join(',') : '' );

	doc.price = Math.floor(Math.random() * 10) + 5.99;

	if (!doc.title || doc.title.match(/[^a-z0-9 ,\-\.!'']/i) || doc.cast.match(/[^a-z0-9 ,\-\.!'']/i) || doc.director.match(/[^a-z0-9 ,\-\.!'']/i)) {
		movies[i] = null;
	}

	else {
		doc.director.split(",")
		.map(d => d.trim())
		.forEach(d => {
			console.log(d)
		})
	}
	

});