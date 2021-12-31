// function backgoundDelay(colors, time) {
//     setTimeout(() => {
//         const color = colors.shift()
//         if (color) {
//             document.body.style.backgroundColor = color;
//             backgoundDelay(colors, time);
//         } else {
//             return
//         }
//     }, time);
// }

// backgoundDelay(['red', 'orange', 'yellow', 'green', 'blue', 'violet'], 3000)

function delayedColorChange(color, time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, time);
	});
}

delayedColorChange('red', 1000)
	.then(() => {
		return delayedColorChange('orange', 1000);
	})
	.then(() => {
		return delayedColorChange('yellow', 1000);
	})
	.then(() => {
		return delayedColorChange('green', 1000);
	})
	.then(() => {
		return delayedColorChange('blue', 1000);
	})
	.then(() => {
		return delayedColorChange('indigo', 1000);
	})
	.then(() => {
		return delayedColorChange('violet', 1000);
	});
