function $(id) {
  return document.getElementById(id);
}

function hide(id) {
  $(id).style.display = "none";
}

function show (id) {
  $(id).style.display = "block";
}

function showHomePage(){
  show("home-page");
  hide("skills-page");
  hide("education-page");
  hide("languages-page");
  hide("experience-page");
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

$("home-menu").onclick = showHomePage;
$("skills-menu").onclick = showSkillsPage;
$("education-menu").onclick = showEducationPage;
$("languages-menu").onclick = showLanguagesPage;
$("experience-menu").onclick = showExperiencePage;
$("hobbies-menu").onclick = showHobbiesPage;