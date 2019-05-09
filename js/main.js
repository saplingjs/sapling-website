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

var generateUsecase = function(e) {
	e.preventDefault();
	
	var usecase = usecases[Math.floor(Math.random()*usecases.length)];

	$(".usecase").each(function(){
		$(this).text(usecase[$(this).data("type")]);
	});

	return false;
}

$(document).ready(generateUsecase).on("click", "#usecase-generator", generateUsecase);