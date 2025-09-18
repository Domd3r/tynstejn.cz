document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const knihovnaLink = document.getElementById("knihovna-link");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.getAttribute("data-section");

      // pokud je klik na "Knihovna", otevřu externí stránku
      if (link === knihovnaLink) {
        window.open("https://www.zstynska.cz/aktivity-a-akce-skoly?multiTagsRenderer-tags=%C5%A0koln%C3%AD+%C4%8Dasopis", "_blank");
        return;
      }

      // Změnit aktivní tlačítko
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Zobrazit správnou sekci
      sections.forEach(sec => {
        if (sec.id === target) {
          sec.classList.add("visible");
          sec.classList.remove("hidden");
        } else {
          sec.classList.remove("visible");
          sec.classList.add("hidden");
        }
      });
    });
  });

  // Formulářová animace po odeslání
  const form = document.getElementById("casopisForm");
  const message = document.getElementById("formMessage");
  form.addEventListener("submit", () => {
    setTimeout(() => {
      message.classList.remove("hidden");
      form.reset();
    }, 500);
  });
});
