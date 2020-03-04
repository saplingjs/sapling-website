var usecases = [
	{
		collection: "notes",
		item: "note",
		task: "write and save a note"
	},
	{
		collection: "messages",
		item: "message",
		task: "compose a message"
	},
	{
		collection: "todos",
		item: "todo",
		task: "create a todo list item"
	},
	{
		collection: "posts",
		item: "post",
		task: "compose a blog post"
	},
	{
		collection: "tweets",
		item: "tweet",
		task: "write a tweet"
	},
	{
		collection: "updates",
		item: "update",
		task: "post a status update"
	}
];

var current_usecase = null;

var generateUsecase = function() {
	var usecase = usecases[Math.floor(Math.random()*usecases.length)];

	if(current_usecase && current_usecase.collection == usecase.collection)
		return generateUsecase();
	else
		current_usecase = usecase;
	
	Array.prototype.forEach.call(document.querySelectorAll(".usecase"), function(el, i){
		el.textContent = usecase[el.getAttribute('data-type')];
	});

	return false;
}

var ready = function(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(generateUsecase);

document.querySelector("#usecase-generator").addEventListener("click", generateUsecase);