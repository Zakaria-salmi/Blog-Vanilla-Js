import "./assets/styles/styles.scss";
import "./index.scss";

const articleContainerElement = document.querySelector(".article-container");

const createArticles = (articles) => {
    if (!Array.isArray(articles)) {
        articles = [articles];
    }

    const articlesDOM = articles.map((article) => {
        const articleDOM = document.createElement("div");
        articleDOM.classList.add("article");

        const imgElement = document.createElement("img");
        imgElement.src = article.img;
        imgElement.alt = "profile";

        const titleElement = document.createElement("h2");
        titleElement.textContent = article.title;

        const authorElement = document.createElement("p");
        authorElement.classList.add("article-author");
        authorElement.textContent = `${article.author} - ${article.category}`;

        const contentElement = document.createElement("p");
        contentElement.classList.add("article-content");
        contentElement.textContent = article.content;

        const actionsElement = document.createElement("div");
        actionsElement.classList.add("article-actions");
        actionsElement.innerHTML = `
            <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
            <button class="btn btn-primary">Modifier</button>
        `;

        articleDOM.append(
            imgElement,
            titleElement,
            authorElement,
            contentElement,
            actionsElement
        );

        return articleDOM;
    });

    articleContainerElement.innerHTML = "";
    articleContainerElement.append(...articlesDOM);

    const deleteButtons =
        articleContainerElement.querySelectorAll(".btn-danger");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
            try {
                const target = event.target;
                const articleId = target.dataset.id;

                const response = await fetch(
                    `https://restapi.fr/api/articles/${articleId}`,
                    {
                        method: "DELETE",
                    }
                );
                const body = await response.json();
                console.log(body);
                fetchArticle();
            } catch (e) {
                console.error(e);
            }
        });
    });
};

const fetchArticle = async () => {
    try {
        const response = await fetch("https://restapi.fr/api/articles");
        const articles = await response.json();

        createArticles(articles);
    } catch (e) {
        console.error(e);
    }
};

fetchArticle();
