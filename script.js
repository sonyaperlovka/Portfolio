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
        brand: "SONIA PEROVA",
        navWork: "WORK",
        navShowreel: "SHOWREEL",
        navContact: "CONTACT",

        heroText:
            `Hi! My name is Sonya Per<span class="surname-hover" 
            data-normal="ova" data-hover="lovka">ova</span>. I'm a
            <span>graphic & motion designer</span>
            with background in
            <span>illustration</span>.
            Currently based in Moscow.`,

        calendarTitle: "Calendar by Numbers",
        potaninTitle: "Potanin Foundation Branding",
        passengersTitle: "Attention, Passengers",
        sculptureTitle: "If You Are Lost, Stay Here",
        bodyTitle: "BO.ODY, CO.ORDINATE",
        portraitsTitle: "Portrait Series",
        yakutTitle: "Explainer Video «The Phenomenon of Yakut Cinema»",
        podvorieTitle: "Podvorie Art Space Branding",

        filterMotion: "Motion",
        filterGraphic: "Graphic design",
        filterIllustration: "Illustration",
        filterOther: "Other",

        workNonplaceTitle: "What Is a “Non-place” According to Marc Augé?",
        workPodvorieTitle: "Podvorie Art Space Branding",
        workPotaninTitle: "Potanin Foundation Branding",
        workAllergyTitle: "Online Course Landing Page",

        filterMotion: 'Motion',

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
        footerGerman: "German — B1"
    },

    ru: {
        brand: "СОНЯ ПЕРОВА",
        navWork: "РАБОТЫ",
        navShowreel: "ШОУРИЛ",
        navContact: "КОНТАКТЫ",

        heroText:
            `Привет! Меня зовут Соня Пер<span class="surname-hover" 
            data-normal="ова" data-hover="ловка">ова</span>. Я
            <span>графический и моушн-дизайнер</span>
            с бэкграундом в
            <span>иллюстрации</span>.
            Сейчас живу и работаю в Москве.`,

        calendarTitle: "Календарь по номерам",
        potaninTitle: "Брендинг фонда Потанина",
        passengersTitle: "Внимание, пассажиры",
        sculptureTitle: "Если потерялся, оставайся здесь",
        bodyTitle: "BO.ODY, CO.ORDINATE",
        portraitsTitle: "Серия портретов",
        yakutTitle: "Видео-эксплейнер «Феномен якутского кино»",
        podvorieTitle: "Брендинг арт-пространства Подворье",

        filterMotion: "Моушн",
        filterGraphic: "Графический дизайн",
        filterIllustration: "Иллюстрация",
        filterOther: "Другое",

        workNonplaceTitle: "Что такое «не-место» по Марку Оже",
        workPodvorieTitle: "Брендинг арт-пространства Подворье",
        workPotaninTitle: "Брендинг фонда Потанина",
        workAllergyTitle: "Лендинг онлайн-курса",

        filterMotion: 'Моушн',

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
        footerGerman: "Немецкий — B1"
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

    // Все страницы отдельных проектов относятся к WORK
    if (page === 'project') {
        page = 'work';
    }

    navLinks.forEach(link => {
        link.classList.toggle(
            'active',
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


  if (selectedTag) {
      filterButtons.forEach(button => {
          if (
              button.textContent.trim() === selectedTag
          ) {
              button.classList.add('active');
          }
      });
  }

  if (selectedTag) {
      document.querySelectorAll('.work-card').forEach(card => {

          const tags = Array.from(
              card.querySelectorAll('.work-tag')
          ).map(tag => tag.dataset.tag);

          if (!tags.includes(selectedTag)) {
              card.style.display = 'none';
          }
      });
  }

  filterButtons.forEach(button => {

      button.addEventListener('click', (e) => {
          e.preventDefault();

          const alreadyActive =
              button.classList.contains('active');

          filterButtons.forEach(btn => {
              btn.classList.remove('active');
          });

          document.querySelectorAll('.work-card').forEach(card => {
              card.style.display = '';
          });

          if (alreadyActive) return;

          button.classList.add('active');

          const selectedTag = button.dataset.tag;

          document.querySelectorAll('.work-card').forEach(card => {

              const tags = Array.from(
                  card.querySelectorAll('.work-tag')
              ).map(tag =>
                  tag.dataset.tag
              );

              if (!tags.includes(selectedTag)) {
                  card.style.display = 'none';
              }

          });

      });

  });
});

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

const urlParams = new URLSearchParams(window.location.search);
const selectedTag = urlParams.get('tag');

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

if (selectedTag) {
    document.querySelectorAll('.work-filter-item').forEach(button => {

        if (button.dataset.tag === selectedTag) {
            button.classList.add('active');
        }

    });
} 

document.querySelectorAll('.project-tag-link').forEach(tag => {
    tag.addEventListener('click', e => {
        e.preventDefault();

        tag.classList.add('active');

        setTimeout(() => {
            window.location.href = tag.href;
        }, 180);
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
