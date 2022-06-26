export default {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
           imgProduct: ''
       }
   },
    mounted(){
        this.$root.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    item.imgPath = `images/featured/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `<div class="featuredItems">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="item.imgPath"
                :product="item"
                @add-product="$parent.$refs.headercomp.$refs.cart.addProduct"></product>
            </div>`
};

Vue.component('product', {
    props: ['product', 'img'],
    template: `
        <div>
            <div class="product-item featuredItem">
                <div class="featuredImgWrap">
                    <img :src="img" alt="Some img">
                    <div class="featuredImgDark">
                        <button class="buy-btn" @click="$emit('add-product', product)">
                            <img src="images/cart.svg">
                            <span class="addToCartBtn_text">Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="featuredData">
                    <div class="featuredName">
                        {{product.product_name}}
                    </div>
                    <div class="featuredPrice">
                        {{product.price}}
                    </div>
            </div>
        </div>
    `
})