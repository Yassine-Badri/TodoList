//Check Off Specefic Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on trash to delete Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Add a Todo
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //Create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

//FadeToggle input
$("h1 i").click(function(){
  $("input[type='text']").fadeToggle();
  $("h1 i").toggleClass("fa-minus-circle");
  $("h1 i").toggleClass("fa-plus-circle");
});
