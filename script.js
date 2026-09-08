const navLinks = Array.from(document.querySelectorAll('.nav-links .nav-item'));
const brand = document.querySelector('.brand');

function preventShortWordBreaks() {
    document.querySelectorAll(
        '.project-title, .project-page-title, .hero-copy p, .footer-entry p, .body-text, .project-description'
    ).forEach(el => {

        el.innerHTML = el.innerHTML.replace(
            /(^|\s)([А-Яа-яЁёA-Za-z]{1,3})\s+(?=\S)/g,
            '$1$2&nbsp;'
        );

    });
}

const projects = [
  {
    slug: "mythograms",
    title: "Мифограммы",
    tags: ["Моушн", "Графический дизайн"],
    image: "images/2179.jpg",
    page: "projects/mythograms.html"
  },

  {
    slug: "checkpoint",
    title: "Чекпоинт",
    tags: ["Инсталляция", "Саунд-дизайн"],
    image: "images/2208.jpg",
    page: "projects/checkpoint.html"
  },

  {
    slug: "obelisk",
    title: "Обелиск",
    tags: ["Айдентика", "3D"],
    image: "images/21.jpg",
    page: "projects/obelisk.html"
  }
];

const langButtons = document.querySelectorAll(".lang-btn");

const translations = {
    eng: {
        brand: "Sonya Perova",
        navWork: "Work",
        navShowreel: "Showreel",
        navContact: "Contact",
        menuHome: "Home",

        contactTitle: `Let's make<br>something together`,
        contactDirect: "Get in touch",
        contactSocials: "Socials",

        heroText:
            `Hi! My name is Sonya Per<span class="surname-hover" 
            data-normal="ova" data-hover="lovka">ova</span>. I'm a
            <span class="accent">graphic & motion designer</span>
            with background in
            <span class="accent">illustration</span>.
            Currently based in Moscow.`,

        calendarTitle: "Calendar by Numbers",
        potaninTitle: "Potanin Foundation Branding",
        potaninIntro: "An illustrative reinterpretation of the foundation's identity. The concept is based on a dynamic ribbon that gently organizes the space, allowing different stories of the foundation to find their place. It does not dominate, but creates an environment where professional support takes on a human dimension. The updated visual style reflects the key idea: behind the grant system are real people and their ideas. The project includes posters, signage and merchandise.",
        passengersTitle: "Attention, Passengers",
        sculptureTitle: "If You Are Lost, Stay Here",
        bodyTitle: "BO.ODY, CO.ORDINATE",
        portraitsTitle: "Portrait Series",
        yakutTitle: "Explainer Video «The Phenomenon of Yakut Cinema»",
        podvorieTitle: "Podvorie Art Space Branding",
        podvorieIntro: "Podvorie is an independent space located in the historic building of the Persian Trading Courtyard in Astrakhan, housing a contemporary art gallery, library and art residency.",
        podvorieIdentity: "The identity is based on a textile collage unfolding across several layers of metaphor. Visually, it reflects the handmade aesthetic of the space, which lives and grows through the efforts of volunteers. The patterns replicate elements of the building-shaped logo, forming a system: much like Podvorie itself, weaving together stories, events and people into a single fabric.",

        filterMotion: "MOTION",
        filterGraphic: "GRAPHIC DESIGN",
        filterIllustration: "ILLUSTRATION",
        filterOther: "OTHER",

        workNonplaceTitle: "What Is a “Non-place” According to Marc Augé?",
        workPodvorieTitle: "Podvorie Art Space Branding",
        workPotaninTitle: "Potanin Foundation Branding",
        workAllergyTitle: "Online Course Landing Page",

        filterMotion: 'MOTION',

        nonplaceTitle: `What Is a “Non-place”
        According to Marc Augé?`,

        nonplaceIntro: `Video explainer about the sociological
        and philosophical concept of the “non-place”.`,

        nonplaceDefinition: `“Non-place” is a concept introduced
        by Marc Augé to describe spaces of transit,
        temporary presence and interaction in which
        personal identity recedes into the background.`,

        nonplaceVisual: `The project is built around white space —
        a metaphor for the non-place, contrasted with
        anthropological place. A bright, sterile and easily
        scalable environment defines the entire visual language
        and becomes the main carrier of the idea.`,

        nonplaceContrast: `Anthropological place and non-place exist as
        opposites within the project. This contrast is
        reinforced through shifts in composition: when
        the narrative focuses on place, attention is
        centered on the person; when it moves to non-place,
        the focus shifts to the space itself.`,

        nonplaceGrid: `Grids and frames constrain the white space,
        literally forming new non-places within it.
        A consistent visual treatment of photography,
        video and graphics shows how objects entering
        these spaces become subject to their logic and
        part of a unified system.`,

        nonplaceRole: `My role: Visual concept development,
        static graphics, motion design and art direction.
        I also supervised the voice-over artist and sound designer,
        shaping a unified visual and sonic language for the video.`,

        footerBioTitle: "Bio",
        footerEducation: "Education",
        footerWork: "Work",
        footerAwards: "Awards",
        footerSkills: "Skills",
        footerLanguages: "Languages",
        footerContacts: "Contacts",

        podvorieTitle: "Podvorie Art Space Branding",
        potaninTitle: "Potanin Foundation Branding",
        allergyTitle: "Landing page “From Achoo to Thank You”",
        workCalendarTitle: "Calendar by Numbers",
        calendarIntro: "There are beautiful and complex words in different languages that combine several feelings or convey a unique state. There are many such words, and each helps describe the world around us in its own way. For this project, I assigned each month a foreign word and turned it into a calendar.",
        calendarVisual: "Visually, the calendar takes the form of a paint-by-numbers picture, where the number of colors corresponds to the number of days in the month. The principle is the same as with the words: to create a complete image, you gradually fill different areas, discover new nuances and piece the picture together.",
        calendarVersions: "The calendar exists in two versions — partially colored paint-by-numbers pictures and fully interactive uncolored images, allowing each user to create bright months from the first to the last day.",
        workOldIsBoldTitle: 'Illustration Series "Old is bold"',
        portraitsIntro: "A series of portraits of iconic women whose charisma and allure only grow stronger with time. They do not chase fleeting trends; they shape them, making maturity the foundation of their unique style.",
        workBoodyTitle: 'Book "BO.ODY, CO.ORDINATE"',
        bodycoordinateTitle: "Body / CO.ORDINATE",
        bodycoordinateIntro: "This book is a visual study of the transformation of the human body in Google Street View.",
        bodycoordinateGlitch: "In the visual research, I propose a sequence of “Detection — Glitch — Depiction”, through which the human body passes, losing its appearance and essence and then acquiring new ones (with the exception of the “Blurface” category, which skips the glitch stage). I see the glitch not as a malfunction, but as the center of this sequence, catalyzing the emergence of a new human corporeality and revealing the collaboration between humans and machines.",
        bodycoordinateMaterial: "As my material, I use screenshots of Google Street View users that they make publicly available, often accompanied by a comment, which also becomes part of the book spreads.",
        bodycoordinateInterview: "After the stream of GSV people screenshots, an interview section with Dmitry Kavka appears, where we discuss his project “Google People”.",
        bodycoordinateQR: "Compressing 360° panoramas into a limited image on a book spread would be unfair, so the book contains bookmarks with QR codes leading to the panoramas.",
        workToyTitle: 'Book "Traditional Toy — Image, Symbol, Cultural Code"',

        traditionTitle: "Traditional Toy — Image, Symbol, Cultural Code",
        traditionIntro: "The book introduces readers to one of the most vivid and recognizable symbols of Russian traditional culture — the folk toy.",
        traditionVisual: "Russian folk toys, with their shapes and bright colors, resemble candies and their wrappers. Just as in childhood collections of candy wrappers, the pages of this catalogue present the toys in colorful packaging.",

        footerBio:
            "Graphic designer experienced in creating identities, digital content and printed materials for brands. I develop visual concepts, work with brand identities and support projects from concept to print production. I use AI tools to explore and develop visual solutions.",

        footerHSE: "HSE Art and Design School",
        footerAECourse: "After Effects Programming Course",

        footerGraphicMotionDesigner: "Graphic & Motion Designer",
        footerMotionDesigner: "Motion Designer",
        footerGraphicDesigner: "Graphic Designer",
        footerDesignIntern: "Design Intern",
        footerPresent: "2022 — Present",
        footerSamolet: "Samolet",
        footerG8: "G8 Creative Industries Festival",

        footerWinner: "Winner",
        footerPotaninAward: "Potanin Foundation Identity Redesign",

        footerSoftware: "Software",
        footerEnglish: "English — C1",
        footerGerman: "German — B1",

        workLoudEtudesTitle: "Loud Etudes Social Media"
    },

    ru: {
        brand: "СОНЯ ПЕРОВА",
        menuHome: "Главная",
        navWork: "Работы",
        navShowreel: "Шоурил",
        navContact: "Контакты",

        contactTitle: `Давайте сделаем<br>что-нибудь вместе`,
        contactDirect: "Способы связи",
        contactSocials: "Соцсети",

        heroText:
            `Привет! Меня зовут Соня Пер<span class="surname-hover" 
            data-normal="ова" data-hover="ловка">ова</span>. Я
            <span class="accent">графический и моушн-дизайнер</span>
            с бэкграундом в
            <span class="accent">иллюстрации</span>.
            Сейчас живу и работаю в Москве.`,

        calendarTitle: "Календарь по номерам",
        potaninTitle: "Брендинг фонда Потанина",
        passengersTitle: "Внимание, пассажиры",
        sculptureTitle: "Если потерялся, оставайся здесь",
        bodyTitle: "BO.ODY, CO.ORDINATE",
        portraitsTitle: "Серия портретов",
        yakutTitle: "Видео-эксплейнер «Феномен якутского кино»",
        podvorieTitle: "Брендинг арт-пространства Подворье",

        filterMotion: "МОУШН",
        filterGraphic: "ГРАФИЧЕСКИЙ ДИЗАЙН",
        filterIllustration: "ИЛЛЮСТРАЦИЯ",
        filterOther: "ДРУГОЕ",

        workNonplaceTitle: "Что такое «не-место» по Марку Оже",
        workPodvorieTitle: "Брендинг арт-пространства Подворье",
        workPotaninTitle: "Брендинг фонда Потанина",
        workAllergyTitle: "Лендинг онлайн-курса",

        filterMotion: 'МОУШН',

        nonplaceTitle:
            'Что такое «не-место» ' +
            'по Марку Оже?',

        nonplaceIntro:
            'Видео-эксплейнер о социологическом ' +
            'и философском понятии «не-места».',

        nonplaceDefinition:
            '«Не-место» — понятие, введённое Марком Оже ' +
            'для описания пространств транзита, ' +
            'временного пребывания и взаимодействия, ' +
            'в которых личная идентичность отходит на второй план.',

        nonplaceVisual:
            'Проект построен вокруг белого пространства — ' +
            'метафоры не-места, противопоставленного ' +
            'антропологическому месту. Яркая, стерильная ' +
            'и легко масштабируемая среда определяет весь ' +
            'визуальный язык и становится главным носителем идеи.',

        nonplaceContrast:
            'Антропологическое место и не-место существуют ' +
            'в проекте как противоположности. Этот контраст ' +
            'подчёркивается изменениями в композиции: когда ' +
            'повествование сосредоточено на месте, внимание ' +
            'направлено на человека; когда оно переходит ' +
            'к не-месту, фокус смещается на само пространство.',

        nonplaceGrid:
            'Сетки и рамки ограничивают белое пространство, ' +
            'буквально формируя внутри него новые не-места. ' +
            'Единый визуальный подход к фотографии, видео ' +
            'и графике показывает, как объекты, попадающие ' +
            'в эти пространства, подчиняются их логике ' +
            'и становятся частью единой системы.',

        nonplaceRole:
            'Моя роль: разработка визуальной концепции, ' +
            'статичная графика, моушн-дизайн и арт-дирекшн. ' +
            'Также я курировала работу диктора и саунд-дизайнера, ' +
            'формируя единый визуальный и звуковой язык видео.',

        footerBioTitle: "Био",
        footerEducation: "Образование",
        footerWork: "Опыт",
        footerAwards: "Награды",
        footerSkills: "Навыки",
        footerLanguages: "Языки",
        footerContacts: "Контакты",

        podvorieTitle: "Брендинг арт-пространства Подворье",
        podvorieIntro: "Подворье — независимое пространство в старом здании Персидского торгового подворья в Астрахани, галерея современного искусства, библиотека и арт-резиденция.",
        podvorieIdentity: "Основой айдентики стал текстильный коллаж, разбивающийся на несколько уровней метафоры. Визуально это отражение хенд-мейд эстетики пространства, которое живет и растет благодаря волонтерам. Паттерны тиражируют элементы логотипа-здания, образуя систему: подобно тому, как само Подворье сплетает судьбы, события и людей в единое полотно.",
        potaninTitle: "Фонд Потанина: Переплетая возможности",
        potaninIntro: "Иллюстративное переосмысление айдентики фонда. За основу взята динамичная лента, которая мягко организует пространство, позволяя разным историям фонда находить свое место. Она не доминирует, а создает среду, где профессиональная поддержка обретает человеческое измерение. Обновленный стиль отражает главное: за системой грантов стоят реальные люди и их идеи. В работу вошли плакаты, вывески и сувенирная продукция.",
        allergyTitle: "Лендинг «От апчхи до спасибо»",
        workCalendarTitle: "Календарь по номерам",
        calendarIntro: "В разных языках есть красивые и сложные слова, которые объединяют несколько чувств или передают уникальное состояние. Таких слов много, и каждое помогает по-своему описать мир вокруг. Для этого проекта я назначила каждому месяцу своё иностранное слово и оформила в формат календаря",
        calendarVisual: "В визуальной части календарь предстает как картина по номерам, где количество цветов соответствует числу дней в месяце. Принцип работы тот же, что и у слов: чтобы получить цельное изображение, нужно постепенно заполнять разные зоны, открывать новые нюансы и собирать картину по кусочкам.",
        calendarVersions: "Календарь существует в двух версиях — полузакрашенных картин по номерам и полностью интерактивных незакрашенных изображений, чтобы каждый пользователь мог сам создавать яркие месяцы от первого до последнего дня.",
        portraitsIntro: "Серия портретов культовых женщин, чья харизма и очарование с годами только усиливаются. Они не гонятся за временными трендами, а формируют их, делая зрелость основой своего уникального стиля.",
        workOldIsBoldTitle: 'Серия иллюстраций «Old is bold»',
        workBoodyTitle: 'Книга «BO.ODY, CO.ORDINATE»',
        bodycoordinateTitle: "Body / CO.ORDINATE",
        bodycoordinateIntro: "Книга. визуальное исследование преобразования тела человека в Google Street View",
        bodycoordinateGlitch: "В визуальном исследовании я предлагаю цепочку «Обнаружение — глитч — изображение» («detection — glitch — depiction»), через которую проходит тело человека, теряющее свой вид и суть, а затем приобретающий новое и то и другое (исключение — категория «Размытолицие», которые пропускают шаг глитч). Глитч я рассматриваю не как сбой, но как центр этой самой цепочки, который катализирует основной процесс появления новой телесности человека, обнажающий коллаборацию человека и машины",
        bodycoordinateMaterial: "Как материал я использую скриншоты пользователей Google Street View, которые они выкладывают в общий доступ, часто с сопровождающим комментарием (он тоже оказывается на разворотах книги)",
        bodycoordinateInterview: "После потока скриншотов GSV-людей, втискивается раздел-интервью с Дмитрием Кавкой, в котором мы разговариваем о его проекте «Google people»",
        bodycoordinateQR: "Сжимать панорамы 360 до ограниченной картинки на развороте было бы нечестно, поэтому по книге распределены закладки с кьюар-кодами, ведущими к панорамам",
        workToyTitle: 'Книга «Традиционная игрушка — образ, символ, культурный код»',

        traditionTitle: "Традиционная игрушка — образ, символ, культурный код",
        traditionIntro: "Книга знакомит читателей с одним из самых ярких и узнаваемых брендов русской традиционной культуры — народной игрушкой",
        traditionVisual: "Русские народные игрушки своей формой и яркими цветами напоминают конфеты и фантики от них. Так же как в детских альбомах с фантиками, на страницах этого каталога представлены игрушки в цветастой обертке",

        footerBio:
            "Графический дизайнер с опытом создания айдентики, digital-контента и печатных материалов для брендов. Разрабатываю визуальные концепции, работаю с фирменными стилями и сопровождаю проекты от идеи до подготовки к печати. Использую AI-инструменты для поиска и развития визуальных решений.",

        footerHSE: "Школа дизайна НИУ ВШЭ",
        footerAECourse: "Курс «Программирование в After Effects»",

        footerGraphicMotionDesigner: "Графический и моушн-дизайнер",
        footerMotionDesigner: "Моушн-дизайнер",
        footerGraphicDesigner: "Графический дизайнер",
        footerDesignIntern: "Стажер-дизайнер",
        footerPresent: "2022 — настоящее время",
        footerSamolet: "Самолет",
        footerG8: "Фестиваль креативных индустрий G8",

        footerWinner: "Победитель",
        footerPotaninAward: "Переосмысление айдентики Фонда Потанина",

        footerSoftware: "Программы",
        footerEnglish: "Английский — C1",
        footerGerman: "Немецкий — B1",

        workLoudEtudesTitle: "Социальные сети Loud Etudes",
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);

    const isRussian = lang === 'ru';
    document.documentElement.lang = isRussian ? 'ru' : 'en';
    document.body.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        const value = translations[lang][key];

        if (value) {
            element.innerHTML = value;
        }
    });

    preventShortWordBreaks();

    langButtons.forEach((button) => {
        const isActive = button.dataset.lang === lang;

        button.classList.toggle('lang-active', isActive);
        button.setAttribute(
            'aria-current',
            isActive ? 'true' : 'false'
        );
    });
    updateActiveNav();
}

function updateActiveNav() {
    let page = document.body.dataset.page;

    if (
        page === "project" ||
        page === "potanin" ||
        page === "allergy" ||
        page === "illustration"
    ) {
        page = "work";
    }

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.section === page
        );
    });
}

langButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('animate');
    });

    button.classList.add('animate');

    setLanguage(button.dataset.lang);

    setTimeout(() => {
      button.classList.remove('animate');
    }, 220);
  });
});

document.querySelectorAll('.nav-links .nav-item, .brand').forEach((item) => {
  item.addEventListener('click', (event) => {

    const href = item.getAttribute('href');

    if (!href || href === '#') return;

    event.preventDefault();

    document.querySelectorAll('.animate').forEach(el => {
      el.classList.remove('animate');
    });

    item.classList.add('animate');

    setTimeout(() => {
      window.location.href = href;
    }, 220);
  });
});

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get('lang');
    const savedLanguage = localStorage.getItem('language');

    const language =
        urlLanguage === 'ru' || urlLanguage === 'eng'
            ? urlLanguage
            : savedLanguage || 'eng';

    setLanguage(language);
    updateActiveNav();
    preventShortWordBreaks();

    const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {

    const possibleWidths = [3, 4, 5, 6, 7];

    const width =
        possibleWidths[
            Math.floor(
                Math.random() * possibleWidths.length
            )
        ];

    const start =
        Math.floor(
            Math.random() * (12 - width)
        ) + 1;

    const end = start + width;

    card.style.gridColumn = `${start} / ${end}`;

    card.style.marginTop =
        `${Math.random() * 8}vw`;

});

const filterButtons =
    document.querySelectorAll('.work-filter-item');


const illustrationGrid =
    document.querySelector(".illustration-grid");

const anriSlideshow =
    document.querySelector(".anri-slideshow");

const anriCaption =
    document.querySelector(".anri-caption");

const workGrid =
    document.querySelector(".work-grid");

const illustrationFeature =
    document.querySelector(".illustration-feature");

const graphicFeature =
    document.querySelector(".graphic-feature");

const chaykaFeature =
    document.querySelector(".chayka-feature");

const urlTag =
    new URLSearchParams(window.location.search).get('tag');

if (urlTag) {

    filterButtons.forEach(button => {

        if (button.dataset.tag === urlTag) {
            button.classList.add('active');
        }

    });

    document.querySelectorAll('.work-card').forEach(card => {

        const tags = Array.from(
            card.querySelectorAll('.work-tag')
        ).map(tag => tag.dataset.tag);

        if (!tags.includes(urlTag)) {
            card.style.display = 'none';
        }

    });

    if (illustrationGrid) {

    illustrationGrid.style.display =
        urlTag === "Illustration"
            ? "grid"
            : "none";

}

if (illustrationFeature) {

    illustrationFeature.style.display =
        urlTag === "Illustration"
            ? "block"
            : "none";

}

if (anriSlideshow) {

    anriSlideshow.style.display =
        urlTag === "Illustration"
            ? "grid"
            : "none";

}

if (anriCaption) {

    anriCaption.style.display =
        urlTag === "Illustration"
            ? "block"
            : "none";

}

if (workGrid) {
    workGrid.classList.toggle(
        "show-illustrations",
        urlTag === "Illustration"
    );

    workGrid.classList.toggle(
        "show-anri",
        urlTag === "Illustration"
    );
}

    if (graphicFeature) {
        graphicFeature.style.display =
            urlTag === "Graphic design"
                ? "grid"
                : "none";
    }

    if (chaykaFeature) {
        chaykaFeature.style.display =
            urlTag === "Graphic design"
                ? "grid"
                : "none";
    }

}


filterButtons.forEach(button => {

    button.addEventListener('click', (e) => {

        e.preventDefault();

        const alreadyActive =
            button.classList.contains('active');

        // Снимаем active со всех кнопок
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });


        // Если повторно нажали на уже активный тег —
        // возвращаем все проекты
        if (alreadyActive) {

            document.querySelectorAll('.work-card').forEach(card => {
                card.style.display = '';
            });

            if (illustrationGrid) {
                illustrationGrid.style.display = 'none';
            }

            if (anriSlideshow) {
                anriSlideshow.style.display = 'none';
            }

            if (anriCaption) {
                anriCaption.style.display = 'none';
            }

            if (workGrid) {
                workGrid.classList.remove("show-illustrations");
            }

            if (illustrationFeature) {
                illustrationFeature.style.display = 'none';
            }

            if (graphicFeature) {
                graphicFeature.style.display = 'none';
            }

            if (chaykaFeature) {
                chaykaFeature.style.display = 'none';
            }

            return;
        }


        // Активируем выбранный тег
        button.classList.add('active');

        const selectedTag =
            button.dataset.tag;


        // ФИЛЬТРАЦИЯ ПРОЕКТОВ
        document.querySelectorAll('.work-card').forEach(card => {

            const tags = Array.from(
                card.querySelectorAll('.work-tag')
            ).map(tag => tag.dataset.tag);

            if (tags.includes(selectedTag)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }

        });


        // ILLUSTRATION FEATURE
       if (illustrationGrid) {

            illustrationGrid.style.display =
                selectedTag === "Illustration"
                    ? "grid"
                    : "none";

        }

        if (anriSlideshow) {

            anriSlideshow.style.display =
                selectedTag === "Illustration"
                    ? "grid"
                    : "none";

        }

        if (anriCaption) {

            anriCaption.style.display =
                selectedTag === "Illustration"
                    ? "block"
                    : "none";

        }


        // CU / GRAPHIC DESIGN FEATURE
        if (graphicFeature) {

            graphicFeature.style.display =
                selectedTag === "Graphic design"
                    ? "grid"
                    : "none";

        }


        // CHAYKA / GRAPHIC DESIGN FEATURE
        if (chaykaFeature) {

            chaykaFeature.style.display =
                selectedTag === "Graphic design"
                    ? "grid"
                    : "none";

        }


        if (workGrid) {

            workGrid.classList.toggle(
                 "show-illustrations",
                selectedTag === "Illustration"
            );

        }

        if (workGrid) {
            workGrid.classList.toggle(
                "show-anri",
                selectedTag === "Illustration"
            );
        }

    });

});
});

// Восстанавливаем фильтр из URL
const urlParams = new URLSearchParams(window.location.search);
const urlTag = urlParams.get('tag');

if (urlTag) {

    const filterButton = document.querySelector(
        `.work-tag-filter[data-tag="${CSS.escape(urlTag)}"]`
    );

    if (filterButton) {
        filterButton.click();
    }

}

const projectData = {
    "project-nonplace.html": {
        tags: ["Motion"]
    },

    "project-podvorie.html": {
        tags: ["Graphic design", "Motion"]
    },

    "project-potanin.html": {
        tags: ["Illustration", "Motion"]
    }
};  

const currentProject =
    window.location.pathname.split("/").pop();
    

const tagsContainer =
    document.querySelector('.project-tags');

if (tagsContainer && projectData[currentProject]) {

    const tagKeys = {
        'Motion': 'filterMotion',
        'Graphic design': 'filterGraphic',
        'Illustration': 'filterIllustration',
        'Other': 'filterOther'
    };

    tagsContainer.innerHTML =
        projectData[currentProject].tags
            .map(tag => {

                const key = tagKeys[tag];

                return `
                    <a
                        href="work.html?tag=${encodeURIComponent(tag)}"
                        class="project-tag-link"
                        data-tag="${tag}"
                        data-i18n="${key}"
                    >
                        ${tag}
                    </a>
                `;
            })
            .join('');
}

document.querySelectorAll('.project-tag-link').forEach(tag => {
    tag.addEventListener('click', (event) => {
        event.preventDefault();

        const selectedTag = tag.dataset.tag;

        window.location.href =
            `./work.html?tag=${encodeURIComponent(selectedTag)}`;
    });
});

document.addEventListener('mouseover', (event) => {
    if (!event.target.classList.contains('surname-hover')) return;

    event.target.textContent = event.target.dataset.hover;
});

document.addEventListener('mouseout', (event) => {
    if (!event.target.classList.contains('surname-hover')) return;

    event.target.textContent = event.target.dataset.normal;
});

/* ==========================================================
   MOBILE MENU — DUMBAR STYLE
   ========================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {

    const pageContent = document.querySelector(".page-content");

    if (pageContent) {
      const rect = pageContent.getBoundingClientRect();

      const originX = window.innerWidth / 2 - rect.left;
      const originY = window.innerHeight / 2 - rect.top;

      pageContent.style.transformOrigin = `${originX}px ${originY}px`;
    }

    const isOpen = mobileMenu.classList.contains("is-open");

    if (!isOpen) {

      /* = → × */
      menuToggle.classList.add("is-animating");

      /* Анимация старого контента */
      document.documentElement.classList.add("menu-is-open");

      /* Открываем меню */
      mobileMenu.classList.add("is-open");

      document.body.classList.add("menu-open");

      menuToggle.setAttribute("aria-expanded", "true");

    } else {

      /* × → = */
      menuToggle.classList.remove("is-animating");

      /* запускаем зеркальную анимацию пунктов меню */
      mobileMenu.classList.add("is-closing");
      document.documentElement.classList.add("menu-is-closing");

      /* возвращаем страницу 0.9 → 1 */
      document.documentElement.classList.remove("menu-is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      /* ждём завершения scale-анимации */
      setTimeout(() => {

        mobileMenu.classList.remove("is-open");
        mobileMenu.classList.remove("is-closing");
        document.documentElement.classList.remove("menu-is-closing");

        document.body.classList.remove("menu-open");

      }, 90);
    }
  });


  /* Нажатие на пункт меню */

  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      menuToggle.classList.remove("is-animating");

      mobileMenu.classList.remove("is-open");

      document.documentElement.classList.remove("menu-is-open");

      document.body.classList.remove("menu-open");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}

function splitRevealWords(element) {

    let delay = 0;

    function process(node) {

        if (node.nodeType === Node.TEXT_NODE) {

            const fragment = document.createDocumentFragment();

            node.textContent.split(/(\s+)/).forEach(part => {

                if (part === "") return;

                if (/^\s+$/.test(part)) {
                    fragment.appendChild(document.createTextNode(part));
                    return;
                }

                const outer = document.createElement("span");
                outer.className = "rw-word";

                const inner = document.createElement("span");
                inner.className = "rw-word-inner";

                inner.textContent = part;
                inner.style.transitionDelay = `${delay}ms`;

                delay += 55;

                outer.appendChild(inner);
                fragment.appendChild(outer);

            });

            node.replaceWith(fragment);

            return;
        }

        if (node.nodeType !== Node.ELEMENT_NODE) return;

        if (node.tagName === "BR") return;

        [...node.childNodes].forEach(process);

    }

    [...element.childNodes].forEach(process);

    const observer = new IntersectionObserver(entries => {

        if (!entries[0].isIntersecting) return;

        element.classList.add("is-visible");
        observer.disconnect();

    }, {
        threshold: 0.2
    });

    observer.observe(element);

}

document.querySelectorAll(".reveal-words").forEach(splitRevealWords);

// =========================================
// SAVE CURRENT PROJECT ORDER
// =========================================

if (document.body.dataset.page === "work") {

    document.querySelectorAll(".work-card").forEach(card => {

        card.addEventListener("click", () => {

            const visibleProjects = [...document.querySelectorAll(".work-card")]

                .filter(card => card.offsetParent !== null)

                .map(card => card.getAttribute("href"));

            sessionStorage.setItem(
                "projectOrder",
                JSON.stringify(visibleProjects)
            );

        });

    });

}

// =========================================
// PROJECT NAVIGATION
// =========================================

const page = document.body.dataset.page;

if (
    page === "project" ||
    page === "allergy" ||
    page === "potanin"
) {

    const projectOrder = JSON.parse(
        sessionStorage.getItem("projectOrder")
    );

    if (projectOrder) {

        const current =
            location.pathname.split("/").pop();

        const index =
            projectOrder.indexOf(current);

        if (index !== -1) {

            const prev =
                projectOrder[
                    (index - 1 + projectOrder.length)
                    % projectOrder.length
                ];

            const next =
                projectOrder[
                    (index + 1)
                    % projectOrder.length
                ];

            document.querySelectorAll(".project-arrow-left").forEach(arrow => {
                arrow.href = prev;
            });

            document.querySelectorAll(".project-arrow-right").forEach(arrow => {
                arrow.href = next;
            });

        }

    }

}

// ==========================================================
// ANRI SLIDESHOW
// ==========================================================

// ==========================================================
// ANRI SLIDESHOW
// ==========================================================

const anriSlideshow =
    document.querySelector(".anri-slideshow");

if (anriSlideshow) {
    const slides =
        anriSlideshow.querySelectorAll(".anri-slide");

    let currentSlide = 0;

    if (slides.length > 0) {

        // Первый слайд виден сразу
        slides[0].classList.add("is-active");

        setInterval(() => {

            slides[currentSlide].classList.remove("is-active");

            currentSlide =
                (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("is-active");

        }, 2000);
    }
}

const graphicFeatureSlide =
    document.getElementById("graphic-feature-slide");

if (graphicFeatureSlide) {

    const graphicFeatureImages = [
        "images/cu1.png",
        "images/cu2.png",
        "images/cu3.png",
        "images/cu4.png",
        "images/cu5.png"
    ];

    let graphicFeatureIndex = 0;

    setInterval(() => {

        graphicFeatureIndex =
            (graphicFeatureIndex + 1) %
            graphicFeatureImages.length;

        graphicFeatureSlide.src =
            graphicFeatureImages[graphicFeatureIndex];

    }, 1000);
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add("is-visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

revealOnScroll();

/* ==========================================================
   CHAYKA GRAPHIC DESIGN SLIDESHOW
   ========================================================== */

const chaykaFeatureSlide =
    document.getElementById("chayka-feature-slide");

if (chaykaFeatureSlide) {

    const chaykaImages = [];

    for (let i = 1; i <= 39; i++) {
        chaykaImages.push(`images/chayka${i}.png`);
    }

    let chaykaIndex = 0;

    setInterval(() => {

        chaykaIndex =
            (chaykaIndex + 1) % chaykaImages.length;

        chaykaFeatureSlide.src =
            chaykaImages[chaykaIndex];

    }, 1000);
}   

/* ==========================================================
   SINGLE ILLUSTRATION NAVIGATION
   ========================================================== */

if (document.body.dataset.page === "illustration") {

    const illustrations = [
        "images/anri1.png",
        "images/anri2.png",
        "images/anri3.png"
    ];

    const illustrationImg =
        document.getElementById("one-illustration-img");

    const leftArrow =
        document.querySelector(".illustration-arrow-left");

    const rightArrow =
        document.querySelector(".illustration-arrow-right");


    const urlParams =
        new URLSearchParams(window.location.search);

    let currentIndex =
        parseInt(urlParams.get("i") || "0", 10);

    if (
        Number.isNaN(currentIndex) ||
        currentIndex < 0 ||
        currentIndex >= illustrations.length
    ) {
        currentIndex = 0;
    }


    function updateIllustration() {

        illustrationImg.src =
            illustrations[currentIndex];

        leftArrow.href =
            `oneillustration.html?i=${
                (currentIndex - 1 + illustrations.length)
                % illustrations.length
            }`;

        rightArrow.href =
            `oneillustration.html?i=${
                (currentIndex + 1)
                % illustrations.length
            }`;
    }


    updateIllustration();

}

/* ==========================================================
   CUSTOM CURSOR FOR SINGLE ILLUSTRATION
   ========================================================== */

if (document.body.dataset.page === "illustration") {

    const illustration =
        document.querySelector(".one-illustration-image");

    if (illustration) {

        const cursor =
            document.createElement("img");

        cursor.src = "images/fullarrow.svg";
        cursor.className = "illustration-custom-cursor";

        document.body.appendChild(cursor);


        illustration.addEventListener("mouseenter", () => {
            cursor.style.opacity = "1";
            illustration.style.cursor = "none";
        });

        illustration.addEventListener("mouseleave", () => {
            cursor.style.opacity = "0";
            illustration.style.cursor = "auto";
        });


        illustration.addEventListener("mousemove", (event) => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;

        });

    }

}

/* ==========================================================
   ANRI LIGHTBOX
   ========================================================== */

const anriLightbox = document.querySelector("#anri-lightbox");
const anriLightboxImg = document.querySelector("#anri-lightbox-img");

const anriLightboxLeft =
    document.querySelector(".anri-lightbox-arrow-left");

const anriLightboxRight =
    document.querySelector(".anri-lightbox-arrow-right");

const anriImages = [
    "images/anri1.png",
    "images/anri2.png",
    "images/anri3.png"
];

let anriLightboxIndex = 0;

function openAnriLightbox(index) {
    if (!anriLightbox || !anriLightboxImg) return;

    anriLightboxIndex = index;

    anriLightboxImg.src =
        anriImages[anriLightboxIndex];

    anriLightbox.classList.add("is-open");
    document.body.classList.add("anri-lightbox-open");
}

function closeAnriLightbox() {
    if (!anriLightbox) return;

    anriLightbox.classList.remove("is-open");
    document.body.classList.remove("anri-lightbox-open");
}


/* Открываем именно активную картинку */

const anriSlideshowElement =
    document.querySelector(".anri-slideshow");

if (anriSlideshowElement) {

    anriSlideshowElement.addEventListener("click", (event) => {

        const activeSlide =
            anriSlideshowElement.querySelector(".anri-slide.is-active");

        if (!activeSlide) return;

        const src =
            activeSlide.getAttribute("src");

        const index =
            anriImages.indexOf(src);

        if (index === -1) return;

        event.preventDefault();
        event.stopPropagation();

        openAnriLightbox(index);
    });

}


/* Стрелки */

anriLightboxLeft?.addEventListener("click", (event) => {

    event.stopPropagation();

    anriLightboxIndex =
        (anriLightboxIndex - 1 + anriImages.length) %
        anriImages.length;

    anriLightboxImg.src =
        anriImages[anriLightboxIndex];

});


anriLightboxRight?.addEventListener("click", (event) => {

    event.stopPropagation();

    anriLightboxIndex =
        (anriLightboxIndex + 1) %
        anriImages.length;

    anriLightboxImg.src =
        anriImages[anriLightboxIndex];

});


/* Закрытие по фону */

anriLightbox?.addEventListener("click", (event) => {

    if (event.target === anriLightbox) {
        closeAnriLightbox();
    }

});


/* Клавиатура */

document.addEventListener("keydown", (event) => {

    if (!anriLightbox?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
        closeAnriLightbox();
    }

    if (event.key === "ArrowLeft") {
        anriLightboxLeft?.click();
    }

    if (event.key === "ArrowRight") {
        anriLightboxRight?.click();
    }

});

/* ==========================================================
   4BREWERS LIGHTBOX
   ========================================================== */

const fourBrewersImages = [
    "images/4Brewers1.png",
    "images/kamikadze.png",
    "images/kamikadze2.png",
    "images/4Brewers.png"
];

const fourBrewersSlideshowImages = [
    "images/4Brewers1.png",
    "images/kamikadze.png",
    "images/4Brewers.png"
];

const fourBrewersClickMap = {
    "images/4Brewers1.png": 0,
    "images/kamikadze.png": 1,
    "images/kamikadze2.png": 1,
    "images/4Brewers.png": 3
};

const fourBrewersLightbox =
    document.querySelector("#fourbrewers-lightbox");

const fourBrewersLightboxImg =
    document.querySelector("#fourbrewers-lightbox-img");

const fourBrewersLeft =
    document.querySelector(".fourbrewers-lightbox-arrow-left");

const fourBrewersRight =
    document.querySelector(".fourbrewers-lightbox-arrow-right");

const fourBrewersSlides =
    document.querySelectorAll(".illustration-feature .illustration-item img");

let fourBrewersLightboxIndex = 0;


function openFourBrewersLightbox(index) {

    if (!fourBrewersLightbox || !fourBrewersLightboxImg) return;

    fourBrewersLightboxIndex = index;

    fourBrewersLightboxImg.src =
        fourBrewersImages[fourBrewersLightboxIndex];

    fourBrewersLightbox.classList.add("is-open");

    document.body.classList.add("fourbrewers-lightbox-open");
}


function closeFourBrewersLightbox() {

    if (!fourBrewersLightbox) return;

    fourBrewersLightbox.classList.remove("is-open");

    document.body.classList.remove("fourbrewers-lightbox-open");
}


fourBrewersSlides.forEach((slide) => {

    const src = slide.getAttribute("src");

    const imageIndex = fourBrewersClickMap[src];

    if (imageIndex !== undefined) {

        slide.style.cursor = "pointer";

        slide.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            openFourBrewersLightbox(imageIndex);

        });

    }

});


fourBrewersLeft?.addEventListener("click", (event) => {

    event.stopPropagation();

    fourBrewersLightboxIndex =
        (fourBrewersLightboxIndex - 1 + fourBrewersSlideshowImages.length) %
        fourBrewersSlideshowImages.length;

    fourBrewersLightboxImg.src =
        fourBrewersSlideshowImages[fourBrewersLightboxIndex];

});


fourBrewersRight?.addEventListener("click", (event) => {

    event.stopPropagation();

    fourBrewersLightboxIndex =
        (fourBrewersLightboxIndex + 1) %
        fourBrewersSlideshowImages.length;

    fourBrewersLightboxImg.src =
        fourBrewersSlideshowImages[fourBrewersLightboxIndex];

});


fourBrewersLightbox?.addEventListener("click", (event) => {

    if (
        event.target !== fourBrewersLightboxImg &&
        !event.target.closest(".fourbrewers-lightbox-arrow")
    ) {
        closeFourBrewersLightbox();
    }

});


document.addEventListener("keydown", (event) => {

    if (!fourBrewersLightbox?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
        closeFourBrewersLightbox();
    }

    if (event.key === "ArrowLeft") {
        fourBrewersLeft?.click();
    }

    if (event.key === "ArrowRight") {
        fourBrewersRight?.click();
    }

});

/* ==========================================================
   LOUD ETUDES — IMAGE SLIDESHOW
   ========================================================== */

const loudFeatureSlide =
    document.getElementById("loud-feature-slide");

if (loudFeatureSlide) {

    const loudImages = [
        "images/loud2 1.png",
        "images/loud4 1.png"
    ];

    let loudIndex = 0;

    setInterval(() => {

        loudIndex =
            (loudIndex + 1) % loudImages.length;

        loudFeatureSlide.src =
            loudImages[loudIndex];

    }, 2000);
}