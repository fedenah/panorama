window.onload = function() {
  var nombre, apellido, email, password, rptpassword, expRegMail, datos, str;
  var formRegistro = document.getElementsByName('registro')[0];
  var btnregistrar = document.getElementsByName('btnRegistrar')[0];

  var err = [];

  btnregistrar.addEventListener('click',function(a){
    a.preventDefault(); //cualquier cosa que venga en el click "a" lo detengo por default

    expRegMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //limpio el innerHTML del error cada vez que valido al hacer click en el botón registrar
    document.getElementById('error1').innerHTML = "";
    document.getElementById('error2').innerHTML = "";
    document.getElementById('error3').innerHTML = "";
    document.getElementById('error4').innerHTML = "";
    document.getElementById('error5').innerHTML = "";

    nombre = document.getElementsByName('nombre')[0].value;
    console.log(nombre);
    apellido = document.getElementsByName('apellido')[0].value;
    console.log(apellido);
    email = document.getElementsByName('email')[0].value;
    console.log(email);
    password = document.getElementsByName('password')[0].value;
    console.log(password);
    rptpassword = document.getElementsByName('rptPassword')[0].value;
    console.log(rptpassword);

    if(nombre == undefined || nombre == ""){
      document.getElementsByName('nombre')[0].style.borderColor = "red"
      err.n1 = "Complete su nombre";
      document.getElementById('error1').style.display = "block";
      document.getElementById('error1').innerHTML += err.n1;
      console.log(err.n1);
    } else {
      document.getElementsByName('nombre')[0].style.borderColor = "black";
      document.getElementById('error1').style.display = "none";
      nombre = document.getElementsByName('nombre')[0].value;
      console.log(nombre);
    }

    if(apellido == undefined || apellido == ""){
      document.getElementsByName('apellido')[0].style.borderColor = "red";
      err.n2 = "Complete su apellido";
      document.getElementById('error2').style.display = "block";
      document.getElementById('error2').innerHTML += err.n2;
      console.log(err.n2);
    } else {
      document.getElementById('error2').style.display = "block";
      document.getElementsByName('apellido')[0].style.borderColor = "black";
      document.getElementById('error2').style.display = "none";
      apellido = document.getElementsByName('apellido')[0].value;
      console.log(apellido);
    }

    if(email == undefined || email == ""){
      document.getElementById('error3').style.display = "block";
      document.getElementsByName('email')[0].style.borderColor = "red";
      err.n3 = "Complete su email";
      document.getElementById('error3').innerHTML += err.n3;
      console.log(err.n3);
    }else if(!expRegMail.test(email)){
      document.getElementById('error3').style.display = "block";
      document.getElementsByName('email')[0].style.borderColor = "red";
      err.n4 = "Escriba un email válido";
      document.getElementById('error3').innerHTML += err.n4;
      console.log(err.n4);
    } else {
      document.getElementsByName('email')[0].style.borderColor = "black";
      document.getElementById('error3').style.display = "none";
      email = document.getElementsByName('email')[0].value;
      console.log(email);
    }

    if(password == undefined || password == ""){
      document.getElementById('error4').style.display = "block";
      document.getElementsByName('password')[0].style.borderColor = "red";
      err.n5 = "Complete su password";
      document.getElementById('error4').innerHTML += err.n5;
      console.log(err.n5);
    } else {
      document.getElementsByName('password')[0].style.borderColor = "black";
      document.getElementById('error4').style.display = "none";
      password = document.getElementsByName('password')[0].value;
      console.log(password);
    }

    if(rptpassword != password){
      document.getElementById('error5').style.display = "block";
      document.getElementsByName('rptPassword')[0].style.borderColor = "red";
      err.n6 = "Sus contraseñas no coinciden";
      document.getElementById('error5').innerHTML += err.n6;
      console.log(err.n6);
    } else {
      document.getElementById('error5').style.display = "block";
      document.getElementsByName('rptPassword')[0].style.borderColor = "black";
      document.getElementById('error5').style.display = "none";
      rptpassword = document.getElementsByName('rptPassword')[0].value;
      console.log(rptpassword);
    }

    nombre = document.getElementsByName('nombre')[0].value;
    console.log(nombre);
    apellido = document.getElementsByName('apellido')[0].value;
    console.log(apellido);
    email = document.getElementsByName('email')[0].value;
    console.log(email);
    password = document.getElementsByName('password')[0].value;
    console.log(password);
    rptpassword = document.getElementsByName('rptPassword')[0].value;
    console.log(rptpassword);

/*
    if (1==1) {
        //podemos enviar el formulario
        var datos = {
          nombre: nombre,
          apellido: apellido,
          email: email,
          password: password,
          rptpassword: rptpassword,
        }


        str = Object.keys(datos).map(function(key){
          return encodeURIComponent(key) + '=' + encodeURIComponent(datos[key]);
          }).join('&');


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


        }*/
      });
}
