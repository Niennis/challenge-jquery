$(document).ready( function(){
  $('.js-menu').hide();

  console.log('Documento listo. Paso 7');

  $('.js-show-recipe').click(function(){
    $('.page.recipe').removeClass('make'); 
    $('.js-show-recipe').addClass('active');
    $('.js-show-make').removeClass('active');
  });

  $('.js-show-make').click(function(){
    $('.page.recipe').addClass('make');
    $('.js-show-make').addClass('active');
    $('.js-show-recipe').removeClass('active');
  });

  $('.js-back').click(function(){
    window.location.href = "index.html";
  });
});