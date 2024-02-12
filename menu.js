function openCategory(category, elmnt, color) {
    // Skjul alle elementer med class="tabcontent" som standard
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
// Fjern baggrundsfarven fra alle tablinks/buttons
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
}

// Vis det specifikke tabindhold baseret på kategori
var tabId;
switch(category) {
  case 'Forside2':
    tabId = 'Forside2'; // London er "forside" i dette tilfælde
    break;
  case 'Portfolio2':
    tabId = 'Portfolio2'; // Paris er "portfolio"
    break;
  case 'Om-mig2':
    tabId = 'Om-mig2'; // Tokyo er "om mig"
    break;
  case 'Kontakt2':
    tabId = 'Kontakt2'; // Oslo er "kontakt"
    break;
  default:
    tabId = 'Forside2'; // Hvis ingen gyldig kategori gives, vis forsiden som standard
}
document.getElementById(tabId).style.display = "block";

// Tilføj den specifikke farve til knappen, der blev brugt til at åbne tabindholdet
elmnt.style.backgroundColor = color;
}

// Klik på den knap, der er angivet som standardåbning
document.getElementById("defaultOpen").click();