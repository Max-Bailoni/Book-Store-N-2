import shopList from "./shoplistitems.js";
import { addImportance } from "./importance/index.js";
import { cardTemplate } from "./cardTemplate.js";

const output = document.querySelector('.output');

function addCards(){
    output.innerHTML = "";
    shopList.forEach((book) => {    
        output.innerHTML += cardTemplate(book);
    });
    addImportance();
};
addCards();

export { output, addCards };