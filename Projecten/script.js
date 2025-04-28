
  document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add('show');
      }, index * 200); // 200ms tussen elk artikel
    });
  });

