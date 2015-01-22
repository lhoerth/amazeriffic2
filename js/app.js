var main = function () {
	"use strict";
	
	// staged todo list
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
		// for each tab
		// setup each click event
		$(element).on("click", function() {
			var $element = $(element), //to not keep recreating $(element)
			$content, // html element inserted.
			$input, // Input field 
			$button, // and button for 3rd tab
			i; // iterator index for looping
			
			$(".tabs span").removeClass("active"); // remove active from all tabs
			$element.addClass("active"); // add active to clicked tab
			$("main .content").empty(); // clear the present tab contents
			
			// Specific tab click behaviors...
			// 1st tab:
			if ($element.parent().is(":nth-child(1)")) {
				console.log("FIRST TAB CLICKED!"); // some debugging
				$content = $("<ul>"); // content will consist of a ul
				for (i = toDos.length-1; i >= 0; i--) {
					//console.log(toDos[i]);
					// add li elements to the ul for each ToDo item
					$content.append($("<li>").text(toDos[i]));
				}
				// Put the content in the main content section
				$("main .content").append($content);
			// 2nd tab:
			} else if ($element.parent().is(":nth-child(2)")) {
				console.log("SECOND TAB CLICKED!");
				$content = $("<ul>");
				// append list items from todo
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			// 3rd tab:
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("THIRD TAB CLICKED!");
				// present an input box and button
				var $input = $("<input type='text'>");
				$button = $("<button>").text("+");
				
				// when clicked, push input value onto toDos array
				$button.on("click", function() {
					// but only if the field isn't empty
					if ($input.val() !== "") {
						toDos.push($input.val());
						$input.val(""); // then reset the field
					}
				});
				
				// Put the input, then the button, into a div and tack it onto the main content
				$content = $("<div>").append($input, $button);
				$("main .content").append($content);
			}
			return false;
		});
	});
	
	// default to first tab
	$(".tabs a:first-child span").trigger("click");
};

main();
