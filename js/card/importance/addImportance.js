import shopList from "../shoplistitems.js";
import addColors from "./addColors.js";

function addImportance() {
    const impBtn = document.querySelectorAll('.impBtn');
    impBtn.forEach((btn, index) => {       
        btn.addEventListener("click", () => {   
            shopList[index].importance ++;
            if (shopList[index].importance == 6) {
                shopList[index].importance = 0;
            };

            btn.textContent = shopList[index].importance;
            addColors(shopList[index].importance, btn);
        });  
    });  
};

export default addImportance;