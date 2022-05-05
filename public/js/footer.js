const createFooter = ()=>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
        <img src="./img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Fuga nam suscipit sed neque assumenda animi ut eligendi reiciendis voluptatibus, tempore,
            illum provident quisquam. Ipsum nisi unde ex alias earum quidem beatae iusto odit 
            placeat sint voluptatem, necessitatibus quaerat vel suscipit obcaecati sequi magni vitae?
            Voluptate dignissimos fugiat sed ullam nostrum cum sapiente accusantium quae quasi sequi
            labore nihil iusto dolores, obcaecati assumenda praesentium accusamus, quidem facilis 
            eligendi quia a minima eum perferendis. Quas dolorem id architecto neque nobis adipisci 
            nesciunt omnis, blanditiis fugit? Reprehenderit dolores deleniti harum, aut nobis quia 
            dicta quam sint culpa sed vel voluptas! Dolor, exercitationem expedita.
        </p>
        <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
        <p class="info">telephone - +55 11 0000 0000</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, best apparels online store</p>
    `;
}

createFooter();