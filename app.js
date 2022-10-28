const draggables = document.querySelectorAll('.draggable');
const empties = document.querySelectorAll('.empty');

let draggedItem = null;

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		draggedItem = draggable;
		setTimeout(() => {
			draggable.style.display = 'none';
		}, 0)
	});
	draggable.addEventListener('dragend', () => {
		setTimeout(() => {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})
    
	empties.forEach(empty => {
		empty.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		empty.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});
		empty.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
		empty.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	})
})