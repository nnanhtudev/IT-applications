"use strict";
const renderNews = (newsArr) => {
  const newsContainer = document.querySelector("#news-container");
  const html = newsArr[0].map(
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

export default renderNews;
