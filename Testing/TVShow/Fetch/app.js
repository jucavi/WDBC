const URL = 'https://api.tvmaze.com/search/shows?q=';

const btnSearch = document.querySelector('#btnSearch');
const shows = document.querySelector('#shows');

const getTVShows = async (url) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log('Error!!!', err);
	}
};

btnSearch.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const input = document.querySelector('#search');
	const url = `${URL}${input.value}`;
	shows.innerHTML = '';
	getTVShows(url)
		.then((resp) => {
			for (let item of resp) {
				const LI = document.createElement('li');
				const header = document.createElement('h2');
				const img = document.createElement('img');
				img.src = item.show.image.medium;
				header.innerText = item.show.name;
				LI.style.listStyleType = 'none';
				LI.append(img);
				LI.append(header);
				shows.appendChild(LI);
			}
		})
		.catch((err) => {
			console.log('Error!!!', err);
		});

	input.value = '';
});
