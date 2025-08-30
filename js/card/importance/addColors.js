import imp from "./imp.js";

function addColors(importance, btn){
    btn.classList.remove('btn-danger', 'btn-warning', 'btn-success');
    btn.classList.add(imp(importance));
};

export default addColors;