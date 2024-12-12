// Functie om webinars te sorteren op basis van categorie
function sortWebinarsByCategory(categoryName) {
  const allWebinars = document.querySelectorAll(".webinar-item");
  let hasActiveWebinars = false;

  allWebinars.forEach((webinarItem) => {
    const match =
      categoryName === "All" || // "All" toont alles
      webinarItem.getAttribute("data-category") === categoryName;

    webinarItem.classList.toggle("active", match); // Toggle de "active" class
    if (match) hasActiveWebinars = true; // Er zijn actieve webinars
  });

  // Feedback bijwerken
  const result = document.getElementById("result");
  if (categoryName === "All") {
    result.textContent = "Alle webinars zijn zichtbaar.";
  } else if (hasActiveWebinars) {
    result.textContent = `Webinars voor de categorie "${categoryName}".`;
  } else {
    result.textContent = `Geen webinars gevonden voor de categorie "${categoryName}".`;
  }

  // Update active state op de filterknoppen
  updateActiveButton(categoryName);
}

// Functie om de actieve knop te markeren
function updateActiveButton(activeCategory) {
  document.querySelectorAll(".subject-boxes button").forEach((button) => {
    const category = button.getAttribute("data-category"); // Haal de categorie op van de button
    // Voeg "active" class toe als de categorie overeenkomt
    button.classList.toggle("active", category === activeCategory); 
  });
}

// Functie om inactieve subject buttons te verbergen, behalve de actieve
function hideInactiveSubjects() {
  const subjectButtons = document.querySelectorAll(".subject-boxes button");
  subjectButtons.forEach((button) => {
    // Verberg alleen de knoppen die niet actief zijn
    if (!button.classList.contains("active")) {
      button.style.display = "none";
    }
  });
}

// Functie om alles terug naar de beginstatus te brengen (knoppen zichtbaar maken)
function resetSubjects() {
  const subjectButtons = document.querySelectorAll(".subject-boxes button");
  subjectButtons.forEach((button) => {
    button.style.display = "inline-block"; // Maak knoppen weer zichtbaar
    button.classList.remove("active"); // Verwijder de actieve klasse
  });
}

// Functie om de actieve subject knop te verwijderen als deze al geselecteerd is
function toggleActiveSubject(button) {
  if (button.classList.contains("active")) {
    // Als de knop al actief is, reset dan alles naar de beginstatus
    resetSubjects();
    sortWebinarsByCategory("All"); // Herstel naar "All" als er geen actieve knoppen zijn
  } else {
    // Als de knop niet actief is, voeg de actieve class toe
    button.classList.add("active");
    hideInactiveSubjects(); // Verberg de overige knoppen die niet actief zijn
    sortWebinarsByCategory(button.getAttribute("data-category")); // Filter webinars
  }
}

// Eventlisteners toevoegen aan knoppen
document.querySelectorAll(".subject-boxes button").forEach((button) => {
  button.addEventListener("click", () => {
    toggleActiveSubject(button); // Verwijder of voeg actieve status toe bij klikken
  });
});

// Toon standaard alle webinars bij het laden van de pagina
document.addEventListener("DOMContentLoaded", () => {
  sortWebinarsByCategory("All");
});
