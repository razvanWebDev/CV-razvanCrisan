const burger = document.querySelector('.burger');
const nav = document.querySelector('#top-menu-bar');
const navLinks = document.querySelectorAll('#top-menu-bar li');


function initMenu() {
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
    var endorsedBy = " - Endorsed by";
    if (skill.endorsedBy == "") {
      endorsedBy = "";
    }

    var name = skill.name;

    //   return `<li>${name}<span style="color:gray"> -${skill.endorsments} ${endorsedBy}</span>
    // ${skill.endorsedBy}
    // </li>`;

    return `<li>${name}</li>`;
  })

  resultList.innerHTML = listItems.join('');
}

function initSkillsPage() {
  $.ajax('data/skills.json').done(function (skills) {
    displaySkills(skills);
  });
}

const navSlide = () => {

  //toggle navbar
  nav.classList.toggle('nav-active');
  if (nav.classList.contains("nav-active")) {
    nav.style.animation = `navSlide 0.5s forwards`;
  } else {
    nav.style.animation = `navSlideOut 0.5s`;
  }

  //close navbar on link clik
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function () {
      nav.style.animation = `navSlideOut 0.5s`;
      nav.classList.remove('nav-active');
      burger.classList.remove("toggle");
      navLinks.forEach((link) => {
        link.style.animation = "";
      })

    }
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



burger.addEventListener('click', navSlide);

initMenu();
$('#skills-page').show();
initSkillsPage();