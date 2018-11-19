function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show (id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage(){
  show("home-page");
  hide("skills-page");
  hide("education-page");
  hide("languages-page");
  hided("experience-page");
  hide("hobbies-page");
}

function showSkillsPage(){
  hide("home-page");
  show("skills-page");
  hide("education-page");
  hide("languages-page");
  hide("experience-page");
  hide("hobbies-page");
}

function showEducationPage(){
  hide("home-page");
  hide("skills-page");
  show("education-page");
  hide("languages-page");
  hide("experience-page");
  hide("hobbies-page");
}

function showLanguagesPage(){
  hide("home-page");
  hide("skills-page");
  hide("education-page");
  show("languages-page");
  hide("experience-page");
  hide("hobbies-page");
}

function showExperiencePage(){
  hide("home-page");
  hide("skills-page");
  hide("education-page");
  hide("languages-page")
  show("experience-page");
  hide("hobbies-page");
}

function showHobbiesPage(){
  hide("home-page");
  hide("skills-page");
  hide("education-page");
  hide("languages-page");
  hide("experience-page");
  show("hobbies-page");
}

document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("education-menu").onclick = showEducationPage;
document.getElementById("languages-menu").onclick = showLanguagesPage;
document.getElementById("experience-menu").onclick = showExperiencePage;
document.getElementById("hobbies-menu").onclick = showHobbiesPage;
