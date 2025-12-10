document.addEventListener("DOMContentLoaded", () => {
    const articleList = document.getElementById("article-list");
    const journalList = document.getElementById("journal-list");

    const addArticleButton = document.getElementById("add-article");
    const addJournalButton = document.getElementById("add-journal");

    addArticleButton.addEventListener("click", () => {
        const articleTitle = prompt("Entrez le titre de l'article:");
        if (articleTitle) {
            const articleCard = createCard(articleTitle);
            articleList.appendChild(articleCard);
        }
    });

    addJournalButton.addEventListener("click", () => {
        const journalTitle = prompt("Entrez le titre du journal:");
        if (journalTitle) {
            const journalCard = createCard(journalTitle);
            journalList.appendChild(journalCard);
        }
    });

    function createCard(title) {
        const card = document.createElement("div");
        card.className = "card";

        const cardTitle = document.createElement("h3");
        cardTitle.textContent = title;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", () => {
            card.remove();
        });

        card.appendChild(cardTitle);
        card.appendChild(deleteButton);

        return card;
    }
});