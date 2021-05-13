window.addEventListener("load", function(){



  if (localStorage.getItem("nombre") == null) {
      console.log(1);
document.querySelector(".peliculaspreferidas").style.display= "none"
  }
  else {
    document.querySelector(".login").innerHTML = "Hola " + localStorage.getItem("nombre")
    document.querySelector(".peliculaspreferidas").style.display= "block"
  }


  // ACA ESTA EL CODIGO DE LA BARRA DE BUSQUEDA

 var queryStringObj= new URLSearchParams(window.location.search);
 console.log(queryStringObj);
 var query= queryStringObj.get("busqueda");
 document.querySelector(".loquebusco").innerHTML= "<h2 class=generotitulo> Resultado de busqueda: ''" + query + "''</h2>"
 console.log(query);

  var url = "https://api.themoviedb.org/3/search/movie?api_key=063b16f0b4b52316bdf354da4c0177d7&language=en-US&query=" + query + "&page=1&include_adult=false"

  fetch(url)
    .then(function(response) { return response.json()
    console.log(response);
    })

    .then(function(information) {

      var arrayDePeliculas= information.results
      if (arrayDePeliculas.length == 0) {
        document.querySelector(".errordepelicula").innerHTML = "<h3 class=errorrr>No se encontraron resultados</h3>"
      }

      console.log(information.results);

        for (var i = 0; i < arrayDePeliculas.length; i++) {
          var titulo= arrayDePeliculas[i].original_title
          var imagen= arrayDePeliculas[i].poster_path
          var id= arrayDePeliculas[i].id
          var url = "https://image.tmdb.org/t/p/original"
            elementoHTML = "<div class='uk-position-center uk-panel'>"
            elementoHTML += "</div>"
            document.querySelector(".generardo").innerHTML+= "<li> <a href= detalle.html?idmovie="+ id + "><figure class=imghvr-zoom-out-down style=background-color:black;><img src= " + url + imagen + ">" + "<figcaption class=masinfo style=background-color:black;> MÁS INFORMACIÓN </figcaption></figure>" + elementoHTML + "</a></li>"

    }

    })

    .catch(function(error) { console.log("Error: " + error);
    })
  })

// GENEROS DROP
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

 document.querySelector(".generos-drop").innerHTML += "<a href='generos.html?idgenero=" + id + "'>" + nombres + "</a>"

}



  })

  .catch(function(error) { console.log("Error: " + error);
  })
