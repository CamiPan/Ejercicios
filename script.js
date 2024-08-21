/*window.onload=function(){

var Boton = document.getElementById("Boton")

Boton.addEventListener("mouseover",function(){

    Boton.style.display="none";

    setTimeout(function(){

    Boton.style.display="block"; 

    }, 2000);


});
*/

window.onload = function(){

    
    var imagen = document.getElementById("imagen")
    
    
    var pantallaintermedia = document.getElementById("pantallaintermedia")

    pantallaintermedia.style.display="none";
    
    setTimeout(function(){
        
        imagen.style.display="none";
        
        pantallaintermedia.style.display="block";



    }, 1000);
    
}








