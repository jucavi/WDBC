const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(evt) {
	evt.preventDefault();
	const query = form.elements.query.value;
	const config = { params: { q: query } };
	const res = await axios.get('https://api.tvmaze.com/search/shows', config);
	addImages(res.data);
    form.elements.query.value = ''
});

function addImages(shows) {
	for (let item of shows) {
		const img = document.createElement('img');
		img.src = item.show.image.medium;
		document.body.appendChild(img);
	}
}
