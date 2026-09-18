let cardsMyProjets = [
  {
    title: "Hollow Guides",
    decs: "Мой сайт-проект по игре Zenless Zone Zero. Отборные гайды, которые помогут всем новичкам начать свой путь прокси.",
  },
  {
    title: "MicroMontager",
    decs: "Десктопная программа для автоматизации монтажа. Может делать легкий монтаж оп референсам. Также предусмотрена работа со всеми видами стримов или видео.",
  },
  {
    title: "GhostLexicon",
    decs: "Телеграм бот для изучения английского языка а игровой форме.",
  },
  {
    title: "Brass Nexus",
    decs: "Сайт портфолио для всех желающих, каждый может зайти и создать свое порфолио в стиле неонового стимпанка.",
  },
];

const cardMyProject = cardsMyProjets
  .map((cardtext) => {
    return `
    <article class="card-my-project">
        <h2>${cardtext.title}</h2>
        <p>${cardtext.decs}</p>
        </article>`;
  })
  .join("");
const MyPrijectsContainer = document.getElementById("my-projects");
MyPrijectsContainer.innerHTML = cardMyProject;
