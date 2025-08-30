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