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
  renderActivities(activitiesArray);
});
/*
* Función que se encarga de imprimir TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
  // ETAPA 4
var hlRecipe = [];
function renderHighlightedRecipes(recipesArray) {
  for(i = 0; i < recipesArray.length ; i++){
    if(recipesArray[i].highlighted == true){
      hlRecipe.push(recipesArray[i]);      
      renderRecipe();
    }
  }
	console.log("Recipes:", hlRecipe);
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  var title = recipesArray[i].title;
  var authorName = recipesArray[i].source.name;
  var imgRecipe = recipesArray[i].source.img;
  var urlRecipe = recipesArray[i].source.url;
  /*console.log(title);
  console.log(authorName);
  console.log(imgRecipe);*/
  $(".list-recipes").append(

   ' <a class="item-recipe" href="' + urlRecipe + '">' +
   ' <span class="attribution">' +
      '<span class="title-recipe"> ' + title + ' </span>' +
    ' <span class="metadata-recipe">' + 
       ' <span class="author-recipe">' + authorName+ '</span>' +
       ' <span class="bookmarks-recipe">' +
          '<span class="icon-bookmark"></span> ' +
       ' </span>' +
    '  </span>' +
    '</span>' +
  
   ' <img src="' + imgRecipe + '"/>' + ' </a>'
  )

	//console.log('Voy a pintar la receta: ', recipe);
}
/*
* Función que se encarga de pintar todas las actividades
*/
 // ETAPA 5
function renderActivities(activitiesArray) {
  console.log('Activities: ', activitiesArray);
 

  /*for(var i = 0 ; i < activities.length ; i++){
    var userAvatar = activities[i].userAvatar;
    
    var userName = activities[i].userName;
    alert(userName)
    var recipeName = activities[i].recipeName;
    var text = activities[i].text;
    var place = activities[i].place;
    var img = activities[i].image;
      $('.list-activities').append(
      '<a href="#" class="item-activity"> ' +  
      '<span class="attribution">' +
      '<span class="avatar">' + 
      '<img src="' + img + '" class="image-avatar">' +
      '</span>' + 
      '<span class="meta">' +
      '<span class="author">' + userName + '</span> made ' + 
      '<span class="recipe">' + recipeName + '</span>: ' + text + 
      '<span class="location">&mdash;'+ place + '</span></span></span>' +     
      '<div class="bg-image" style="background-image: url(' + image + ')"></div>' +
      '</a>'
    )
  }  
  console.log("hola");*/
}


/*
* Función que se encarga de imprimir una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
 // ETAPA 5 Y 6
var recipe = activitiesArray;
function renderActivity(recipe) {

  $('.wrapper-message').hide();
  for(var i = 0 ; i < activitiesArray.length ; i++){
    var userAvatar = activitiesArray[i].userAvatar;  
    var userName = activitiesArray[i].userName;
    var recipeName = activitiesArray[i].recipeName;
    var text = activitiesArray[i].text;
    var place = activitiesArray[i].place;
    var img = activitiesArray[i].image;
      $('.list-activities').append(
      '<a href="#" class="item-activity"> ' +  
      '<span class="attribution">' +
      '<span class="avatar">' + 
      '<img src="' + userAvatar + '" class="image-avatar">' +
      '</span>' + 
      '<span class="meta">' +
      '<span class="author">' + userName + '</span> made ' + 
      '<span class="recipe">' + recipeName + '</span>: ' + text + 
      '<span class="location">&mdash;'+ place + '</span></span></span>' +     
      '<div class="bg-image" style="background-image: url(' + img + ')"></div>' +
      '</a>'
    )
  }
}
renderActivity(recipe);

$('.js-menu').click(function(){
  window.location.href = "recipe.html";
});