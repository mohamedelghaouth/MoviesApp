/** @format */

function constructSwiperArticleList(articles) {
  let articlesElement = constructArticleList(articles);
  return articlesElement.map((article) => {
    let div = document.createElement("div");
    div.classList.add("swiper-slide");

    div.appendChild(article);

    return div;
  });
}

function updateSwiper(articles) {
  let swiperListContainer =
    document.getElementsByClassName("swiper-wrapper")[0];

  let swiperArticles = constructSwiperArticleList(articles);

  swiperListContainer.replaceChildren(...swiperArticles);
  initSwiper();
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",

    freeMode: true,
    loop: true,

    autoPlay: {
      delay: 4000,
      disableOnINteraction: false,
    },
  });
}
