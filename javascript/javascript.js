$(document).ready(function() {
    // Al clic sull'icona, mostra o nascondi il menu
    $(".menu-icon-bar").click(function(e) {
      $(".menu-categorie").toggleClass('espansione');
      e.preventDefault();
    });
  });