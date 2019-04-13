// jshint esversion:6
//check off specific todos by clicking
$("ul").on("click", "li", function(){ //when Li is clicked inside of ul then fire
    $(this).toggleClass("completed");
});


// click on x to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(600, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
 if(event.which===13){
   // grab new todo text from input
    let todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span> <i class='fa fa-trash'></i></span> "+todoText + "</li>");
 }
});

$(".fa-map-pin").click(function(){
  $("input[type='text']").fadeToggle();
});
