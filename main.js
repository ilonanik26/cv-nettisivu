const translations = {
    fi: {
        nav: {
            home: "Etusivu",
            about: "Minusta",
            skills: "Taidot",
            portfolio: "Portfolio",
            cv: "CV",
            contact: "Yhteystiedot",
            cta: "Ota yhteyttä"
        },
        hero: {
            status: "Etsin harjoittelua tai kesätyötä",
            hello: "Hei, olen",
            rolePrefix: "Tykkään rakentaa",
            roles: ["moderneja käyttöliittymiä", "selkeitä UI/UX-ratkaisuja", "visualisointeja datasta", "responsiivisia sivuja"],
            cta2: "Ota yhteyttä",
            name: "Ilona Nikulina",
            tagline: "Kolmannen vuoden tietojenkäsittelyn opiskelija, joka nauttii modernien käyttöliittymien rakentamisesta ja kehittää osaamistaan kohti uraa frontendin, UI/UX:n ja datan parissa.",
            cta: "Katso projektit"
        },
        about: {
            eyebrow: "Kuka olen",
            tagData: "Data-analytiikka",
            title: "Minusta",
            p1: "Olen 20-vuotias tietojenkäsittelyn opiskelija Tampereelta, ja opiskelen kolmatta vuotta TAMKissa. Kiinnostus alaan syttyi amiksen viimeisenä vuonna kurssilla. Huomasin viihtyväni koneen ääressä ja halusin oppia lisää.",
            p2: "AMK:ssa innostuin ensin koodaamisesta. Pian kuitenkin huomasin, että eniten minua kiinnostavat Figma ja UI/UX-suunnittelu, tekoäly ja ennen kaikkea data-analytiikka, joka on ehdoton lempparini. Nautin siitä, kun datasta alkaa löytyä vastauksia ja ne saa näkymään selkeinä visualisointeina. HTML, CSS ja JavaScript ovat työkalujani, kun haluan tuoda suunnitelman verkkoon. Tekoälyä käytän vastuullisesti oppimisen tukena: kysyn neuvoa, pyydän esimerkkejä ja etsin sen avulla vinkkejä ja lähteitä.",
            p3: "Tiimissä olen yleensä kuuntelija ja tekijä. Haluan ensin ymmärtää, mitä tavoitellaan, ja sitten tarttua toimeen. Usein minulta syntyy myös monta ideaa, ja jaan niitä mielelläni muille. Parasta on, kun yhdessä tehdystä työstä tulee sekä kaunis että toimiva.",
            p4: "Vapaa-ajalla tasapainoa tuovat liikunta ja läheiset. Käyn lenkillä järven rannalla, treenaan salilla ja vietän aikaa rakkaiden ihmisten kanssa.",
            p5: "Nyt etsin harjoittelupaikkaa, jossa pääsen oppimaan kokeneilta tekijöiltä ja tekemään oikeita projekteja. Vuoden päästä näen itseni data-analytiikan tai UI/UX-designin parissa, ja tavoitteeni on onnistua omissa hommissani ja kasvaa tiimin mukana."
        },
        cv: {
            eyebrow: "Tausta",
            title: "CV",
            education: "<strong>Koulutus:</strong> Tietojenkäsittely, TAMK (2024-2027) - painotus web-kehityksessä, käyttöliittymissä, frontendissä, UI/UX:ssa ja data-analytiikassa.",
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
            eyebrow: "Mitä osaan",
            title: "Taidot",
            frontend: "Frontend",
            backend: "Backend",
            uiux: "UI / UX",
            python: "Python",
            data: "Data-analytiikka",
            tools: "Työkalut"
        },
        portfolio: {
            eyebrow: "Valitut työt",
            title: "Portfolio",
            open: "Avaa sivu ↗"
        },
        projects: {
            budget: {
                title: "Budjet App",
                desc: "Budjetointisovellus, jossa keskityin käyttöliittymään, datan esittämiseen ja responsiiviseen toteutukseen.",
                stack: "Vue.js • Vite • Responsive UI"
            },
            game: {
                title: "Game Website",
                desc: "Peliprojektin esittelysivu, jossa rakensin rakenteen, visuaalisen ilmeen ja sisällön esittämisen.",
                stack: "HTML • CSS • Layout • Visual Design"
            },
            powerbi: {
                title: "Myyntiraportti Power BI:llä",
                desc: "Kolmen sivun raportti tilausdatasta vuosilta 2011-2014: tunnusluvut, vuosittaiset trendit sekä kategoria- ja maakohtainen analyysi. Tein omat DAX-mittarit ja päivämäärätaulun.",
                stack: "Power BI • DAX • Data Modeling • Dashboards",
                badge: "Katso 3 sivua ↗",
                pages: ["Dashboard: tunnusluvut ja myynti kategorioittain", "Trendit: myynti, kate ja tilaukset vuosittain", "Kategoria- ja maa-analyysi asiakastason taulukolla"]
            },
            band: {
                title: "Poshlaya Molly -nettisivu",
                desc: "Fanisivu, jossa keskityin vahvaan visuaaliseen tyyliin, brändifiilikseen ja responsiiviseen rakenteeseen.",
                stack: "HTML • CSS • Branding • Responsive Layout"
            }
        },
        contact: {
            title: "Yhteystiedot",
            big: "Tehdään jotain kivaa yhdessä!",
            lead: "Etsin harjoittelu- tai kesätyöpaikkaa. Laita viestiä, niin jutellaan lisää.",
            formTitle: "Lähetä viesti",
            name: "Nimi",
            email: "Sähköposti",
            message: "Viesti",
            send: "Lähetä viesti",
            formError: "Täytä kaikki kentät ja tarkista sähköpostiosoite.",
            subject: "Viesti portfoliosivulta",
            sending: "Lähetetään...",
            sent: "Kiitos viestistä! Vastaan pian.",
            sendFailed: "Viestin lähetys epäonnistui. Kokeile uudelleen tai lähetä sähköpostia.",
            emailTitle: "Sähköposti",
            phoneTitle: "Puhelin",
            copy: "Kopioi",
            copied: "Kopioitu!"
        },
        skillInfo: {
            Frontend: `
                <strong>HTML, CSS, JavaScript, Vue, React</strong><br><br>
                Olen rakentanut useita responsiivisia verkkosivuja sekä kouluprojekteissa että omissa harjoitustöissäni. Aloitan yleensä HTML-rakenteesta, suunnittelen ulkoasun CSS:llä ja lisään toiminnallisuuden JavaScriptillä.<br><br>
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
                Olen harjoitellut backend-kehitystä kouluprojektien ja kurssien kautta. Ymmärrän palvelinpuolen peruslogiikan, datan käsittelyn ja REST-rajapintojen käytön.<br><br>
                <strong>Mitä osaan backendissä:</strong><br>
                - Perusohjelmointi Java & Python<br>
                - SQL-kyselyt ja tietokantojen perusteet<br>
                - REST API -kutsut<br>
                - Datan käsittely ja validointi
            `,
            UIUX: `
                <strong>UI/UX-suunnittelu, Figma, käytettävyys & saavutettavuus</strong><br><br>
                Olen opiskellut käyttöliittymä- ja käyttäjäkokemussuunnittelua useiden kurssien kautta. Olen tehnyt wireframeja, prototyyppejä, käyttäjäpolkuja ja layoutteja.<br><br>
                <strong>Vahvuudet:</strong><br>
                - Selkeä rakenne<br>
                - Käyttäjäystävällisyys<br>
                - Värien ja typografian hahmottaminen<br>
                - Responsiivisuuden huomiointi
            `,
            Python: `
                <strong>Python-ohjelmointi, data-analytiikka, Linux-ympäristö</strong><br><br>
                Olen käyttänyt Pythonia ohjelmoinnin harjoitteluun ja dataprojekteihin. Ensimmäinen isompi projektini oli tekstiseikkailupeli terminaaliin.<br><br>
                <strong>Mitä osaan Pythonissa:</strong><br>
                - Funktiot, ehdot, silmukat ja peruslogiikka<br>
                - Datan käsittelyn perusteet<br>
                - Linux-ympäristön käyttö<br>
                - Dokumentointi ja projektityö
            `,
            Data: `
                <strong>Data-analytiikan perusteet, Power BI, Excel</strong><br><br>
                Olen aloittanut data-analytiikan opiskelun kurssilla, jossa harjoittelemme datan käsittelyä Power BI:llä. Rakennan visualisointeja ja raportteja Excel-aineistoista.<br><br>
                <strong>Haluan oppia lisää:</strong><br>
                - Datan visualisointi<br>
                - Raportointi<br>
                - Datan puhdistus<br>
                - Koneoppimisen perusteet
            `,
            Tools: `
                <strong>Työkalut & Teknologiat</strong><br><br>
                <div class="tool-carousel">
                    <div class="tool-marquee">
                        <div class="tool-track" id="toolTrack">
                            <div class="tool-item" data-name="HTML"><img src="images/logos/html.svg" alt="HTML"></div>
                            <div class="tool-item" data-name="CSS"><img src="images/logos/css.svg" alt="CSS"></div>
                            <div class="tool-item" data-name="JavaScript"><img src="images/logos/js.svg" alt="JavaScript"></div>
                            <div class="tool-item" data-name="Vue.js"><img src="images/logos/vue.svg" alt="Vue.js"></div>
                            <div class="tool-item" data-name="React"><img src="images/logos/react.svg" alt="React"></div>
                            <div class="tool-item" data-name="Python"><img src="images/logos/python.svg" alt="Python"></div>
                            <div class="tool-item" data-name="Java"><img src="images/logos/java.svg" alt="Java"></div>
                            <div class="tool-item" data-name="SQL"><img src="images/logos/sql.svg" alt="SQL"></div>
                            <div class="tool-item" data-name="Git"><img src="images/logos/git.svg" alt="Git"></div>
                            <div class="tool-item" data-name="GitHub"><img src="images/logos/github.svg" alt="GitHub"></div>
                            <div class="tool-item" data-name="VS Code"><img src="images/logos/vs-code.svg" alt="VS Code"></div>
                            <div class="tool-item" data-name="Docker"><img src="images/logos/docker.svg" alt="Docker"></div>
                            <div class="tool-item" data-name="Power BI"><img src="images/logos/powerbi.svg" alt="Power BI"></div>
                            <div class="tool-item" data-name="Linux"><img src="images/logos/linux.svg" alt="Linux"></div>
                            <div class="tool-item" data-name="Figma"><img src="images/logos/figma.svg" alt="Figma"></div>
                        </div>
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
            contact: "Contact",
            cta: "Get in touch"
        },
        hero: {
            status: "Open to internships and summer jobs",
            hello: "Hi, I'm",
            rolePrefix: "I love building",
            roles: ["modern user interfaces", "clear UI/UX solutions", "data visualizations", "responsive websites"],
            cta2: "Get in touch",
            name: "Ilona Nikulina",
            tagline: "Third-year Business Information Technology student who enjoys building modern user interfaces and developing skills toward a career in frontend development, UI/UX, and data.",
            cta: "View Projects"
        },
        about: {
            eyebrow: "Who I am",
            tagData: "Data analytics",
            title: "About Me",
            p1: "I'm a 20-year-old Business Information Technology student from Tampere, currently in my third year at TAMK. My interest in the field started during my last year of vocational school. I noticed how much I enjoyed working on a computer and wanted to learn more.",
            p2: "At university I was first excited about coding, but I soon realised that what interests me most is Figma and UI/UX design, AI, and above all data analytics, which is my absolute favourite. I love the moment when data starts giving answers and I can turn them into clear visualisations. HTML, CSS and JavaScript are my tools for bringing a design to the web. I use AI responsibly to support my learning: I ask for advice, request examples and use it to find tips and resources.",
            p3: "In a team, I'm usually a listener and a doer. I want to understand the goal first and then get to work. I also often come up with lots of ideas and I'm happy to share them. The best part is when work we've done together turns out both beautiful and functional.",
            p4: "In my free time, exercise and the people close to me keep me balanced. I go running by the lake, train at the gym and spend time with my loved ones.",
            p5: "Right now I'm looking for an internship where I can learn from experienced people and work on real projects. A year from now, I see myself working in data analytics or UI/UX design, succeeding in my work and growing together with my team.",
        },
        cv: {
            eyebrow: "Background",
            title: "CV",
            education: "<strong>Education:</strong> Business Information Technology, TAMK (2024-2027) with a focus on web development, user interfaces, frontend development, UI/UX, and data analytics.",
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
            eyebrow: "What I do",
            title: "Skills",
            frontend: "Frontend",
            backend: "Backend",
            uiux: "UI / UX",
            python: "Python",
            data: "Data Analytics",
            tools: "Tools"
        },
        portfolio: {
            eyebrow: "Selected work",
            title: "Portfolio",
            open: "Open site ↗"
        },
        projects: {
            budget: {
                title: "Budget App",
                desc: "A budgeting application where I focused on interface design, data presentation, and responsive implementation.",
                stack: "Vue.js • Vite • Responsive UI"
            },
            game: {
                title: "Game Website",
                desc: "A presentation website for a game project, where I built the layout, visual style, and content structure.",
                stack: "HTML • CSS • Layout • Visual Design"
            },
            powerbi: {
                title: "Sales Report in Power BI",
                desc: "A three-page report on order data from 2011-2014: key figures, yearly trends, and category and country analysis. I wrote my own DAX measures and a date table.",
                stack: "Power BI • DAX • Data Modeling • Dashboards",
                badge: "See 3 pages ↗",
                pages: ["Dashboard: key figures and sales by category", "Trends: sales, profit and orders by year", "Category and country analysis with a customer-level table"]
            },
            band: {
                title: "Poshlaya Molly Website",
                desc: "A fan website where I focused on strong visual identity, branding, and responsive layout.",
                stack: "HTML • CSS • Branding • Responsive Layout"
            }
        },
        contact: {
            title: "Contact",
            big: "Let's build something fun together!",
            lead: "I'm looking for an internship or a summer job. Send me a message and let's talk.",
            formTitle: "Send a message",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send message",
            formError: "Please fill in every field and check the email address.",
            subject: "Message from your portfolio",
            sending: "Sending...",
            sent: "Thanks for your message! I'll get back to you soon.",
            sendFailed: "Sending failed. Please try again or send me an email.",
            emailTitle: "Email",
            phoneTitle: "Phone",
            copy: "Copy",
            copied: "Copied!"
        },
        skillInfo: {
            Frontend: `
                <strong>HTML, CSS, JavaScript, Vue, React</strong><br><br>
                I have built several responsive websites in both school projects and my own practice work. I usually start with the HTML structure, then design the layout with CSS, and finally add functionality with JavaScript.<br><br>
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
                I have practiced backend development through school projects and courses. I understand the basics of server-side logic, data handling, and working with REST APIs.<br><br>
                <strong>Backend skills:</strong><br>
                - Basic programming in Java & Python<br>
                - SQL queries and database fundamentals<br>
                - REST API requests<br>
                - Data handling and validation
            `,
            UIUX: `
                <strong>UI/UX design, Figma, usability & accessibility</strong><br><br>
                I have studied UI and UX design through several courses. I have created wireframes, prototypes, user flows, and layouts.<br><br>
                <strong>Strengths:</strong><br>
                - Clear structure<br>
                - User-friendliness<br>
                - Visual thinking with colors and typography<br>
                - Responsive design awareness
            `,
            Python: `
                <strong>Python programming, data analytics, Linux environment</strong><br><br>
                I have used Python for programming practice and data-related projects. My first larger project was a terminal-based text adventure game.<br><br>
                <strong>Python skills:</strong><br>
                - Functions, conditions, loops, and core logic<br>
                - Basic data handling<br>
                - Linux environment usage<br>
                - Documentation and project work
            `,
            Data: `
                <strong>Data analytics basics, Power BI, Excel</strong><br><br>
                I started studying data analytics through a course where we practice data handling with Power BI. I build visualizations and reports from Excel datasets.<br><br>
                <strong>What I want to learn more:</strong><br>
                - Data visualization<br>
                - Reporting<br>
                - Data cleaning<br>
                - Machine learning basics
            `,
            Tools: `
                <strong>Tools & Technologies</strong><br><br>
                <div class="tool-carousel">
                    <div class="tool-marquee">
                        <div class="tool-track" id="toolTrack">
                            <div class="tool-item" data-name="HTML"><img src="images/logos/html.svg" alt="HTML"></div>
                            <div class="tool-item" data-name="CSS"><img src="images/logos/css.svg" alt="CSS"></div>
                            <div class="tool-item" data-name="JavaScript"><img src="images/logos/js.svg" alt="JavaScript"></div>
                            <div class="tool-item" data-name="Vue.js"><img src="images/logos/vue.svg" alt="Vue.js"></div>
                            <div class="tool-item" data-name="React"><img src="images/logos/react.svg" alt="React"></div>
                            <div class="tool-item" data-name="Python"><img src="images/logos/python.svg" alt="Python"></div>
                            <div class="tool-item" data-name="Java"><img src="images/logos/java.svg" alt="Java"></div>
                            <div class="tool-item" data-name="SQL"><img src="images/logos/sql.svg" alt="SQL"></div>
                            <div class="tool-item" data-name="Git"><img src="images/logos/git.svg" alt="Git"></div>
                            <div class="tool-item" data-name="GitHub"><img src="images/logos/github.svg" alt="GitHub"></div>
                            <div class="tool-item" data-name="VS Code"><img src="images/logos/vs-code.svg" alt="VS Code"></div>
                            <div class="tool-item" data-name="Docker"><img src="images/logos/docker.svg" alt="Docker"></div>
                            <div class="tool-item" data-name="Power BI"><img src="images/logos/powerbi.svg" alt="Power BI"></div>
                            <div class="tool-item" data-name="Linux"><img src="images/logos/linux.svg" alt="Linux"></div>
                            <div class="tool-item" data-name="Figma"><img src="images/logos/figma.svg" alt="Figma"></div>
                        </div>
                    </div>
                </div>
            `
        }
    }
};

const contactDetails = {
    email: {
        value: "ilona.nikulinaa@gmail.com",
        icon: "images/mail.svg"
    },
    phone: {
        value: "+358 44 246 4729",
        icon: "images/phone.svg"
    }
};

let currentLanguage = localStorage.getItem("portfolioLanguage") || "fi";
let activeContactValue = "";

const contactModal = document.getElementById("contactModal");
const contactModalTitle = document.getElementById("contactModalTitle");
const contactModalValue = document.getElementById("contactModalValue");
const contactModalIcon = document.getElementById("contactModalIcon");
const contactModalClose = document.getElementById("contactModalClose");
const contactCopyBtn = document.getElementById("contactCopyBtn");

function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function updateStaticText(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = getNestedValue(translations[lang], key);

        if (!value || typeof value !== "string") return;

        if (
            key.startsWith("cv.education") ||
            key.startsWith("cv.skillsText") ||
            key.startsWith("cv.courses") ||
            key.startsWith("cv.languages")
        ) {
            element.innerHTML = value;
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

    const marquee = track.parentElement;
    if (!marquee) return;

    const existingClone = document.getElementById("toolTrackClone");
    if (existingClone) {
        existingClone.remove();
    }

    const clone = track.cloneNode(true);
    clone.id = "toolTrackClone";
    marquee.appendChild(clone);
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

function openContactModal(type) {
    const detail = contactDetails[type];
    if (!detail || !contactModal) return;

    const titleKey = type === "email" ? "contact.emailTitle" : "contact.phoneTitle";
    const title = getNestedValue(translations[currentLanguage], titleKey);
    const copyLabel = getNestedValue(translations[currentLanguage], "contact.copy");

    activeContactValue = detail.value;
    contactModalTitle.textContent = title;
    contactModalValue.textContent = detail.value;
    contactModalIcon.innerHTML = `<img src="${detail.icon}" alt="${title}">`;
    contactCopyBtn.textContent = copyLabel;

    contactModal.classList.add("open");
    contactModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeContactModal() {
    if (!contactModal) return;

    contactModal.classList.remove("open");
    contactModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

/* ---------- Rotating word in the hero ---------- */

const roleWord = document.getElementById("roleWord");
let roleIndex = 0;

function showRole(index) {
    const roles = translations[currentLanguage].hero.roles;
    if (!roleWord || !roles) return;

    roleWord.classList.remove("swap");
    // Restart the small fade-in animation
    void roleWord.offsetWidth;
    roleWord.textContent = roles[index % roles.length];
    roleWord.classList.add("swap");
}

setInterval(() => {
    roleIndex += 1;
    showRole(roleIndex);
}, 2600);

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("portfolioLanguage", lang);
    document.documentElement.lang = lang;
    updateStaticText(lang);
    updateLanguageButtons(lang);
    showRole(roleIndex);

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

    if (contactModal && contactModal.classList.contains("open")) {
        contactCopyBtn.textContent = getNestedValue(translations[currentLanguage], "contact.copy");
    }
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

document.querySelectorAll(".contact-trigger").forEach((button) => {
    button.addEventListener("click", () => {
        openContactModal(button.dataset.contact);
    });
});

if (contactModalClose) {
    contactModalClose.addEventListener("click", closeContactModal);
}

if (contactModal) {
    contactModal.addEventListener("click", (event) => {
        if (event.target.dataset.closeModal === "true") {
            closeContactModal();
        }
    });
}

if (contactCopyBtn) {
    contactCopyBtn.addEventListener("click", async () => {
        if (!activeContactValue) return;

        try {
            await navigator.clipboard.writeText(activeContactValue);
            contactCopyBtn.textContent = getNestedValue(translations[currentLanguage], "contact.copied");

            setTimeout(() => {
                contactCopyBtn.textContent = getNestedValue(translations[currentLanguage], "contact.copy");
            }, 1400);
        } catch (error) {
            contactCopyBtn.textContent = getNestedValue(translations[currentLanguage], "contact.copy");
        }
    });
}

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && contactModal && contactModal.classList.contains("open")) {
        closeContactModal();
    }
});

window.addEventListener("resize", () => {
    const openContent = document.querySelector(".skill-content.open");

    if (openContent) {
        openContent.style.maxHeight = `${openContent.scrollHeight}px`;
    }
});

/* ---------- Contact form ---------- */

// Formspree delivers the messages to your email.
// Paste your own form address here (formspree.io > your form > Integration).
const FORMSPREE_URL = "https://formspree.io/f/mnpjnpjy";

const contactForm = document.getElementById("contactForm");
const contactError = document.getElementById("contactError");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById("contactEmail");
        const name = document.getElementById("contactName").value.trim();
        const email = emailInput.value.trim();
        const message = document.getElementById("contactMessage").value.trim();
        const t = translations[currentLanguage].contact;
        const sendButton = contactForm.querySelector("button[type=submit]");

        contactError.classList.remove("form-success");

        if (!name || !email || !message || !emailInput.checkValidity()) {
            contactError.textContent = t.formError;
            return;
        }

        // Until the Formspree address is set, fall back to the visitor's email app.
        if (FORMSPREE_URL.includes("OMA_TUNNUS")) {
            contactError.textContent = "";
            const body = `${message}\n\n${name}\n${email}`;
            window.location.href =
                `mailto:${contactDetails.email.value}` +
                `?subject=${encodeURIComponent(t.subject)}` +
                `&body=${encodeURIComponent(body)}`;
            return;
        }

        sendButton.disabled = true;
        contactError.textContent = t.sending;

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: new FormData(contactForm)
            });
            if (!response.ok) throw new Error(response.status);

            contactForm.reset();
            contactError.textContent = t.sent;
            contactError.classList.add("form-success");
        } catch (error) {
            contactError.textContent = t.sendFailed;
        } finally {
            sendButton.disabled = false;
        }
    });
}

/* ---------- Power BI gallery ---------- */

const galleryImages = [
    "images/powerbi-dashboard.png",
    "images/powerbi-trendit.png",
    "images/powerbi-analyysi.png"
];
const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
let galleryIndex = 0;

function showGalleryPage(index) {
    const pages = translations[currentLanguage].projects.powerbi.pages;
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    galleryImage.src = galleryImages[galleryIndex];
    galleryImage.alt = pages[galleryIndex];
    galleryCaption.textContent = `${galleryIndex + 1} / ${galleryImages.length} · ${pages[galleryIndex]}`;
}

function openGallery() {
    showGalleryPage(0);
    galleryModal.classList.add("open");
    galleryModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    galleryModal.classList.remove("open");
    galleryModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (galleryModal) {
    document.getElementById("powerbiOpen").addEventListener("click", openGallery);
    document.getElementById("galleryClose").addEventListener("click", closeGallery);
    document.getElementById("galleryPrev").addEventListener("click", () => showGalleryPage(galleryIndex - 1));
    document.getElementById("galleryNext").addEventListener("click", () => showGalleryPage(galleryIndex + 1));

    galleryModal.addEventListener("click", (event) => {
        if (event.target.dataset.closeGallery === "true") {
            closeGallery();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (!galleryModal.classList.contains("open")) return;
        if (event.key === "Escape") closeGallery();
        if (event.key === "ArrowLeft") showGalleryPage(galleryIndex - 1);
        if (event.key === "ArrowRight") showGalleryPage(galleryIndex + 1);
    });
}

setLanguage(currentLanguage);
