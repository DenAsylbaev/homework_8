import cart from './CartComponent.js'
import filterEl from './FilterComp.js'
import error from './ErrorComp.js'

export default {
    components: {
        cart,
        error,
        'filter-el': filterEl
    },
    template: `
    <div class="header">
    <div class="container">
        <div class="leftHeader">
            <img class="leftHeader-img" src="images/logo.png" alt="">
            <filter-el></filter-el>
        </div>
        <cart ref="cart"></cart>   
    </div>
    <error ref="error"></error>
    </div>
    `
}