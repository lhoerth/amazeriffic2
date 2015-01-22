var main = function () {
	"use strict";
	
	var toDos = [
	"Finish writing this book",
	"Take Gracie to the park",
	"Answer emails",
	"Prep for Monday's class",
	"Make up some new ToDos",
	"Get Groceries"
	];
	
	// tab click handling
	$(".tabs a span").toArray().forEach(function(element) {
		$(element).on("click", function() {
			var $element = $(element),
				$content;
			$(".tabs span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			
			if ($element.parent().is(":nth-child(1)")) {
				console.log("FIRST TAB CLICKED!");
				$content = $("<ul>");
				for (var i = toDos.length; i >= 0; i--) {
					//console.log(toDos[i]);
					$content.append($("<li>").text(toDos[i]));
				}
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(2)")) {
				console.log("SECOND TAB CLICKED!");
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("THIRD TAB CLICKED!");
			}
			return false;
		});
	});
	
	// default to first tab
	$(".tabs a:first-child span").trigger("click");
};

main();
