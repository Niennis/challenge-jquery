$(document).ready( function(){
  $('.js-menu').hide();

  console.log('Documento listo. Paso 7');

  $('.js-show-recipe').click(function(){
    $('.page.recipe').removeClass('make');    
  });

  $('.js-show-make').click(function(){
    $('.page.recipe').addClass('make');
  });
});