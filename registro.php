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

      <form name="registro" class="registro" action="home.php" method="POST">
        <fieldset class="login-form">
            <label> Nombre: <input type="text" name="nombre" class="boxform"><div id="error1"></div></label>
            <br>
            <label> Apellido: <input type="text" name="apellido" class="boxform"><div id="error2"></div></label>
            <br>
            <label> E-mail: <input type="text" name="email" class="boxform"><div id="error3"></div></label>
            <br>
            <label> Contraseña <input type="password" name="password" class="boxform"><div id="error4"></div></label>
            <br>
            <label> Repetir Contraseña <input type="password" name="rptPassword" class="boxform"><div id="error5"></div></label>
            <br>
            <button type="submit" name="btnRegistrar" class="submit">Registrarse</button>
            <br>

        </fieldset>
      </form>
      <?php require('footer.php'); ?>
      <script src="js/validate.js"></script>
  </body>
</html>
