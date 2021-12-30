const select = document.querySelector('#topScore');
const resetButton = document.querySelector('#reset');
const p1 = {
	button: document.querySelector('#addCountOne'),
	display: document.querySelector('#playerOne'),
	score: 0
};
const p2 = {
	button: document.querySelector('#addCountTwo'),
	display: document.querySelector('#playerTwo'),
	score: 0
};

let isGameOver = false;
let maxScore = parseInt(select.value);

function updateScores(player, oponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === maxScore) {
			isGameOver = true;
			player.display.classList.add('has-text-success');
			oponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			oponent.button.disabled = true;
		}
		player.display.innerText = player.score;
	}
}
function reset() {
	isGameOver = false;
	for (let p of [
		p1,
		p2
	]) {
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
		p.score = 0;
		p.display.innerText = 0;
	}
}

select.addEventListener('change', function(e) {
	maxScore = parseInt(this.value);
	reset();
});
p1.button.addEventListener('click', function() {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
	updateScores(p2, p1);
});
resetButton.addEventListener('click', reset);
