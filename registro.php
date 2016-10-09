<!DOCTYPE html>
<html>
  <head>
    <?php require('head.php'); ?>
    <title>Registro - Panorama Diseño de Autor</title>
    <meta name="description" content="Parorama Diseño de Autor es el lugar que agrupa las últimas tendencias de la moda junto a más de 200 talentos de la moda de autor">
    <meta name="keywords" content="panorama, diseño, moda, diseño de autor, tendencias, moda 2016, moda 2017">
    <script src="js/validate.js"></script>
  </head>
  <body>
      <?php require('header.php'); ?>
      <h1>Registrate</h1>

      <form name="registro" class="registro" action="" method="POST">
        <fieldset class="login-form">
            <label> Nombre: <input type="text" name="nombre" class="boxform"><div id="errores"></div></label>
            <br>
            <label> Apellido: <input type="text" name="apellido" class="boxform"><div id="errores"></label>
            <br>
            <label> E-mail: <input type="email" name="email" class="boxform"><div id="errores"></label>
            <br>
            <label> Contraseña <input type="password" name="password" class="boxform"><div id="errores"></label>
            <br>
            <label> Repetir Contraseña <input type="password" name="rptPassword" class="boxform"><div id="errores"></label>
            <br>
            <button type="submit" name="btnRegistrar" class="submit">Registrarse</button>
            <br>

        </fieldset>
      </form>
      <?php require('footer.php'); ?>
  </body>
</html>
