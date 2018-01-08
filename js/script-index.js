$(document).ready( function(){
  /*
	$('.js-back').click(function(){
    window.location.href = 'recipe.html';
    $('.js-menu').css("display","none");

  });*/
  // ETAPA 1
  $('.js-back').hide();

  // ETAPA 2
  function printNews(){
    $('#news').append('<p>NUEVAS RECETAS</p>');
  }
  printNews();

  // ETAPA 3

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de imprimir TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
var hlRecipe = [];
function renderHighlightedRecipes(recipesArray) {
  for(i = 0; i < recipesArray.length ; i++){
    if(recipesArray[i].highlighted === true){
      hlRecipe++;
      console.log(hlRecipe);
      renderRecipe();
    }
  }
	console.log('Recipes: ', recipesArray[i].highlighted);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  

	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


