// DOM sections Nav, Hero, Footer

let nav =document.querySelector('.divnav');
let navAdd = document.createElement('div');
nav.appendChild(navAdd);
navAdd.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-2" data-bs-theme="dark">
     <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
     </div>
    </nav>
`;

let hero = document.querySelector('.hero');
let newHeroContent = document.createElement('div');
hero.appendChild(newHeroContent);
newHeroContent.innerHTML = `
    <div class="my-1">  
        <div class="card hero-wrapper bg-dark">
            <img src="https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480_640.jpg" class="card-img w-100" alt="shopping"/>
            <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.3)">
                <h5 class="card-title text-danger text-center">Shopping List</h5>
            </div>
        </div>
    </div>
`;

let footer = document.querySelector('.footerDiv');
let addFooter = document.createElement('div');
footer.appendChild(addFooter);
addFooter.innerHTML = `
    <footer>
        <div class="footer-wrap">
            <div class="links">
                <a href="about.html">About </a> <p>|</p>
                <a href="#">Recipes</a> <p>|</p>
                <a href="#">FAQ</a> <p>|</p>
                <a href="https://www.codefactory.wien/">Contact us</a>
            </div>
            <div class="socials">
                <img src="images/facebook-f-brands-solid.svg" alt="fb">
                <img src="images/linkedin-brands-solid.svg" alt="li">
                <img src="images/github-brands-solid.svg" alt="gh">
            </div>
        </div>
        <p> &copy; CodeFactory 2025</p>
    </footer>
`;




// Functions

//addCards

const output = document.querySelector('.output');
const sortBtn = document.querySelector('.sortBtn');

addCards();

function addCards(){
    shopList.forEach((itm) => {    
        output.innerHTML += `
        <div>
            <div class="card mx-auto m-2" style="width: 18rem;">
                <img src="${itm.image}" class="card-img-top" alt="book">
                <div class="card-body">
                    <h5 class="card-title">${itm.item}</h5>
                    <p class="card-text">${itm.text}</p>
                    <span><p><i class="h5 bi bi-exclamation-triangle-fill"></i> Priority level: </span>
                    <a class="impBtn btn ${imp(itm.importance)}">${itm.importance}</a>
                </div>
                </div>
        </div>
        `;       
    });
    addImportance();
};

//importance button

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

function addColors(importance, btn){
    btn.classList.remove('btn-danger');
    btn.classList.remove('btn-warning');
    btn.classList.remove('btn-success');
    btn.classList.add(imp(importance));
};

function imp(val){
    if (2 > val) {
      return "btn-success";
    } else if (4 > val) {
        return "btn-warning";
    } else if (5 >= val) {
        return "btn-danger";
    };
};

//sorting

sortBtn.addEventListener("click", () =>{
    sortCards(shopList);
    addImportance(); 
});

function sortCards(){
    let sortedList = shopList.sort((a, b) => b.importance - a.importance);
    output.innerHTML = ``;
    sortedList.forEach(ele => {
        output.innerHTML += `
        <div>
            <div class="card mx-auto m-2" style="width: 18rem;">
                <img src="${ele.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${ele.item}</h5>
                    <p class="card-text">${ele.text}</p>
                    <span><p><i class="h5 bi bi-exclamation-triangle-fill"></i> Priority level: </span>
                    <a class="impBtn btn ${imp(ele.importance)}">${ele.importance}</a>
                </div>
                </div>
        </div>
        `;
    });
};

// Local Storage

