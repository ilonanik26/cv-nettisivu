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
    "Python": `
        <strong>Python</strong><br><br>
        Perusteet hallussa: funktiot, luokat, datan käsittely.<br><br>
        <strong>Projektit:</strong><br>
        – Data-analytiikka Pandasilla<br>
        – Pienet harjoitusprojektit<br>
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

document.querySelectorAll(".skill-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const skill = button.dataset.skill;
        const content = button.nextElementSibling;

        // toggle arrow
        button.classList.toggle("open");

        // toggle content
        if (content.classList.contains("open")) {
            content.classList.remove("open");
            content.innerHTML = "";
        } else {
            content.classList.add("open");
            content.innerHTML = skillInfo[skill];
        }
    });
});
