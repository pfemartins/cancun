<?php
     $current = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
     $subdomain = 'cancun';
     require_once $_SERVER['DOCUMENT_ROOT']. '/Twig/Autoloader.php';
    //  require_once $_SERVER['DOCUMENT_ROOT']. '/' . $subdomain . '/Twig/Autoloader.php';
     Twig_Autoloader::register();
     $loader = new Twig_Loader_Filesystem($_SERVER['DOCUMENT_ROOT'] . '/' . $subdomain . '/public_html/');
     $twig = new Twig_Environment($loader);
     $url = "http://$_SERVER[HTTP_HOST]/".$subdomain."/?page=";
     $urlCurrent = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
     $parameters = Array();

     $parameters['domain'] = $url;


     switch ("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]") {
          // HOME
          case $url."master":
               // $parameters['page'] = 'home';
               echo $twig->render('views/master/home.html', $parameters);
               break;
          case $url."sr-hotels":
               // $parameters['page'] = 'home';
               echo $twig->render('views/hotels/sr-hotels.html', $parameters);
               break;
          case $url."sr-hotels-flights":
               // $parameters['page'] = 'home';
               echo $twig->render('views/hotels/sr-hotels-flights.html', $parameters);
               break;
          case $url."hotel-landing":
               // $parameters['page'] = 'home';
               echo $twig->render('views/hotels/landing.html', $parameters);
               break;
          default:
               $parameters['page'] = 'sitemap';
               echo $twig->render('views/includes/sitemap.html', $parameters);
               break;
     }

?>