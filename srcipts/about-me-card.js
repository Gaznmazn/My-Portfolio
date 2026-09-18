let cardsAboutMe = [
  {
    title: "Мои навыки",
    decs: "Языки программирования: Python. Уверенный пользователь таких библиотек как pandas, numpy, playwright и др.",
  },
  {
    title: "Проффесии",
    decs: "Я могу быть как аналитиком данных, так и FronEnd, BackEnd, Fullstack разработчиком.",
  },
  {
    title: "Что я изучаю",
    decs: "В данный момент я изучаю JS, чтобы стать ещё более востребованным на рынке специалистом",
  },
  {
    title: "Моя мечта",
    decs: "Я хотел бы создать такой сервис, что мог бы помочь всем людям, какая-бы проблема их не настигла",
  },
];

const cardAboutMe = cardsAboutMe
  .map((cardtext) => {
    return `
    <article class="card-about-me">
        <h2>${cardtext.title}</h2>
        <p>${cardtext.decs}</p>
        </article>`;
  })
  .join("");
const AboutMeContainer = document.getElementById("about-me");
AboutMeContainer.innerHTML = cardAboutMe;
