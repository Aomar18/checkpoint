$(document).ready(readyNow);
function readyNow(){

let buttonCount = 0;

$('#button').on('click' , appendToDom)



function appendToDom(){
$('body').append('<div><p></p></div>').html;
$('body').append(buttonCount++); 




}


}