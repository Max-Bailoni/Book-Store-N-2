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