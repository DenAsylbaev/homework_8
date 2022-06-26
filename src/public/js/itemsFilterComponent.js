export default {
    template: `
    <div class="filters">
        <div class="container">
            <div class="filtersLeft">
                <span class="filterLabel">FILTER</span>
                <img class="filterIcon" src="images/filter.svg" alt="">
                <div class="filterPopup hidden">
                    <nav class="filterCategory">
                        <div class="filterCategoryHeader">CATEGORY</div>
                        <div class="hidden">
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies &amp; Sweatshirts</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Sweaters &amp; Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a>
                        </div>
                    </nav>
                    <nav class="filterCategory">
                        <div class="filterCategoryHeader">BRAND</div>
                        <div class="hidden">
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies &amp; Sweatshirts</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Sweaters &amp; Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a>
                        </div>
                    </nav>
                    <nav class="filterCategory">
                        <div class="filterCategoryHeader">DESIGNER</div>
                        <div class="hidden">
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies &amp; Sweatshirts</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Sweaters &amp; Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="filtersRight">
                <div class="filterTrending">
                    TRENDING NOW
                    <img src="images/filterArrow.svg" alt="">
                </div>
                <div class="filterSize">
                    <div class="filterSizeWrap">
                        SIZE
                        <img src="images/filterArrow.svg" alt="">
                    </div>
                    <div class="filterSizes hidden">
                        <div>
                            <input type="checkbox"> XS
                        </div>
                        <div>
                            <input type="checkbox"> S
                        </div>
                        <div>
                            <input type="checkbox"> M
                        </div>
                        <div>
                            <input type="checkbox"> L
                        </div>
                    </div>
                </div>
                <div class="filterPrice">
                    PRICE
                    <img src="images/filterArrow.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    `
}