import "./assets/styles/styles.scss";
import "./index.scss";

const articleContainerElement = document.querySelector(".article-container");

const createArticles = (articles) => {
    const arcticlesDOM = articles.map((article) => {
        const articleDOM = document.createElement("div");
        articleDOM.classList.add("article");
        articleDOM.innerHTML = `
            <img
                src="${article.img}"
                alt="profile"
            />
            <h2>${article.title}</h2>
            <p class="article-author">${article.author} - ${article.category}</p>
            <p class="article-content">
                ${article.content}
            </p>
            <div class="article-actions">
                <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
                <button class="btn btn-primary">Modifier</button>
            </div>
        `;
        console.log(article);
        return articleDOM;
    });

    articleContainerElement.innerHTML = "";
    articleContainerElement.append(...arcticlesDOM);
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
