// ===========================
// Translations
// ===========================
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    'hero.tag': '&#x1F44B; Hi, my name is',
    'hero.subtitle': 'Engineering Student &amp; Developer',
    'hero.desc': '<strong>2nd Year</strong> student at the Faculty of Automation, Computers, Electrical and Electronics Engineering in Galati. Developer, modder, MC and volunteer &mdash; passionate about programming and gaming.',
    'hero.btn1': 'My Projects',
    'hero.btn2': 'Contact',
    'about.tag': 'Who I am',
    'about.title': 'About Me',
    'about.p1': "I&apos;m <strong>Prozan Bogdan-M&#x103;d&#x103;lin</strong>, a 2nd Year student at the <strong>Faculty of Automation, Computers, Electrical and Electronics Engineering</strong> in Galati. I code out of passion &mdash; from Python apps and 2D games, to mods published on NexusMods and web projects. I excel at <strong>prompt engineering</strong>, playtesting, and debugging &mdash; finding bugs in application code and games.",
    'about.p2': "I have experience in <strong>RE Engine modding</strong> (REFramework + Lua) for the game PRAGMATA, with mods published on NexusMods and used by the community. I&apos;m the founder and IGL of a competitive <strong>Dead by Daylight</strong> eSports team.",
    'about.p3': 'Beyond coding: <strong>MC and presenter</strong> at school events on the stage of the &ldquo;Fani Tardini&rdquo; Dramatic Theatre in Galati, <strong>Erasmus+</strong> participant in Croatia, volunteer with children with Down syndrome, guitarist and competitive ballroom dancer.',
    'skills.title': 'Technologies',
    'edu.tag': 'My journey',
    'edu.title': 'Education',
    'edu.univ.badge': '2024 &mdash; Present',
    'edu.univ.title': 'Faculty of Automation, Computers, Electrical and Electronics Engineering',
    'edu.univ.location': 'Galati, Romania',
    'edu.univ.desc': '2nd Year Student. In-depth study of computer science, electronics, automation and computer engineering.',
    'edu.univ.tag': 'University &bull; Year 2',
    'edu.hs.badge': '2020 &mdash; 2024',
    'edu.hs.title': 'Theoretical High School &ldquo;Dun&#x103;rea&rdquo;, Gala&#x21B;i',
    'edu.hs.location': 'Galati, Romania',
    'edu.hs.desc': 'Mathematics and Computer Science profile. Main subjects: Computer Science (C++), Mathematics, Physics. Strong foundations in programming, algorithms and logical thinking.',
    'edu.hs.tag': 'High School &bull; Graduated 2024',
    'edu.cert.title': 'Online Certifications &mdash; AI &amp; Machine Learning',
    'edu.cert.desc': 'Completed courses: <strong>Python</strong> (data structures, functions, libraries), <strong>Intro to Machine Learning</strong> (decision trees, validation), <strong>Intermediate Machine Learning</strong> (XGBoost, pipelines, categorical variables), <strong>Building AI</strong> (AI fundamentals and algorithm applicability).',
    'edu.cert.tag': 'Certification &bull; Kaggle &bull; Building AI',
    'edu.ic3.title': 'IC3 &mdash; Internet and Computing Core Certification',
    'edu.ic3.location': 'International Certification',
    'edu.ic3.desc': 'Advanced digital skills attested by the international IC3 certification.',
    'edu.ic3.tag': 'International Certification',
    'proj.tag': "What I&apos;ve built",
    'proj.title': 'My Projects',
    'badge.featured': 'Featured',
    'proj.dbd.desc': 'Desktop timer overlay for <strong>Dead by Daylight</strong> built in C#. Provides precise real-time timer information during gameplay to help players make better decisions.',
    'proj.dbdtool.desc': 'The most powerful overlay ever built for <strong>Dead by Daylight</strong>. A collaborative project developed on GitHub, engineered in <strong>Rust</strong> with a <strong>Tauri + React + TypeScript</strong> frontend. Designed to give players a competitive edge with real-time data.',
    'badge.collab': 'Collaborative',
    'link.discord': 'Discord Server',
    'proj.dating.desc': 'Dating web app built with JavaScript, CSS, HTML and Python/SQL for the backend. University project with structured interface and user-friendly design.',
    'proj.noclip.desc': 'Mod for <strong>PRAGMATA</strong> (RE Engine) developed with <strong>REFramework</strong> and Lua. Enables free-fly through the map, full keyboard + gamepad support, adjustable speeds, anti-death and out-of-bounds exploration.',
    'proj.fov.desc': 'Mod for <strong>PRAGMATA</strong> that adds a slider for modifying the Field of View (30&ndash;160) in real time, integrated into the REFramework overlay, with a system preventing automatic camera reset by the engine.',
    'proj.mindtrainer.desc': 'Interactive app for training cognitive abilities through mini-games focused on memory, reaction time and math.',
    'proj.password.desc': 'Application for storing and managing passwords, using Python with SQLite3 and Tkinter.',
    'proj.mage05.desc': 'Advanced version with multiple levels (Underworld, Overworld, Imaginary World), AI for enemy behavior and modular code.',
    'proj.mage.desc': 'My first game written entirely from scratch in Python with Pygame. The starting point of my game development journey.',
    'proj.tasks.desc': 'Task management application built in Python with the Tkinter library.',
    'proj.calc.desc': 'Calculator application built in Python with a graphical interface in Tkinter.',
    'proj.clicker.desc': 'Clicker-type game developed in Python. A simple yet engaging project.',
    'proj.api.desc': 'API project developed in Python. Implementation and testing of REST endpoints.',
    'proj.oop.desc': 'Laboratory project for the Object-Oriented Programming course, developed in Java.',
    'proj.oopteam.desc': 'Collaborative OOP project developed together with teammates Onica, Dragaescu and Patrascu.',
    'proj.vehicul.desc': 'Implementation of three instances of the Electric class &mdash; object-oriented project.',
    'proj.mini.desc': 'Collection of mini-projects and experiments in Python. Various explored ideas and concepts.',
    'proj.cta': 'View all projects on GitHub',
    'ach.tag': 'Beyond code',
    'ach.title': 'Achievements &amp; Activities',
    'ach.mc.title': 'MC &amp; Presenter',
    'ach.mc.desc': 'Main presenter at all events of Theoretical High School &ldquo;Dun&#x103;rea&rdquo; and MC at &ldquo;Students&apos; Evening&rdquo; &mdash; on the stage of the &ldquo;Fani Tardini&rdquo; Dramatic Theatre in Galati.',
    'ach.erasmus.title': 'Erasmus+',
    'ach.erasmus.desc': 'Participant in the international Erasmus+ project with mobility to Croatia and hosting students from Turkey in Romania.',
    'ach.esports.title': 'eSports Leader',
    'ach.esports.desc': 'Founder and In-Game Leader (IGL) of a competitive Dead by Daylight team. Responsible for strategy, team dynamics and communication under pressure.',
    'ach.council.title': 'Student Council',
    'ach.council.desc': 'President and subsequently Secretary of the Student Council at Theoretical High School &ldquo;Dun&#x103;rea&rdquo; &mdash; representing student interests and mediating between students and school management.',
    'ach.volunteer.title': 'Volunteering',
    'ach.volunteer.desc': 'Volunteer supporting the integration of children with Down syndrome, and volunteer in the organizing team of the Galati Half-Marathon.',
    'ach.music.title': 'Music &amp; Dance',
    'ach.music.desc': 'Passionate guitarist and competitive ballroom dancer &mdash; discipline, perseverance and coordination transferred into coding as well.',
    'contact.tag': "Let&apos;s stay in touch",
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.discord.server': 'Discord &mdash; DBD Overlay',
    'contact.discord.link': 'Join the server',
    'contact.discord.handle': 'Discord Handle',
    'collab.status': 'Available for collaboration',
    'collab.title': 'Open to partnerships &amp; company collaborations',
    'collab.desc': "Whether you&apos;re a company looking for a developer, a team in need of a collaborator, or a studio that needs someone for playtesting and debugging &mdash; I&apos;m open to discussing any opportunity.",
    'collab.btn': 'Get in Touch',
  },
  ro: {
    'nav.home': 'Acas&#x103;',
    'nav.about': 'Despre',
    'nav.education': 'Educa&#x21B;ie',
    'nav.projects': 'Proiecte',
    'nav.achievements': 'Realiz&#x103;ri',
    'nav.contact': 'Contact',
    'hero.tag': '&#x1F44B; Bun&#x103;, m&#x103; numesc',
    'hero.subtitle': 'Student Inginer &amp; Developer',
    'hero.desc': 'Student &#xEE;n <strong>Anul II</strong> la Facultatea de Automatic&#x103;, Calculatoare, Inginerie Electric&#x103; &#x219;i Electronic&#x103; din Gala&#x21B;i. Developer, modder, MC &#x219;i voluntar &mdash; pasionat de programare &#x219;i gaming.',
    'hero.btn1': 'Proiectele Mele',
    'hero.btn2': 'Contact',
    'about.tag': 'Cine sunt',
    'about.title': 'Despre Mine',
    'about.p1': 'Sunt <strong>Prozan Bogdan-M&#x103;d&#x103;lin</strong>, student &#xEE;n Anul II la <strong>Facultatea de Automatic&#x103;, Calculatoare, Inginerie Electric&#x103; &#x219;i Electronic&#x103;</strong> din Gala&#x21B;i. Programez din pasiune &mdash; de la aplica&#x21B;ii Python &#x219;i jocuri 2D, la mods publicate pe NexusMods &#x219;i proiecte web. Exceleze la <strong>prompt engineering</strong>, playtesting &#x219;i debugging &mdash; identificarea bug-urilor &#xEE;n cod &#x219;i jocuri.',
    'about.p2': 'Am experien&#x21B;&#x103; &#xEE;n <strong>modding RE Engine</strong> (REFramework + Lua) pentru jocul PRAGMATA, cu mods publicate pe NexusMods &#x219;i folosite de comunitate. Sunt fondator &#x219;i IGL al unei echipe de eSports competitive de <strong>Dead by Daylight</strong>.',
    'about.p3': '&#xCE;n afara program&#x103;rii: <strong>MC &#x219;i prezentator</strong> la evenimentele liceului pe scena Teatrului Dramatic &ldquo;Fani Tardini&rdquo; din Gala&#x21B;i, participant <strong>Erasmus+</strong> &#xEE;n Croa&#x21B;ia, voluntar cu copii cu sindrom Down, chitarist &#x219;i dansator de dans sportiv.',
    'skills.title': 'Tehnologii',
    'edu.tag': 'Parcursul meu',
    'edu.title': 'Educa&#x21B;ie',
    'edu.univ.badge': '2024 &mdash; Prezent',
    'edu.univ.title': 'Facultatea de Automatic&#x103;, Calculatoare, Inginerie Electric&#x103; &#x219;i Electronic&#x103;',
    'edu.univ.location': 'Gala&#x21B;i, Rom&#xE2;nia',
    'edu.univ.desc': 'Student &#xEE;n Anul II. Studiu aprofundat al informaticii, electronicii, automaticii &#x219;i ingineriei calculatoarelor.',
    'edu.univ.tag': 'Universitate &bull; Anul 2',
    'edu.hs.badge': '2020 &mdash; 2024',
    'edu.hs.title': 'Liceul Teoretic &ldquo;Dun&#x103;rea&rdquo;, Gala&#x21B;i',
    'edu.hs.location': 'Gala&#x21B;i, Rom&#xE2;nia',
    'edu.hs.desc': 'Profil Matematic&#x103;-Informatic&#x103;. Materii principale: Informatic&#x103; (C++), Matematic&#x103;, Fizic&#x103;. Baze solide &#xEE;n programare, algoritmi &#x219;i g&#xE2;ndire logic&#x103;.',
    'edu.hs.tag': 'Liceu &bull; Absolvit 2024',
    'edu.cert.title': 'Certific&#x103;ri Online &mdash; AI &amp; Machine Learning',
    'edu.cert.desc': 'Cursuri finalizate: <strong>Python</strong> (structuri de date, func&#x21B;ii, biblioteci), <strong>Intro to Machine Learning</strong> (arbori de decizie, validare), <strong>Intermediate Machine Learning</strong> (XGBoost, pipelines, variabile categorice), <strong>Building AI</strong> (fundamente AI &#x219;i aplicabilitate algoritmi).',
    'edu.cert.tag': 'Certificare &bull; Kaggle &bull; Building AI',
    'edu.ic3.title': 'IC3 &mdash; Internet and Computing Core Certification',
    'edu.ic3.location': 'Certificare Interna&#x21B;ional&#x103;',
    'edu.ic3.desc': 'Competen&#x21B;e digitale avansate atestate prin certificarea interna&#x21B;ional&#x103; IC3.',
    'edu.ic3.tag': 'Certificare Interna&#x21B;ional&#x103;',
    'proj.tag': 'Ce am construit',
    'proj.title': 'Proiectele Mele',
    'badge.featured': 'Recomandat',
    'proj.dbd.desc': 'Overlay de timer pentru <strong>Dead by Daylight</strong> construit &#xEE;n C#. Ofer&#x103; informa&#x21B;ii precise de timer &#xEE;n timp real &#xEE;n timpul jocului pentru a ajuta juc&#x103;torii s&#x103; ia decizii mai bune.',
    'proj.dbdtool.desc': 'Cel mai puternic overlay construit vreodat&#x103; pentru <strong>Dead by Daylight</strong>. Proiect colaborativ dezvoltat pe GitHub, construit &#xEE;n <strong>Rust</strong> cu frontend &#xEE;n <strong>Tauri + React + TypeScript</strong>. Conceput s&#x103; ofere juc&#x103;torilor un avantaj competitiv cu date &#xEE;n timp real.',
    'badge.collab': 'Colaborativ',
    'link.discord': 'Server Discord',
    'proj.dating.desc': 'Aplica&#x21B;ie web de dating construit&#x103; cu JavaScript, CSS, HTML &#x219;i Python/SQL pentru backend. Proiect universitar cu interfa&#x21B;&#x103; structurat&#x103; &#x219;i design user-friendly.',
    'proj.noclip.desc': 'Mod pentru <strong>PRAGMATA</strong> (RE Engine) dezvoltat cu <strong>REFramework</strong> &#x219;i Lua. Permite free-fly prin map&#x103;, suport complet keyboard + gamepad, viteze ajustabile, anti-death &#x219;i explorare out-of-bounds.',
    'proj.fov.desc': 'Mod pentru <strong>PRAGMATA</strong> care adaug&#x103; un slider pentru modificarea Field of View (30&ndash;160) &#xEE;n timp real, integrat &#xEE;n overlay-ul REFramework, cu sistem care previne resetul automat al camerei de c&#x103;tre engine.',
    'proj.mindtrainer.desc': 'Aplica&#x21B;ie interactiv&#x103; pentru antrenarea abilit&#x103;&#x21B;ilor cognitive prin mini-jocuri axate pe memorie, timp de reac&#x21B;ie &#x219;i matematic&#x103;.',
    'proj.password.desc': 'Program pentru stocarea &#x219;i gestionarea parolelor, folosind Python cu SQLite3 &#x219;i Tkinter.',
    'proj.mage05.desc': 'Versiune avansat&#x103; cu nivele multiple (Underworld, Overworld, Imaginary World), AI pentru comportamentul inamicilor &#x219;i cod modular.',
    'proj.mage.desc': 'Primul meu joc scris complet de la zero &#xEE;n Python cu Pygame. Punctul de start al c&#x103;l&#x103;toriei mele &#xEE;n game development.',
    'proj.tasks.desc': 'Aplica&#x21B;ie de gestionare a task-urilor construit&#x103; &#xEE;n Python cu biblioteca Tkinter.',
    'proj.calc.desc': 'Aplica&#x21B;ie calculator construit&#x103; &#xEE;n Python cu interfa&#x21B;&#x103; grafic&#x103; realizat&#x103; &#xEE;n Tkinter.',
    'proj.clicker.desc': 'Joc de tip clicker dezvoltat &#xEE;n Python. Un proiect simplu dar captivant.',
    'proj.api.desc': 'Proiect de API dezvoltat &#xEE;n Python. Implementare &#x219;i testare de endpoint-uri REST.',
    'proj.oop.desc': 'Proiect de laborator pentru cursul de Programare Orientat&#x103; pe Obiecte, realizat &#xEE;n Java.',
    'proj.oopteam.desc': 'Proiect colaborativ OOP realizat &#xEE;mpreun&#x103; cu colegii Onica, Dr&#x103;g&#x103;escu &#x219;i P&#x103;trascu.',
    'proj.vehicul.desc': 'Implementare a trei instan&#x21B;e ale clasei Electric&#x103; &mdash; proiect orientat pe obiecte.',
    'proj.mini.desc': 'Colec&#x21B;ie de mini-proiecte &#x219;i experimente &#xEE;n Python. Diverse idei &#x219;i concepte explorate.',
    'proj.cta': 'Vezi toate proiectele pe GitHub',
    'ach.tag': 'Dincolo de cod',
    'ach.title': 'Realiz&#x103;ri &amp; Activit&#x103;&#x21B;i',
    'ach.mc.title': 'MC &amp; Prezentator',
    'ach.mc.desc': 'Prezentator principal la toate evenimentele Liceului Teoretic &ldquo;Dun&#x103;rea&rdquo; &#x219;i MC la &ldquo;Seara Studen&#x21B;ilor&rdquo; &mdash; pe scena Teatrului Dramatic &ldquo;Fani Tardini&rdquo; din Gala&#x21B;i.',
    'ach.erasmus.title': 'Erasmus+',
    'ach.erasmus.desc': 'Participant la proiectul interna&#x21B;ional Erasmus+ cu mobilitate &#xEE;n Croa&#x21B;ia &#x219;i g&#x103;zduire de studen&#x21B;i din Turcia &#xEE;n Rom&#xE2;nia.',
    'ach.esports.title': 'Lider eSports',
    'ach.esports.desc': 'Fondator &#x219;i In-Game Leader (IGL) al unei echipe competitive de Dead by Daylight. Responsabil de strategie, dinamica echipei &#x219;i comunicare sub presiune.',
    'ach.council.title': 'Consiliul Elevilor',
    'ach.council.desc': 'Pre&#x219;edinte &#x219;i ulterior Secretar al Consiliului Elevilor la Liceul Teoretic &ldquo;Dun&#x103;rea&rdquo; &mdash; reprezentant al intereselor elevilor &#x219;i mediator cu conducerea &#x219;colii.',
    'ach.volunteer.title': 'Voluntariat',
    'ach.volunteer.desc': 'Voluntar &#xEE;n integrarea copiilor cu sindrom Down &#x219;i voluntar &#xEE;n echipa organizatoare a Half-Maratonului din Gala&#x21B;i.',
    'ach.music.title': 'Muzic&#x103; &amp; Dans',
    'ach.music.desc': 'Chitarist pasionat &#x219;i dansator de dans sportiv competitiv &mdash; disciplina, perseveren&#x21B;a &#x219;i coordonarea transferate &#x219;i &#xEE;n programare.',
    'contact.tag': 'S&#x103; r&#x103;m&#xE2;nem &#xEE;n contact',
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.discord.server': 'Discord &mdash; DBD Overlay',
    'contact.discord.link': 'Intr&#x103; &#xEE;n server',
    'contact.discord.handle': 'Handle Discord',
    'collab.status': 'Disponibil pentru colabor&#x103;ri',
    'collab.title': 'Deschis parteneriatelor &amp; colabor&#x103;rilor cu firme',
    'collab.desc': 'Dac&#x103; e&#x219;ti o companie care caut&#x103; un developer, o echip&#x103; care are nevoie de un colaborator sau un studio care necesit&#x103; playtesting &#x219;i debugging &mdash; sunt deschis s&#x103; discut&#x103;m orice oportunitate.',
    'collab.btn': 'Ia leg&#x103;tura',
  }
};

// ===========================
// Language switch
// ===========================
let currentLang = localStorage.getItem('pb-lang') || 'en';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('pb-lang', lang);
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ===========================
// Nav scroll + active link
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// ===========================
// Hamburger menu
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
  document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
});

navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===========================
// Scroll reveal
// ===========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===========================
// Background particle animation
// ===========================
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  const PARTICLE_COUNT = 80;
  const CONNECTION_DIST = 130;
  const COLORS = ['rgba(124,58,237,', 'rgba(109,40,217,', 'rgba(6,182,212,', 'rgba(219,39,119,'];

  let W, H, particles;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function makeParticle() {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: rand(0, W),
      y: rand(0, H),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      r: rand(1, 2),
      color
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.55)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = p.color + alpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
})();

// ===========================
// Init
// ===========================
applyLang(currentLang);
