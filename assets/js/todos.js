// Check off specific Todos By Clicking
function clickOnList(){
	$("ul").on("click","li", function(){
		$(this).toggleClass("completed");
	});
}



//Click on D to Delete Todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grabbing new text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

});

$(document).ready(function(){
	clickOnList();
});