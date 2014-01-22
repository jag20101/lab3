'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		if($('.jumbotron h1').text() == "Nighttime!"){
			$('.jumbotron h1').text("Daytime!");
			$('body').css("color", "black");
		}else{
			$('.jumbotron h1').text("Nighttime!");
			$('body').css("color", "white");
		}
		$('#testjs').text("Change Time");
		$('.jumbotron p').toggleClass("active");
		$('body').toggleClass("backgroundTime");
		$('.project').css("background-color", "black");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function updateProject(e){
	var projectName = $('#project').val();
	var newWidth = $('#width').val();
	var descriptionText = $('#description').val();
	console.log(projectName + newWidth);
	if(newWidth!= null){
		$(projectName).animate({
			width: newWidth
		})
	}

	if(descriptionText != null){
		$(projectName + " .project-description").text(descriptionText);
	}
}


function projectClick(e){
	// prevent the page from reloading
	e.preventDefault();

	// In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
   	console.log(projectTitle);

    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$('.project-description').hide();
    	$('.project-description').remove();
    }
}