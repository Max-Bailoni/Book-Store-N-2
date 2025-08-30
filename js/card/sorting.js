import shopList from "./shoplistitems.js";
import { addImportance }  from "./importance/index.js";
// import { imp } from "./importance.index.js";
import { output } from "./cards.js";
import { cardTemplate } from "./cardTemplate.js";

const sortBtn = document.querySelector('.sortBtn');

sortBtn.addEventListener("click", () =>{
    sortCards();
    addImportance(); 
});

function sortCards(){
    let sortedList = shopList.sort((a, b) => b.importance - a.importance);
    output.innerHTML = "";
    sortedList.forEach(book => {
        output.innerHTML += cardTemplate(book);
    });
}