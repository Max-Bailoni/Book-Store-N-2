import { imp } from "./importance/index.js";

export function cardTemplate(book) {
    return `
    <div>
        <div class="card mx-auto m-2" style="width: 18rem;">
            <img src="${book.image}" class="card-img-top" alt="book">
            <div class="card-body">
                <h5 class="card-title">${book.item}</h5>
                <p class="card-text">${book.text}</p>
                <span><p><i class="h5 bi bi-exclamation-triangle-fill"></i> Priority level: </span>
                <a class="impBtn btn ${imp(book.importance)}">${book.importance}</a>
            </div>
            </div>
    </div>
    `;
}