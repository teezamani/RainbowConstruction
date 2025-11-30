const buildingImg = document.querySelector(".building-img");
const roadImg = document.querySelector(".road");
const roadSection = document.querySelector(".road-section")

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


document.addEventListener("click",function (e){
  if(e.target.classList.contains("whatwedo-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('whatwedo-modal'));
      myModal.show();
  }
})

// handling of projects
document.querySelector(".building").addEventListener("click", function() {
    buildingImg.classList.toggle("invisible");
})
roadImg.addEventListener("click", function() {
  roadSection.classList.toggle("invisible");
})