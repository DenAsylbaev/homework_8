// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

export default {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          imgCart: '',
          showCart: false
      }
    },
    mounted(){
        this.$root.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$root.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }
        },
        remove(item){
                        if(item.quantity > 1) {
                            this.$root.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                                .then(data => {
                                    if(data.result){
                                        item.quantity--
                                        console.log(item);
                                    }
                                })
                        } else {
                            this.$root.delJson(`/api/cart/${item.id_product}`)
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
        },
    },
    template: `
    <div>
        <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
        <div class="cart-block basket" v-show="showCart">
            <p v-if="!(cartItems.length > 0)">Корзина пуста</p>
            <cart-item v-for="item of cartItems" 
                :key="item.id_product" 
                :img="item.img_product"
                :cart-item="item" 
                @remove="remove">
            </cart-item>
        </div>
    </div>
    `
};

Vue.component ('cartItem', {
    props: ['img', 'cartItem'],
    template: `
        <div class="cart-item">
            <div class="product-bio">
                <div class="cart-img-box"> 
                    <img :src="img" alt="Some img">
                </div>
                <div class="product-desc">
                    <div class="product-title">{{ cartItem.product_name }}</div>
                    <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                    <div class="product-single-price">$ {{ cartItem.price }} each</div>
                </div>
            </div>
            <div class="right-block">
                <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
                <div> 
                    <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div>
            </div>
        </div>
    `
})