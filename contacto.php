<!DOCTYPE html>
<html>
  <head>
    <?php require('head.php'); ?>
    <title>Contacto - Panorama Diseño de Autor</title>
    <meta name="description" content="Parorama Diseño de Autor es el lugar que agrupa las últimas tendencias de la moda junto a más de 200 talentos de la moda de autor">
    <meta name="keywords" content="panorama, diseño, moda, diseño de autor, tendencias, moda 2016, moda 2017">
  </head>
  <body>
    <?php require('header.php'); ?>
    <h1>Escribinos</h1>
    <form class="contactform" action="index.html" method="post">
      <fieldset class="login-form">
        <label> Nombre <input type="text" name="nombre" class="boxform"></label>
        <br>
        <label> E-mail <input type="email" name="email" class="boxform"></label>
        <br>
        <label> Mensaje <textarea name="mensaje" class="boxform-text" rows="5"></textarea></label>
        <br>
        <button type="submit" name="formContacto" class="submit">Registrarse</button>
      </fieldset>
    </form>
    <?php require('footer.php'); ?>
  </body>
</html>
