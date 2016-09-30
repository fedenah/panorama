<!DOCTYPE html>
<html>
  <head>
    <?php require('head.php'); ?>
    <title>Mi Cuenta - Panorama Diseño de Autor</title>
    <meta name="description" content="Parorama Diseño de Autor es el lugar que agrupa las últimas tendencias de la moda junto a más de 200 talentos de la moda de autor">
    <meta name="keywords" content="panorama, diseño, moda, diseño de autor, tendencias, moda 2016, moda 2017">
  </head>
  <body>
      <?php require('header.php'); ?>


      <h1>Ingresar a mi cuenta</h1>
      <form class="user" action="" method="post">
      <fieldset class="user-form">
          <label> E-mail: <input type="email" name="email" required="" class="boxform"></label>
          <br>
          <label> Contraseña <input type="password" name="password" required="" class="boxform"></label>
          <br>
          <button type="submit" name="miCuenta" class="ingresar">Ingresar</button>
      </fieldset>
      </form>
    <?php require('footer.php'); ?>
  </body>
</html>
