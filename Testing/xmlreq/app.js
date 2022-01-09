const req = new XMLHttpRequest();

req.onload = function() {
	console.log('Success');
	const data = JSON.parse(this.responseText);
	console.log(data.ticker.price);
};

req.onerror = function(err) {
	console.log('ERROR!!!', err);
	console.log(this);
};

req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd');
req.send();
