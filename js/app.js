$(document).ready(function() {
console.log("ready");

  $('.ryu').mouseenter(function() {
  	console.log("Mouse has entered ryu");
   $('div.ryu-still').hide() ;
   $('div.ryu-ready').show() ;
  })

 .mouseleave(function() {
  	console.log("Mouse has left ryu");
   $('div.ryu-still').show() ;
   $('div.ryu-ready').hide() ;
 })

   .mousedown(function() {
   // play hadouken sound
    // show hadouken and animate it to the right of the screen
  
  	console.log("Hadouken has been invoked");
   $('div.ryu-ready').hide() ;

   $('div.ryu-throwing').show() ;
   $('div.hadouken').show() ;
  })
  .mouseup(function() {
    console.log('mouseup');
    // ryu goes back to his ready position
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
  });
 

});