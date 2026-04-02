const translations = {
    fi: {
        nav: {
            home: "Etusivu",
            about: "Minusta",
            skills: "Taidot",
            portfolio: "Portfolio",
            cv: "CV",
            contact: "Yhteystiedot"
        },
        hero: {
            name: "Ilona Nikulina",
            tagline: "Toisen vuoden tietojenkäsittelyn opiskelija, joka rakentaa moderneja käyttöliittymiä ja kehittää osaamistaan kohti uraa frontend-kehityksessä."
        },
        about: {
            title: "Minusta",
            p1: "Olen 20-vuotias Tampereella asuva tietojenkäsittelyn opiskelija, ja opiskelen parhaillani toista vuotta TAMKissa. Suuntaudun mielelläni frontend-kehitykseen, koska pidän visuaalisuuden, logiikan ja käytettävyyden yhdistämisestä.",
            p2: "HTML, CSS, JavaScript ja modernit työkalut kuten Vue ovat tällä hetkellä suurimpia kiinnostuksenkohteitani, mutta opiskelen innolla myös muita teknologioita, kuten Javaa, Pythonia, SQL:ää sekä data-analytiikkaa.",
            p3: "Olen luonteeltani rauhallinen, empaattinen ja helposti innostuva. Vapaa-ajalla tykkään käydä lenkillä, liikkua salilla ja nauttia kauniista maisemista.",
            p4: "Tällä hetkellä etsin harjoittelu- tai kesätyöpaikkaa ja olen avoin myös junior-tason rooleille. Haluan kehittyä taitavaksi frontend-kehittäjäksi ja päästä osaksi tiimiä, jossa voin oppia, kasvaa ja tuoda oman panokseni projekteihin."
        },
        cv: {
            title: "CV",
            education: "<strong>Koulutus:</strong> Tietojenkäsittely, TAMK (2024-2027) - painotus web-kehityksessä, käyttöliittymissä ja frontendissä.",
            projectsLabel: "Työkokemus ja projektit:",
            projectsIntro: "Itsenäisiä ja kouluprojekteja, esimerkiksi:",
            project1: "Budjetointisovellus (Vue.js + Vite)",
            project2: "Pelisivusto / esittelysivu (Nostalgy School Run)",
            project3: "Poshlaya Molly -fanisivu",
            project4: "Python-tekstiseikkailupeli",
            project5: "Käyttöliittymäsuunnittelu Figmassa",
            project6: "Pieniä Power BI -projekteja",
            skillsText: "<strong>Tekniset taidot:</strong> HTML, CSS, JavaScript, Vue.js, Vite, Git, GitHub, responsiivinen suunnittelu, UI/UX-perusteet, Figma, Java, SQL, Power BI, Windows-työkalut ja macOS.",
            courses: "<strong>Kurssit ja osaamisalueet:</strong> WWW-tekniikat, ohjelmoinnin perusteet, fullstack, olio-ohjelmointi, käyttäjäkeskeinen suunnittelu, UI/UX, Python, data-analytiikka, tekoäly ja data -projekti, ryhmäprojektit ja projektityöskentely.",
            languages: "<strong>Kielitaito:</strong> Suomi (C2), englanti (B2), venäjä (äidinkieli)."
        },
        skills: {
            title: "Taidot",
            frontend: "Frontend",
            backend: "Backend",
            uiux: "UI / UX",
            python: "Python",
            data: "Data-analytiikka",
            tools: "Työkalut"
        },
        portfolio: {
            title: "Portfolio"
        },
        projects: {
            budget: {
                title: "Budjet App",
                desc: "Budjetointisovellus, joka on toteutettu Vue.js:llä ja Vitellä."
            },
            game: {
                title: "Game Website",
                desc: "Peliin liittyvä esittelysivu ja visuaalinen verkkoprojekti."
            },
            band: {
                title: "Poshlaya Molly -nettisivu",
                desc: "Fanisivu, jossa keskityin visuaaliseen ilmeeseen ja rakenteeseen."
            }
        },
        contact: {
            title: "Yhteystiedot"
        },
        skillInfo: {
            Frontend: `
                <strong>HTML, CSS, JavaScript, Vue, React</strong><br><br>
                Olen rakentanut useita responsiivisia verkkosivuja sekä kouluprojekteissa että omissa harjoitustöissäni.
                Aloitan yleensä HTML-rakenteesta, suunnittelen ulkoasun CSS:llä ja lisään toiminnallisuuden JavaScriptillä.<br><br>
                <strong>JavaScript-osaaminen:</strong><br>
                - DOM-käsittely ja event listenerit<br>
                - Peruslogiikka (if, loopit, funktiot)<br>
                - Konsolin debuggaus<br>
                - Fetch-pyynnöt ja API-integraatiot<br><br>
                <strong>Haluan oppia lisää:</strong><br>
                - React & TypeScript<br>
                - API-integraatiot<br>
                - Animaatiokirjastot<br>
                - Komponenttiajattelu
            `,
            Backend: `
                <strong>Java, Python, SQL, REST API -perusteet</strong><br><br>
                Olen harjoitellut backend-kehitystä kouluprojektien ja kurssien kautta.
                Ymmärrän palvelinpuolen peruslogiikan, datan käsittelyn ja REST-rajapintojen käytön.<br><br>
                <strong>Mitä osaan backendissä:</strong><br>
                - Perusohjelmointi Java & Python<br>
                - SQL-kyselyt ja tietokantojen perusteet<br>
                - REST API -kutsut<br>
                - Datan käsittely ja validointi
            `,
            UIUX: `
                <strong>UI/UX-suunnittelu, Figma, käytettävyys & saavutettavuus</strong><br><br>
                Olen opiskellut käyttöliittymä- ja käyttäjäkokemussuunnittelua useiden kurssien kautta.
                Olen tehnyt wireframeja, prototyyppejä, käyttäjäpolkuja ja layoutteja.<br><br>
                <strong>Vahvuudet:</strong><br>
                - Selkeä rakenne<br>
                - Käyttäjäystävällisyys<br>
                - Värien ja typografian hahmottaminen<br>
                - Responsiivisuuden huomiointi
            `,
            Python: `
                <strong>Python-ohjelmointi, data-analytiikka, Linux-ympäristö</strong><br><br>
                Olen käyttänyt Pythonia ohjelmoinnin harjoitteluun ja dataprojekteihin.
                Ensimmäinen isompi projektini oli tekstiseikkailupeli terminaaliin.<br><br>
                <strong>Mitä osaan Pythonissa:</strong><br>
                - Funktiot, ehdot, silmukat ja peruslogiikka<br>
                - Datan käsittelyn perusteet<br>
                - Linux-ympäristön käyttö<br>
                - Dokumentointi ja projektityö
            `,
            Data: `
                <strong>Data-analytiikan perusteet, Power BI, Excel</strong><br><br>
                Olen aloittanut data-analytiikan opiskelun kurssilla, jossa harjoittelemme datan käsittelyä Power BI:llä.
                Rakennan visualisointeja ja raportteja Excel-aineistoista.<br><br>
                <strong>Haluan oppia lisää:</strong><br>
                - Datan visualisointi<br>
                - Raportointi<br>
                - Datan puhdistus<br>
                - Koneoppimisen perusteet
            `,
            Tools: `
                <strong>Työkalut & Teknologiat</strong><br><br>
                <div class="tool-carousel">
                    <div class="tool-track" id="toolTrack">
                        <div class="tool-item" data-name="HTML"><img src="../cv-nettisivu/images/logos/html.svg" alt="HTML"></div>
                        <div class="tool-item" data-name="CSS"><img src="../cv-nettisivu/images/logos/css.svg" alt="CSS"></div>
                        <div class="tool-item" data-name="JavaScript"><img src="../cv-nettisivu/images/logos/js.svg" alt="JavaScript"></div>
                        <div class="tool-item" data-name="Vue.js"><img src="../cv-nettisivu/images/logos/vue.svg" alt="Vue.js"></div>
                        <div class="tool-item" data-name="React"><img src="../cv-nettisivu/images/logos/react.svg" alt="React"></div>
                        <div class="tool-item" data-name="Python"><img src="../cv-nettisivu/images/logos/python.svg" alt="Python"></div>
                        <div class="tool-item" data-name="Java"><img src="../cv-nettisivu/images/logos/java.svg" alt="Java"></div>
                        <div class="tool-item" data-name="SQL"><img src="../cv-nettisivu/images/logos/sql.svg" alt="SQL"></div>
                        <div class="tool-item" data-name="Git"><img src="../cv-nettisivu/images/logos/git.svg" alt="Git"></div>
                        <div class="tool-item" data-name="GitHub"><img src="../cv-nettisivu/images/logos/github.svg" alt="GitHub"></div>
                        <div class="tool-item" data-name="VS Code"><img src="../cv-nettisivu/images/logos/vs-code.svg" alt="VS Code"></div>
                        <div class="tool-item" data-name="Docker"><img src="../cv-nettisivu/images/logos/docker.svg" alt="Docker"></div>
                        <div class="tool-item" data-name="Power BI"><img src="../cv-nettisivu/images/logos/powerbi.svg" alt="Power BI"></div>
                        <div class="tool-item" data-name="Linux"><img src="../cv-nettisivu/images/logos/linux.svg" alt="Linux"></div>
                        <div class="tool-item" data-name="Figma"><img src="../cv-nettisivu/images/logos/figma.svg" alt="Figma"></div>
                    </div>
                </div>
            `
        }
    },

    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            portfolio: "Portfolio",
            cv: "CV",
            contact: "Contact"
        },
        hero: {
            name: "Ilona Nikulina",
            tagline: "Second-year Business Information Technology student building modern interfaces and growing toward a career in frontend development."
        },
        about: {
            title: "About Me",
            p1: "I am a 20-year-old Business Information Technology student based in Tampere, currently in my second year at TAMK. I am especially interested in frontend development because I enjoy combining visual design, logic, and usability.",
            p2: "HTML, CSS, JavaScript, and modern tools such as Vue are currently my biggest interests, but I am also excited to learn more about Java, Python, SQL, and data analytics.",
            p3: "I would describe myself as calm, empathetic, and easy to get excited about new things. In my free time, I enjoy walking, working out, and enjoying beautiful scenery.",
            p4: "At the moment, I am looking for an internship or summer job, and I am also open to junior-level opportunities. My goal is to grow into a skilled frontend developer and become part of a team where I can learn, develop, and contribute to meaningful projects."
        },
        cv: {
            title: "CV",
            education: "<strong>Education:</strong> Business Information Technology, TAMK (2024-2027) with a focus on web development, user interfaces, and frontend development.",
            projectsLabel: "Projects:",
            projectsIntro: "Independent and school projects, including:",
            project1: "Budget app (Vue.js + Vite)",
            project2: "Game website / presentation page (Nostalgy School Run)",
            project3: "Poshlaya Molly fan website",
            project4: "Python text adventure game",
            project5: "UI design in Figma",
            project6: "Small Power BI projects",
            skillsText: "<strong>Technical skills:</strong> HTML, CSS, JavaScript, Vue.js, Vite, Git, GitHub, responsive design, UI/UX basics, Figma, Java, SQL, Power BI, Windows tools, and macOS.",
            courses: "<strong>Courses & areas of study:</strong> Web technologies, programming basics, fullstack development, object-oriented programming, user-centered design, UI/UX, Python, data analytics, AI and data project work, teamwork, and project-based development.",
            languages: "<strong>Languages:</strong> Finnish (C2), English (B2), Russian (native)."
        },
        skills: {
            title: "Skills",
            frontend: "Frontend",
            backend: "Backend",
            uiux: "UI / UX",
            python: "Python",
            data: "Data Analytics",
            tools: "Tools"
        },
        portfolio: {
            title: "Portfolio"
        },
        projects: {
            budget: {
                title: "Budget App",
                desc: "A budgeting application built with Vue.js and Vite."
            },
            game: {
                title: "Game Website",
                desc: "A visual project and presentation website related to a game."
            },
            band: {
                title: "Poshlaya Molly Website",
                desc: "A fan website where I focused on visual identity and layout."
            }
        },
        contact: {
            title: "Contact"
        },
        skillInfo: {
            Frontend: `
                <strong>HTML, CSS, JavaScript, Vue, React</strong><br><br>
                I have built several responsive websites in both school projects and my own practice work.
                I usually start with the HTML structure, then design the layout with CSS, and finally add functionality with JavaScript.<br><br>
                <strong>JavaScript skills:</strong><br>
                - DOM manipulation and event listeners<br>
                - Core logic (if statements, loops, functions)<br>
                - Console debugging<br>
                - Fetch requests and API integration<br><br>
                <strong>What I want to learn more:</strong><br>
                - React & TypeScript<br>
                - API integrations<br>
                - Animation libraries<br>
                - Component-based thinking
            `,
            Backend: `
                <strong>Java, Python, SQL, REST API basics</strong><br><br>
                I have practiced backend development through school projects and courses.
                I understand the basics of server-side logic, data handling, and working with REST APIs.<br><br>
                <strong>Backend skills:</strong><br>
                - Basic programming in Java & Python<br>
                - SQL queries and database fundamentals<br>
                - REST API requests<br>
                - Data handling and validation
            `,
            UIUX: `
                <strong>UI/UX design, Figma, usability & accessibility</strong><br><br>
                I have studied UI and UX design through several courses.
                I have created wireframes, prototypes, user flows, and layouts.<br><br>
                <strong>Strengths:</strong><br>
                - Clear structure<br>
                - User-friendliness<br>
                - Visual thinking with colors and typography<br>
                - Responsive design awareness
            `,
            Python: `
                <strong>Python programming, data analytics, Linux environment</strong><br><br>
                I have used Python for programming practice and data-related projects.
                My first larger project was a terminal-based text adventure game.<br><br>
                <strong>Python skills:</strong><br>
                - Functions, conditions, loops, and core logic<br>
                - Basic data handling<br>
                - Linux environment usage<br>
                - Documentation and project work
            `,
            Data: `
                <strong>Data analytics basics, Power BI, Excel</strong><br><br>
                I started studying data analytics through a course where we practice data handling with Power BI.
                I build visualizations and reports from Excel datasets.<br><br>
                <strong>What I want to learn more:</strong><br>
                - Data visualization<br>
                - Reporting<br>
                - Data cleaning<br>
                - Machine learning basics
            `,
            Tools: `
                <strong>Tools & Technologies</strong><br><br>
                <div class="tool-carousel">
                    <div class="tool-track" id="toolTrack">
                        <div class="tool-item" data-name="HTML"><img src="../cv-nettisivu/images/logos/html.svg" alt="HTML"></div>
                        <div class="tool-item" data-name="CSS"><img src="../cv-nettisivu/images/logos/css.svg" alt="CSS"></div>
                        <div class="tool-item" data-name="JavaScript"><img src="../cv-nettisivu/images/logos/js.svg" alt="JavaScript"></div>
                        <div class="tool-item" data-name="Vue.js"><img src="../cv-nettisivu/images/logos/vue.svg" alt="Vue.js"></div>
                        <div class="tool-item" data-name="React"><img src="../cv-nettisivu/images/logos/react.svg" alt="React"></div>
                        <div class="tool-item" data-name="Python"><img src="../cv-nettisivu/images/logos/python.svg" alt="Python"></div>
                        <div class="tool-item" data-name="Java"><img src="../cv-nettisivu/images/logos/java.svg" alt="Java"></div>
                        <div class="tool-item" data-name="SQL"><img src="../cv-nettisivu/images/logos/sql.svg" alt="SQL"></div>
                        <div class="tool-item" data-name="Git"><img src="../cv-nettisivu/images/logos/git.svg" alt="Git"></div>
                        <div class="tool-item" data-name="GitHub"><img src="../cv-nettisivu/images/logos/github.svg" alt="GitHub"></div>
                        <div class="tool-item" data-name="VS Code"><img src="../cv-nettisivu/images/logos/vs-code.svg" alt="VS Code"></div>
                        <div class="tool-item" data-name="Docker"><img src="../cv-nettisivu/images/logos/docker.svg" alt="Docker"></div>
                        <div class="tool-item" data-name="Power BI"><img src="../cv-nettisivu/images/logos/powerbi.svg" alt="Power BI"></div>
                        <div class="tool-item" data-name="Linux"><img src="../cv-nettisivu/images/logos/linux.svg" alt="Linux"></div>
                        <div class="tool-item" data-name="Figma"><img src="../cv-nettisivu/images/logos/figma.svg" alt="Figma"></div>
                    </div>
                </div>
            `
        }
    }
};

let currentLanguage = localStorage.getItem("portfolioLanguage") || "fi";

function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function updateStaticText(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = getNestedValue(translations[lang], key);

        if (!value) return;

        if (
            key.startsWith("cv.education") ||
            key.startsWith("cv.skillsText") ||
            key.startsWith("cv.courses") ||
            key.startsWith("cv.languages")
        ) {
            element.innerHTML = value;
        } else if (key === "cv.projectsLabel") {
            element.textContent = value;
        } else if (key === "cv.projectsIntro") {
            element.textContent = value;
        } else {
            element.textContent = value;
        }
    });
}

function updateLanguageButtons(lang) {
    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });
}

function closeSkillContent(button, content) {
    button.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    content.classList.remove("open");
    content.style.maxHeight = null;
    content.innerHTML = "";
}

function setupToolCarousel() {
    const track = document.getElementById("toolTrack");
    if (!track) return;

    const existingClone = document.getElementById("toolTrackClone");
    if (existingClone) {
        existingClone.remove();
    }

    const clone = track.cloneNode(true);
    clone.id = "toolTrackClone";
    track.parentNode.appendChild(clone);
}

function openSkillContent(button, content, skill) {
    button.classList.add("open");
    button.setAttribute("aria-expanded", "true");
    content.classList.add("open");
    content.innerHTML = translations[currentLanguage].skillInfo[skill] || "";
    content.style.maxHeight = `${content.scrollHeight}px`;

    if (skill === "Tools") {
        setupToolCarousel();
        content.style.maxHeight = `${content.scrollHeight}px`;
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("portfolioLanguage", lang);
    document.documentElement.lang = lang;
    updateStaticText(lang);
    updateLanguageButtons(lang);

    document.querySelectorAll(".skill-toggle").forEach((button) => {
        const content = button.nextElementSibling;
        if (content.classList.contains("open")) {
            const skill = button.dataset.skill;
            content.innerHTML = translations[currentLanguage].skillInfo[skill] || "";
            content.style.maxHeight = `${content.scrollHeight}px`;

            if (skill === "Tools") {
                setupToolCarousel();
                content.style.maxHeight = `${content.scrollHeight}px`;
            }
        }
    });
}

document.querySelectorAll(".skill-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const skill = button.dataset.skill;
        const content = button.nextElementSibling;
        const isAlreadyOpen = content.classList.contains("open");

        document.querySelectorAll(".skill-toggle").forEach((otherButton) => {
            closeSkillContent(otherButton, otherButton.nextElementSibling);
        });

        if (!isAlreadyOpen) {
            openSkillContent(button, content, skill);
        }
    });
});

document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

window.addEventListener("resize", () => {
    const openContent = document.querySelector(".skill-content.open");
    if (openContent) {
        openContent.style.maxHeight = `${openContent.scrollHeight}px`;
    }
});

setLanguage(currentLanguage);

