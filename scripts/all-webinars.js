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
    // Als "All" is geselecteerd, altijd deze tekst tonen
    result.textContent = "Alle webinars zijn zichtbaar.";
  } else if (hasActiveWebinars) {
    // Als er webinars zijn voor de geselecteerde categorie
    result.textContent = `Webinars voor de categorie "${categoryName}".`;
  } else {
    // Geen webinars gevonden voor de categorie
    result.textContent = `Geen webinars gevonden voor de categorie "${categoryName}".`;
  }
}

// Eventlisteners toevoegen aan knoppen
document.querySelectorAll(".subject-boxes button").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    sortWebinarsByCategory(category); // Sorteer webinars op categorie
  });
});

// Toon standaard alle webinars bij het laden van de pagina
document.addEventListener("DOMContentLoaded", () => sortWebinarsByCategory("All"));
