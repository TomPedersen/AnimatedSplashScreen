var taborBouncer = function(){
  $('#taborLogo').effect( "bounce", {times:2, direction:'left'}, 500 );
};

var techBouncer = function(){
  $('#techLogo').effect( "bounce", {times:5, direction:'right'}, 550 );
};

var slider = function(){
  $('#techLogo').animate({right: "140px"}, 200);
};

$(document).ready(function(){
    setTimeout(function(){
      $('#taborLogo').fadeIn(800);
    }, 1000); 
    setTimeout(function(){
      slider();
      techBouncer();
    }, 1750);
    setTimeout(function(){
      taborBouncer();
    }, 1870);
    setTimeout(function(){
      $('#copyright').fadeIn(800);
    }, 2650);      
});
