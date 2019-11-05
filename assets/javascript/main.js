
$(document).ready(function() {

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // enable/disable language switcher links
  $('div.languageSwitcher ul li').each(function( index ) {
    var pathname = $(location).attr('pathname');
    // en is default.
    var currentLanguage = 'en';
    if (pathname.length >= 3) {
      currentLanguage = pathname.substring(1, 3);
    }
    if ($(this).hasClass(currentLanguage)) {
      $(this).addClass("disabled");
    }
    else {
      var targetLanguage = $(this).text();
      var targetLink = "/" + targetLanguage;
      if (pathname.length >= 3) {
        targetLink = targetLink + pathname.substring(3);
      }
      //console.log("Target Link: " + targetLink);
      $(this).text("").append("<a href=\"" + targetLink + "\">" + targetLanguage + "</a>");
    }
    //console.log("currentLanguage: " + currentLanguage);
    //console.log( index + ": " + $( this ).text() );
  });

  // Fix anchor links that point to the homepage (e.g /#automation instead of #automation).
  $('ul.visible-links li a').each(function( index ) {
    var hrefAttr = $(this).attr("href");
    if (hrefAttr.startsWith("/#")) {
      $(this).attr("href", hrefAttr.substring(1))  
    }
  });

  // Hack to be able to use custom jquery.greedy-navigation.js.
  $('nav.greedy-nav').removeClass("greedy-nav").addClass("greedy-nav-custom");
});