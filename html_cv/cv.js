
document.getElementById('boton').onclick = function mostrar ()   {
    console.log("capturamos el evento mostrar");
    document.getElementById('par').style.display = 'block' ;
};
document.getElementById('boton1').onclick = function ocultar ()   {
    console.log("capturamos el evento ocultar");
    document.getElementById('par').style.display = 'none' ;
};

document.getElementById('boton2').onclick = function mostrar ()   {
    console.log("capturamos el evento mostrar");
    document.getElementById('par1').style.display = 'block' ;
};
document.getElementById('boton3').onclick = function ocultar ()   {
    console.log("capturamos el evento ocultar");
    document.getElementById('par1').style.display = 'none' ;
};