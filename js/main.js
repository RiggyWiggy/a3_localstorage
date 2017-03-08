(function(){
var list = document.querySelector('#list'),
	saveAll = document.querySelector('#saveAll'),
	clearAll = document.querySelector('#clearAll');

	function emptyStorage(e) {
		localStorage.clear();
	}

	function fillStorage(e) {
		localStorage.setItem('todoList', list.innerHTML);
	}

	function loadToDo() {
		if (window.localStorage) {
			if (localStorage.getItem('todoList')) {
				list.innerHTML = localStorage.getItem('todoList');
			}
		}
		else
		{
			console.log('get a better browser!');
		}
	}

	clearAll.addEventListener('click', emptyStorage, false);
	saveAll.addEventListener('click', fillStorage, false);

	loadToDo();


})();