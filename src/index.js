function showHomePage(){
  document.getElementById("home-page").style.display = "block";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("education-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("hobbies-page").style.display = "none";
}

function showSkillsPage(){
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "block";
  document.getElementById("education-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("hobbies-page").style.display = "none";
}

function showEducationPage(){
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("education-page").style.display = "block";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("hobbies-page").style.display = "none";
}

function showLanguagesPage(){
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("education-page").style.display = "none";
  document.getElementById("languages-page").style.display = "block";
  document.getElementById("hobbies-page").style.display = "none";
}

function showHobbiesPage(){
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("education-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("hobbies-page").style.display = "block";
}

document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("education-menu").onclick = showEducationPage;
document.getElementById("languages-menu").onclick = showLanguagesPage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("hobbies-menu").onclick = showHobbiesPage;
