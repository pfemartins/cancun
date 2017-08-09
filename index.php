<?php
     $subdomain = 'cancun';
     //require_once $_SERVER['DOCUMENT_ROOT']. '/Twig/Autoloader.php';
    require_once $_SERVER['DOCUMENT_ROOT']. '/' . $subdomain . '/Twig/Autoloader.php';
     Twig_Autoloader::register();
     $loader = new Twig_Loader_Filesystem($_SERVER['DOCUMENT_ROOT'] . '/' . $subdomain . '/public_html/');
     $twig = new Twig_Environment($loader);
     $url = "http://$_SERVER[HTTP_HOST]/".$subdomain."/?page=";
     $urlCurrent = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
     $twigPath = 'views/includes/sitemap.html';
     $parameters = Array();

     $parameters['domain'] = $url;
     $parameters['urlCurrent'] = $urlCurrent;
     $parameters['page'] = 'sitemap';

     switch ("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]") {
          // HOME
          case $url."master":
               // $parameters['page'] = 'home';
               $twigPath = 'views/master/home.html';
               break;
          case $url."sr-hotels":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/sr-hotels.html';
               break;
          case $url."sr-hotels-flights":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/sr-hotels-flights.html';
               break;
          case $url."hotel-landing":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/landing.html';
               break;
        case $url."hotel-reservation":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/reservation.html';
               break;
        case $url."explore-regions":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/explore-regions.html';
               break;
        case $url."hotel-checkout":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/checkout.html';
               break;
        case $url."experience-land":
               // $parameters['page'] = 'home';
               $twigPath = 'views/hotels/experience-land.html';
               break;
        case $url."site-search":
               // $parameters['page'] = 'home';
               $twigPath = 'views/site-search/site-search.html';
               break;
        default:
               break;
     }

     echo $twig->render($twigPath, $parameters);

     // Within a given twig file you should now be able to use {{ urlCurrent }} or any index within the $parameters array.
?>