// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
// Your code goes here!

  
function makeGrid() {//fare funzione
  let table=$('#pixelCanvas');
  const height=$('#inputHeight').val();
  const width=$('#inputWidth').val();
  $('tr').remove();
while (table.children().lenght>0){
  table.childre().remove();
}
  if (height< 61 && width< 61) { 
  for (let row=0; row<height; row++){
    table.append('<tr></tr>');
    for (let col=0; col<width; col++){
table.children().last().append('<td class="td"></td>')
    }//row
  }//column
 } else {
     alert(" your alert message");
}
  
const td= $(".td");
  
  td.on('click', function() {
    const color= $('#colorPicker').val();
    $(this).css('background-color', color);
  });
  
  td.on("dblclick", function(){
    $(this).css('background-color', 'white');
  });
  
  }//fare grid
 $('#submit_button').on('click',function(even) {
     event.preventDefault();
     makeGrid ();
 });
   
  function clearGrid() {
  	$('#pixeCanvas').children().remove();
	$('#inputHeight').val("5");
    $('#inputWidth').val("5");
    $('#colorPicker').val("black");
};

//Calls clearGrid function, when reset button is clicked
$('#reset_button').on('click', function(event) {
    event.preventDefault();
    clearGrid();
});



////<hr>=linea