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

initMenu();
$('#skills-page').show();
initSkillsPage();