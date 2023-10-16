"use strict";
import { getUrlAPISearch } from "../../controllers/News/APIController.js";

const btnNext = document.querySelector("#btn-next");
const pageNum = document.querySelector("#page-num");
const btnPrev = document.querySelector("#btn-prev");

export let pageSearch = 1;
export const updatePaginationSearch = async () => {
  const totalPage = await getUrlAPISearch(pageSearch);
  totalPage.totalResults;
  const currentPage = Math.ceil(totalPage.totalResults / 5);
  console.log(pageSearch);
  pageSearch >= currentPage ? (btnNext.style.display = "none") : (btnNext.style.display = "block");
  pageSearch === 1 ? (btnPrev.style.display = "none") : (btnPrev.style.display = "block");
};
export const renderSearch = async () => {
  const dataSearch = await getUrlAPISearch();
  console.log(dataSearch);
  const newsContainerSearch = document.querySelector("#news-container");
  const html = dataSearch.articles.map(
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
          </div>`
  );
  newsContainerSearch.innerHTML = html.join("");
};

btnNext.addEventListener("click", function () {
  if (pageSearch >= 1) {
    pageSearch++;
  }
  pageNum.textContent = pageSearch;
  updatePaginationSearch();
  renderSearch();
});
btnPrev.addEventListener("click", function () {
  console.log("click success");
  if (pageSearch !== 1) {
    pageSearch--;
  }
  pageNum.textContent = pageSearch;
  renderSearch();
  updatePaginationSearch();
});

export default renderSearch;
