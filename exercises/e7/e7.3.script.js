console.log('hello world');

$(document).ready(function(){
  $('button').click(function(){
    $('p').hide('slow', function(){
      alert('You have hidden the paragraph! Refresh to start again!');
    });
  });
});

$('body').css('background-color', 'white');

// sources: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_callback
