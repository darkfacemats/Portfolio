
  document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add('show');
      }, index * 200); // 200ms tussen elk artikel
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('section, article, figure, p, img');

    fadeElements.forEach((el, index) => {
      el.classList.add('fade-in'); // voeg de fade-in class toe

      setTimeout(() => {
        el.classList.add('show'); // laat het element zichtbaar worden
      }, index * 250); // telkens 250ms vertraging tussen elementen
    });
  });
