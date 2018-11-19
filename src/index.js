function $(id) {
  return document.getElementById(id);
}

function hide(id) {
  $(id).style.display = "none";
}

function show (id) {
  $(id).style.display = "block";
}


function hideAllPages () {
  var pages = document.querySelectorAll(".page-block");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
}

var links = document.querySelectorAll("#top-menu-bar a");
for (var i = 0; i < links.length; i++ ) {
  links[i].onclick = function(){
    hideAllPages();
    var page = this.getAttribute("data-page");
    console.info("show page" , page);
    show(page + "-page");
  };
}

show("home-page");