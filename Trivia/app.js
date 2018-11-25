// capturar el nombre ingresado por el usuario
function capturar(){
    const name=document.getElementById("nombre").value;
 // Saludar a el usuario
    document.getElementById("bienvenida").innerHTML = "<h1> Hola " +name+ "</h1>";
    document.getElementById("categoria").style.display = "block";
}

// elegir a categoria


// categoria tierra
function tierra(){
    document.getElementById("bienvenida").innerHTML = "<h1> Juguemos trivia Tierra</h1>";
    document.getElementById("categoria").innerHTML = "<p class='txt_nombre'>Selecciona las respuestas que consideras correctas. </p>";
    document.getElementById("preguntastierra").style.display = "block";
}

// categoria universo
function universo(){
    document.getElementById("bienvenida").innerHTML = "<h1> Juguemos trivia Universo </h1>";
    document.getElementById("categoria").innerHTML = "<p class='txt_nombre'>Selecciona las respuestas que consideras correctas. </p>";
    document.getElementById("preguntasuniverso").style.display = "block";
}


//desplegar preguntas
function mostrardiv2(){
  document.getElementById('divPregunta1').style.display = 'none';
  document.getElementById('divPregunta2').style.display = 'block';
}
function mostrardiv3(){
  document.getElementById('divPregunta2').style.display = 'none';
  document.getElementById('divPregunta3').style.display = 'block';
}

// // buscar resultado de Universo
function Resultado() 
{   
  let divDos  = document.getElementById("preguntasuniverso");
      divDos.style.display = "none";
    let c1=0,c2=0,c3=0,i1=0,i2=0,i3=0, correctas,incorrectas;
    if (document.getElementById('re1').checked==true) 
    {
      c1=1;
    }else{
      i1=1;
    }
    if (document.getElementById('re6').checked==true) 
    {
      c2=1;
    }else{
      i2=1;
    }
    if (document.getElementById('re10').checked==true) 
    {
      c3=1;
    }else {
      i3=1;
    }
  
   correctas=c1+c2+c3;
   incorrectas=i1+i2+i3;
   document.getElementById("bienvenida").innerHTML ="<h1> Gracias por participar</h1>";
   document.getElementById("categoria").innerHTML = "<p class='txt_nombre'> El resultado de la Trivia Universo es: </p></br><div id='resultadostyle'>Correctas :" + correctas + "</br>Incorrectas:" + incorrectas +"</div>";
   
   
   document.getElementById("volverJugar").style.display = "block";
}

// // buscar resultado de tierra
function Resultadodos() 
{   
  let divtres  = document.getElementById("preguntastierra");
      divtres.style.display = "none";
    let co1=0,co2=0,co3=0,in1=0,in2=0,in3=0, correcta,incorrecta;
    if (document.getElementById('res2').checked==true) 
    {
      co1=1;
    }else{
      in1=1;
    }
    if (document.getElementById('res5').checked==true) 
    {
      co2=1;
    }else{
      in2=1;
    }
    if (document.getElementById('res9').checked==true) 
    {
      co3=1;
    }else {
      in3=1;
    }
  
   correcta=co1+co2+co3;
   incorrecta=in1+in2+in3;
   document.getElementById("bienvenida").innerHTML ="<h1> Gracias por participar</h1>";
   document.getElementById("categoria").innerHTML = "<p class='txt_nombre'> El resultado de la Trivia tierra es: </p></br><div id='resultadostyle'>Correctas :" + correcta + "</br>Incorrectas:" + incorrecta +"</div>";
   document.getElementById("volverJugar").style.display = "block";
}


// function Resultado(){

//   var pregunta1=document.getElementsByName('radioPregunta1');
//   var pregunta2=document.getElementsByName('radioPregunta2');
//   var pregunta3=document.getElementsByName('radioPregunta2');
//   var respuesta1=false;
//   var respuesta2=false;
//   var respuesta3=false;

//   for (var i = 0; i < pregunta1.length; i++) {
//   if (pregunta1[i].checked && pregunta1[i].value=="8") {
//     respuesta1=true;
//   }
//   }
//   for (var i = 0; i < pregunta2.length; i++) {

//   if (pregunta2[i].checked && pregunta2[i].value=="1") {respuesta2=true;}
//   }
//   for (var i = 0; i < pregunta3.length; i++) {
//   if (pregunta3[i].checked && pregunta3[i].value=="Planeta") {respuesta3=true;}
//   }
// if(respuesta1){document.write("Pregunta 1 correcta ");}
// else {document.write("Pregunta 1 incorrecta ");}
// if(respuesta2){document.write("Pregunta 2 correcta ");}
// else {document.write("Pregunta 2 incorrecta ");}
// if(respuesta3){document.write("Pregunta 3 correcta ");}
// else {document.write("Pregunta 3 incorrecta ");}
// }



// function Resultadodos(){

//   var preguntauno=document.getElementsByName('radioPreguntauno');
//   var preguntados=document.getElementsByName('radioPreguntados');
//   var preguntatres=document.getElementsByName('radioPreguntatres');
//   var respuestauno=false;
//   var respuestados=false;
//   var respuestatres=false;

//   for (var i = 0; i < preguntauno.length; i++) {
//   if (preguntauno[i].checked && preguntauno[i].value=="5") {
//     respuestauno=true;
//   }
//   }
//   for (var i = 0; i < preguntados.length; i++) {

//   if (preguntados[i].checked && preguntados[i].value=="5")
//    {respuestados=true;}
//   }
//   for (var i = 0; i < preguntatres.length; i++) {
//   if (preguntatres[i].checked && preguntatres[i].value=="9")
//    {respuestatres=true;}
//   }


// if(respuestauno)
// {document.write("Pregunta 1 correcta ");}

// else {document.write("Pregunta 1 incorrecta ");}

// if(respuestados){document.write("Pregunta 2 correcta ");}

// else {document.write("Pregunta 2 incorrecta ");}
// if(respuestatres){document.write("Pregunta 3 correcta ");}
// else {document.write("Pregunta 3 incorrecta ");}
// }