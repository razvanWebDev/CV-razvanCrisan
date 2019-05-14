const burger = document.querySelector('.burger');
const burger1 = document.querySelector('.line1');
const burger2 = document.querySelector('.line2');
const burger3 = document.querySelector('.line3');
const nav = document.querySelector('#top-menu-bar');
const navLinks = document.querySelectorAll('#top-menu-bar li');



function initMenu(loadPage) {
  $('#' + loadPage + '-menu').addClass('current');

  var links = document.querySelectorAll("#top-menu-bar a");

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {

      $('.page-block').hide();
      $('.menuButtons').removeClass('current');
      var page = this.getAttribute("data-page");
      $('#' + page + '-page').fadeIn();
      $('#' + page + '-menu').addClass('current');
    };
  }
}

function displayProjects(projects) {
  var resultList = document.querySelector('.projects');
  var listItems = projects.map(function (project) {

    const name = project.name;
    const image = project.imgPath;
    const codeLink = project.codeLink;
    const demoLink = project.demoLink;
    const description = project.description;
    const skillsUsed = project.skillsUsed;


    return `<div class="project-div">
              <h3>${name} </h3>
              <div class="img-container">
                <img src = ${image} alt="pic" class="project-pic">
                <div class="project-links">
						      <a href="${codeLink}" target="_blank">
							    <button class="btn"> View Code</button>
						       </a>
						      <a href="${demoLink}" target="_blank">
							    <button class="btn">View Demo</button>
						       </a>
					      </div>
              </div>
              <p>${description}</p>
              <p>${skillsUsed}</p>
            </div><hr>`;
  })

  resultList.innerHTML = listItems.join('');
}


function initProjectsPage() {
  $.ajax('data/projects.json').done(function (projects) {
    displayProjects(projects);
  });
}


//RESPONSIVE 
function navClose() {
  nav.style.animation = `navSlideOut 0.5s`;
  nav.classList.remove('nav-active');
  burger.classList.remove("toggle");
  $('body').removeClass('navBar-open');
  navLinks.forEach((link) => {
    link.style.animation = "";
  })
}

const navSlide = () => {

  //toggle navbar
  nav.classList.toggle('nav-active');


  if (nav.classList.contains("nav-active")) {
    nav.style.animation = `navSlide 0.5s forwards`;
    $('body').addClass('navBar-open');
  }
  else {
    nav.style.animation = `navSlideOut 0.5s`;
    $('body').removeClass('navBar-open');
  }


  // Amimate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.5s ${index / 5 + 0.3}s ease forwards`;
    }
  });

  // burger animation
  burger.classList.toggle("toggle");

}

//Events
burger.addEventListener('click', navSlide);


window.addEventListener('mouseup', function (event) {
  if ((nav.classList.contains('nav-active')) && (event.target != nav) && (event.target != burger1 && event.target != burger2 && event.target != burger3)) {
    navClose();
  }
})




initMenu("skills");
$('#skills-page').show();
initProjectsPage();