// variables necesarias
var numero_caja= [10];
var ganar="img/juego/caja3.png";
var perder="img/juego/caja4.png";
var vidas =3;
var num1;
//seleccionamos numeros alazar para cada caja
num1 = Math.floor((Math.random()*10) + 1);

  

function Adivinar(numBoton)
{
  var imagen = document.getElementById("caja"+ numBoton);

   if(numBoton == num1)  
  {
    alert("GANASTE 🤩");
    imagen.src = "img/juego/img/juegodecaja/ganaste.png";
    document.getElementById('caja1').disabled=true;
    document.getElementById('caja2').disabled=true;
    document.getElementById('caja3').disabled=true;
    document.getElementById('caja4').disabled=true;
    document.getElementById('caja5').disabled=true;
    document.getElementById('caja6').disabled=true;
    document.getElementById('caja7').disabled=true;
    document.getElementById('caja8').disabled=true;
    document.getElementById('caja9').disabled=true;
    document.getElementById('caja10').disabled=true;
    
  }
  else
  { 
    alert("uuy aca no esta");
    vidas--;
    alert("up, dale que te quedan " + vidas + " vidas");
    imagen.src = "img/juego/img/juegodecaja/fallo.png";
    if(vidas==0)
    {
    alert("PERDISTE 😞"); 
    document.getElementById('caja1').disabled=true;
    document.getElementById('caja2').disabled=true;
    document.getElementById('caja3').disabled=true;
    document.getElementById('caja4').disabled=true;
    document.getElementById('caja5').disabled=true;
    document.getElementById('caja6').disabled=true;
    document.getElementById('caja7').disabled=true;
    document.getElementById('caja8').disabled=true;
    document.getElementById('caja9').disabled=true;
    document.getElementById('caja10').disabled=true;
    }
    

      }
    }

//fuction para reiniciar el juego
function Volver(idInput, idBoton) {
  location.reload();
  document.getElementById('juego').reset(idBoton);
}




























