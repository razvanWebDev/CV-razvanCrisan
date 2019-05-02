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

function displaySkills(skills) {
  var resultList = document.querySelector('#skills-page ul');
  var listItems = skills.map(function (skill) {

    var name = skill.name;
    // Add icons to skills???
    // var img = `<img src=${skill.imgPath} alt="pic" class="skillsLogo">`;
    // if ((skill.imgPath == undefined) || (skill.imgPath == null) || (skill.imgPath == '')) {
    //   img = "";
    // }

    return `<li>${name} </li>`;
  })

  resultList.innerHTML = listItems.join('');
}


function initSkillsPage() {
  $.ajax('data/skills.json').done(function (skills) {
    displaySkills(skills);
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
  if ((nav.classList.contains('nav-active')) && (event.target != nav) && (event.target != burger1 && event.target != burger2 && event.target != burger3) ) {
    console.log(event.target);
    navClose();
  }
})




initMenu("skills");
$('#skills-page').show();
initSkillsPage();