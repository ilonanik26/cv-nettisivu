const popup = document.getElementById("skillPopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closeBtn = document.querySelector(".close-btn");

const skillInfo = {
    "Frontend": `
        <strong>HTML, CSS, JavaScript</strong><br><br>
        Rakennan moderneja, responsiivisia käyttöliittymiä.
        Kiinnostuksen kohteet: animaatiot, visuaalinen suunnittelu,
        komponenttiajattelu ja React (opiskelussa).<br><br>
        <strong>Projektit:</strong><br>
        – Portfolio-sivusto (tämä sivu)<br>
        – Harjoitusprojekteja JS:llä<br>
    `,
    "Backend": `
        <strong>Python & Java</strong><br><br>
        Perusteet hallussa: funktiot, luokat, REST-ajattelu,
        pienet harjoitusprojektit.<br><br>
        <strong>Projektit:</strong><br>
        – Python data-analytiikka<br>
        – Java konsolisovellus<br>
    `,
    "UIUX": `
        <strong>UI/UX-suunnittelu</strong><br><br>
        Käytettävyys, visuaalinen suunnittelu, prototypointi,
        käyttäjäpolut ja layoutit. Figma hallussa.<br><br>
        <strong>Projektit:</strong><br>
        – Portfolio UI<br>
        – Figma-prototyypit<br>
    `,
    "Data": `
        <strong>Data-analytiikka</strong><br><br>
        Opiskelen parhaillaan kahta kurssia:<br>
        – Data Analytics Bootcamp (Udemy)<br>
        – Python for Data Analysis (Udemy)<br><br>
        Hallitsen: Pandas, datan puhdistus, visualisointi.<br>
    `,
    "Tools": `
        <strong>Työkalut</strong><br><br>
        Git, GitHub, VS Code, Figma, Linux-perusteet.<br><br>
        <strong>Työskentelytavat:</strong><br>
        – versionhallinta<br>
        – projektirakenne<br>
        – komponenttiajattelu<br>
    `
};

document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
        const skill = card.dataset.skill;
        popupTitle.textContent = skill;
        popupText.innerHTML = skillInfo[skill];
        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
