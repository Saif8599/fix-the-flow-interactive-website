//querry select alle "a" van class ".subject-boxes"
document.querySelectorAll(".subject-boxes a").forEach((a) => {

  //voor elke a voeg een click eventlistener functie toe
  a.addEventListener("click", () => {
    // categoryName variable = alle a attribute met "data-category"
    let categoryName = a.getAttribute("data-category");

    //toon of verberg webinars
    let activeWebinars = document.querySelectorAll(".webinar-item");
    let hasActiveWebinars = false;

    //voor elke actieve webinar voer deze functie uit
    activeWebinars.forEach((webinarItem) => {
      if (webinarItem.getAttribute("data-category") === categoryName) {
        webinarItem.classList.add("active");
        hasActiveWebinars = true; // Er is een actieve webinar
      } else {
        webinarItem.classList.remove("active");
      }
    });

    // Toon feedback in de result
    let result = document.getElementById("result");
    if (hasActiveWebinars) {
      result.textContent = `Webinars voor de categorie "${categoryName}".`;
    } else {
      result.textContent = `Geen webinars gevonden voor de categorie "${categoryName}."`;
    }
  });
});
