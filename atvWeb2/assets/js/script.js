const buttonInicio = document.querySelector('.buttoninicio')
const buttonNoticia = document.querySelector('.buttonnoticia')
const buttonProblemas = document.querySelector('.buttonproblema')


$("#content").load( "../pages/home.html" )
buttonInicio.addEventListener('click', function(){$("#content").load( "../pages/home.html" )});
buttonNoticia.addEventListener('click', function(){$("#content").load( "../pages/noticias.html" )});
buttonProblemas.addEventListener('click', function(){$("#content").load( "../pages/problemas.html" )});
