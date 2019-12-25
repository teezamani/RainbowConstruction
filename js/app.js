//  activate scrollspy 
$('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // NAVBAR CHANGE
$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
      $("nav").addClass("scroll-navvy");
  } else {
      $("nav").removeClass("scroll-navvy");
  }
});