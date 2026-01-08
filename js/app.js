'use strict'

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')+

//cuando CLICK en un punto
    //Saber la posicion de ese punto
    //Aplicar un transform translater al grande
    //Quitar la clase activo de TODOS puntos
    //AÑADIR  la clase activo al punto que hemos hecho CLICK


punto.forEach ((cadaPunto , i )=>{
punto[i].addEventListerner('click',()=>{

   
       
        //cuando la posición es 0 transformX es 0
        //cuandola posición es 1 transformX es -50%
        //operación  = posición * -50%

         let posicion = i
        let operacion = posicion * -50
        grande.style.transform = `translateX(${operacion}%)`
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
    




