
import { barcelona, roma, paris, londres } from './ciudades.js'



//obtener elementos dle dom
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//console.log(enlaces);
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        //remover activo de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
        //agregar active
        this.classList.add('active')

         //trear info del objeto seleccionado
         let contenido = obtenerContenido(this.textContent)
    //mostrar contenido en la web
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
        
    })

    
   

});

//fucnion para traer la info de la ciudades ocrrectas

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' :barcelona,
        'Roma': roma, 
        'París':paris,
        'Londres': londres,
    }
    return contenido[enlace]
    
}