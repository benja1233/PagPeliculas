window.addEventListener("load", function(){

  if (localStorage.getItem("nombre") == null) {
      console.log(1);
document.querySelector(".peliculaspreferidas").style.display= "none"
  }
  else {
    document.querySelector(".login").innerHTML = "Hola " + localStorage.getItem("nombre")
    document.querySelector(".peliculaspreferidas").style.display= "block"
  }


 var url = "https://image.tmdb.org/t/p/original"


// aca es el carrousel POPULARES
fetch("https://api.themoviedb.org/3/movie/popular?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&page=1")
.then(function(response) { return response.json()
console.log(response);
})

.then(function(information) {

var arrayDePeliculas= information.results

console.log(information.results);


for (var i = 0; i < arrayDePeliculas.length; i++) {
  var url = "https://image.tmdb.org/t/p/original"

  var titulo= arrayDePeliculas[i].title
  var imagen= arrayDePeliculas[i].poster_path
  var id= arrayDePeliculas[i].id
  elementoHTML = "<div class='uk-position-center uk-panel'>"
  elementoHTML += "</div>"
document.querySelector(".populares").innerHTML+= "<li> <a href= detalle.html?idmovie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"

}

})

.catch(function(error) { console.log("Error: " + error);
})


  // aca es el carrousel MEJORESPUNTUADAS

  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&page=1")
  .then(function(response) { return response.json()
  console.log(response);
  })

  .then(function(information) {

  var arrayDePeliculas= information.results

  console.log(information.results);


  for (var i = 0; i < arrayDePeliculas.length; i++) {
    var url = "https://image.tmdb.org/t/p/original"

    var titulo= arrayDePeliculas[i].title
    var imagen= arrayDePeliculas[i].poster_path
    var id= arrayDePeliculas[i].id
    elementoHTML = "<div class='uk-position-center uk-panel'>"
    elementoHTML += "</div>"
  document.querySelector(".puntuadas").innerHTML+= "<li> <a href= detalle.html?idmovie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"
// aca esta lo de mas info
  }



  })

  .catch(function(error) { console.log("Error: " + error);
  })


    // aca es el carrousel PROXIMAMENTE

    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&page=1")
    .then(function(response) { return response.json()
    console.log(response);
    })

    .then(function(information) {

    var arrayDePeliculas= information.results

    console.log(information.results);


    for (var i = 0; i < arrayDePeliculas.length; i++) {
      var url = "https://image.tmdb.org/t/p/original"

      var titulo= arrayDePeliculas[i].title
      var imagen= arrayDePeliculas[i].poster_path
      var id= arrayDePeliculas[i].id
      elementoHTML = "<div class='uk-position-center uk-panel'>"
      elementoHTML += "</div>"
    document.querySelector(".proximas").innerHTML+= "<li> <a href= detalle.html?idmovie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"

    }



    })

    .catch(function(error) { console.log("Errror: " + error);
    })

    // new WarpSpeed ('myCanvas')


    // Esto de abajo es el js para la lista de generos

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US")
    .then(function(response) { return response.json()
    console.log(response);
    })

    .then(function(information) {

  var arrayDeGeneros= information.genres

  console.log(information.genres);

  for (var i = 0; i < arrayDeGeneros.length; i++) {
  var nombres = arrayDeGeneros[i].name
  var id = arrayDeGeneros[i].id

document.querySelector(".generos-drop").innerHTML += "<a href='generos.html?idgenero=" + id + "&nombregenero="+nombres+ "'>" + nombres + "</a>"

  }



    })

    .catch(function(error) { console.log("Error: " + error);
    })

})


// Aca esta el js para el login

var formulario= document.querySelector(".FORMLOGIN")
var formularionombre= document.querySelector(".nombreform")
var formularioemail= document.querySelector(".emailform")
var formulariogenero= document.querySelector(".generoform")

formulario.onsubmit= function(event){


  var huboError = false

if(formularionombre.value == "" || formularionombre.value.length < 2 ){
  huboError = true
  event.preventDefault();
  UIkit.notification({
			message: 'El nombre esta vacio o es muy corto',
			status: 'danger',
			pos: 'top-center',
			timeout: 5000
		})
}

if(formularioemail.value == "" || !validateEmail(formularioemail.value)){
  huboError = true
  event.preventDefault();
  UIkit.notification({
			message: 'Llenar campos',
			status: 'danger',
			pos: 'top-center',
			timeout: 5000
		})
}
if (formulariogenero.value == "") {
  huboError = true
  event.preventDefault();
}

if (!huboError) {
  window.localStorage.setItem("nombre", formularionombre.value);
}

}







// CARACTERES >1, NO TIENE QUE ESTAR VACIO, EMAIL TIENE QUE SER EMAIL QUE NO ESTE VACIO, GENERO QUE NO ESTE VACIO
// GUARDAR DATA EN LOCAL STORAGE
// REEMPLAZAR LOGIN POR NOMBRE DEL USUARIO

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
