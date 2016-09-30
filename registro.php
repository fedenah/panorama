<!DOCTYPE html>
<html>
  <head>
    <?php require('head.php'); ?>
    <title>Registro - Panorama Diseño de Autor</title>
    <meta name="description" content="Parorama Diseño de Autor es el lugar que agrupa las últimas tendencias de la moda junto a más de 200 talentos de la moda de autor">
    <meta name="keywords" content="panorama, diseño, moda, diseño de autor, tendencias, moda 2016, moda 2017">
  </head>
  <body>
      <?php require('header.php'); ?>
      <h1>Registrate</h1>
      <form class="login" action="" method="post">
        <fieldset class="login-form">
            <label> Nombre: <input type="text" name="Nombre" class="boxform"></label>
            <br>
            <label> Apellido: <input type="text" name="Apellido" class="boxform"></label>
            <br>
            <label> E-mail: <input type="email" name="E-mail" class="boxform"></label>
            <br>
            <label> Contraseña <input type="password" name="password" class="boxform"></label>
            <br>
            <button type="submit" name="formLogin" class="submit">Registrarse</button>
            <br>

        </fieldset>
      </form>
      <?php require('footer.php'); ?>
  </body>
</html>
