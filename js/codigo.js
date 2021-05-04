$(document).ready(function() {
    var lista = $('li').hide();
        $('#iniciar').click(function() {
            var i = 0;
            
            (function mostrarimg() {
                lista.eq(i++).fadeIn(400, mostrarimg);
                
            })();
            document.getElementById("iniciar").style.display="none";
            
    });
  	    $( "#sortable" ).sortable();
         
    $( "#sortable" ).disableSelection();
   
});
function numero(){
    var result;
    var numeros=[0,1,2,3,4,5,6,7,8,9];
    result=Math.floor(Math.random()*10)+1;
    return result;
}

function crearImagenes(){
myimage=document.createElement("img");
myimage.src="images/"+numero()+".jpg";
}

function Comienzo(){
    var bandera=true;

var nombre;
swal("Escriba su nombre por favor:", {
    content: "input",
  })
  .then((value) => {
        nombre=value;
        const pattern = new RegExp('^[A-Z]+$', 'i');


if((nombre=="")||(nombre==null)||(!pattern.test(nombre))){
    swal("Debe ingresar un nombre válido sin números");
      bandera=false;
}
else if(bandera){
document.getElementById('bienvenido').innerHTML="Bienvenido(a): "+nombre;
document.getElementById('bienvenido').style="true";
document.getElementById('si').style.display="none";
document.getElementById("inicial").style.display="none";
document.getElementById("iniciar").style="true";
}
  });
}

function validar(){
    var lista=$('li');
if(lista[0].value=="1"&&lista[1].value=="2"&&lista[2].value=="3"&&lista[3].value=="4"&&lista[4].value=="5"
&&lista[5].value=="6"&&lista[6].value=="7"&&lista[7].value=="8"&&lista[8].value=="9"){
swal("Felicidades!!!!! se redireccionará al inicio en muy pocos segundos 👌👌👌");
setInterval("location.reload()",5000);

}
}
$(document).mouseover(function(){

validar();  
})

