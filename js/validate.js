window.onload = function (){
  var nombre, apellido, email, password, rptpassword, expRegMail, datos, str;
  var formRegistro = document.getElementsByName('registro')[0];
  //var formLogin = document.getElementsByName('login');
  //var btnlogin = document.getElementsByName('btnLogin');
  var btnregistrar = document.getElementsByName('btnRegistrar')[0];

  //btnlogin.addEventListener('click',function(e){
    //Le quito la funcionalidad con la que viene
  //  e.preventDefault();
  //});


  btnregistrar.addEventListener('click',function(a){
    a.preventDefault(); //cualquier cosa que venga en el click "a" lo detengo por default

    //document.getElementById('errores').innerHTML = "";
    nombre = document.getElementsByName('nombre')[0].value;
    apellido = document.getElementsByName('apellido')[0].value;
    email = document.getElementsByName('email')[0].value;
    password = document.getElementsByName('password')[0].value;
    rptpassword = document.getElementsByName('rptPassword')[0].value;

    expRegMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var err = {};
    
    if(nombre == ""){
      document.getElementsByName('nombre')[0].style.borderColor = "red"
      err.n1 = "Complete su nombre";
      document.getElementById('errores').innerHTML += err.n1;
    } else {
      document.getElementsByName('nombre')[0].style.borderColor = "black";
      document.getElementById('errores').innerHTML = "";
    }

    if(apellido == ""){
      document.getElementsByName('apellido')[0].style.borderColor = "red";
      err.n2 = "Complete su apellido";
      document.getElementById('errores').innerHTML += err.n2;
    } else {
      document.getElementsByName('apellido')[0].style.borderColor = "black";
      document.getElementById('errores').innerHTML = "";
    }

    if(email == ""){
      document.getElementsByName('email')[0].style.borderColor = "red";
      err.n3 = "Complete su email";
      document.getElementById('errores').innerHTML += err.n3;
    }else if(!expRegMail.test(email)){
      document.getElementsByName('email')[0].style.borderColor = "red";
      err.n4 = "Escriba un email válido";
      document.getElementById('errores').innerHTML += err.n4;
    } else {
      document.getElementsByName('email')[0].style.borderColor = "black";
      document.getElementById('errores').innerHTML = "";
    }

    if(password == ""){
      document.getElementsByName('password')[0].style.borderColor = "red";
      err.n5 = "Complete su password";
      document.getElementById('errores').innerHTML += err.n5;
    } else {
      document.getElementsByName('email')[0].style.borderColor = "black";
      document.getElementById('errores').innerHTML = "";
    }

    if(rptpassword != password){
      document.getElementsByName('rptPassword')[0].style.borderColor = "red";
      err.n6 = "Sus contraseñas no coinciden";
      document.getElementById('errores').innerHTML += err.n6;
    } else {
      document.getElementsByName('email')[0].style.borderColor = "black";
      document.getElementById('errores').innerHTML = "";
    }

    if(errores[0] === undefined) {
        //podemos enviar el formulario
        var datos = {
          nombres: nombre,
          apellido: apellido,
          email: email,
          password: password,
          rptpassword: rptpassword,
        }


        str = Object.keys(datos).map(function(key){
          return encodeURIComponent(key) + '=' + encodeURIComponent(datos[key]);
          }).join('&');

/*
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            console.log(xmlhttp.responseText);
            console.log(str);
          }
        };

        xmlhttp.open("GET", "https://sprint.digitalhouse.com/nuevoUsuario", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xmlhttp.send(str);
        */

        }
      });
    };
