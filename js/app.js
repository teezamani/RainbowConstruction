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

  // TYPEWRITER
  let typeString = [
    "Design",
    "Engineering",
    "Construction",
    "Project Management"
];
let i = 0;
let count = 0;
let selectedText = "";
let text = "";
(type = () => {
    if (count == typeString.length) {
        count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById("typing").innerHTML = text;
    if (text.length === selectedText.length) {
        count++;
        i = 0;
    }
    setTimeout(type, 200);
})();