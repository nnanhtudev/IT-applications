"use strict";
import getUrlAPI from "../../controllers/News/APIController.js";
import { page } from "../../controllers/News/APIController.js";
const btnNext = document.querySelector("#btn-next");
const pageNum = document.querySelector("#page-num");
const btnPrev = document.querySelector("#btn-prev");

export const updatePagination = async () => {
  const totalPage = await getUrlAPI(page);
  totalPage.totalResults;
  const currentPage = Math.ceil(totalPage.totalResults / 5);
  console.log(page);
  page >= currentPage ? (btnNext.style.display = "none") : (btnNext.style.display = "block");
  page === 1 ? (btnPrev.style.display = "none") : (btnPrev.style.display = "block");
};
const renderNews = async () => {
  const dataNews = await getUrlAPI();
  console.log(dataNews);
  const newsContainer = document.querySelector("#news-container");
  const html = dataNews.articles.map(
    (item) => `
          <div class="card flex-row flex-wrap">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${item.urlToImage}"
                    class="card-img"
                    alt="${item.title}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      ${item.title}
                    </h5>
                    <p class="card-text">
                      ${item.description}
                    </p>
                    <a href="${item.url}" class="btn btn-primary">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
  );
  newsContainer.innerHTML = html.join("");
};

btnNext.addEventListener("click", function () {
  if (page >= 1) {
    page++;
  }
  pageNum.textContent = page;
  updatePagination();
  renderNews();
});
btnPrev.addEventListener("click", function () {
  console.log("click success");
  if (page !== 1) {
    page--;
  }
  pageNum.textContent = page;
  renderNews();
  updatePagination();
});
export default renderNews;
