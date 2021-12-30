const form = document.querySelector('form');
const ul = document.querySelector('#todo-list');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const taskName = form.elements.task;
	newTask(taskName);
	taskName.value = '';
});

function newTask(taskName) {
	const newTask = document.createElement('li');
	newTask.innerText = taskName.value;
	newTask.addEventListener('click', function(e) {
		newTask.classList.toggle('done');
	});
	ul.appendChild(newTask);
}
