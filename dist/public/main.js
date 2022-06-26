/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/CartComponent.js":
/*!****************************************!*\
  !*** ./src/public/js/CartComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    data(){\n      return {\n          cartUrl: '/getBasket.json',\n          cartItems: [],\n          imgCart: '',\n          showCart: false\n      }\n    },\n    mounted(){\n        this.$root.getJson(`/api/cart`)\n            .then(data => {\n                for (let item of data.contents){\n                    this.$data.cartItems.push(item);\n                }\n            });\n    },\n    methods: {\n        addProduct(item){\n            let find = this.cartItems.find(el => el.id_product === item.id_product);\n            if(find){\n                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1})\n                    .then(data => {\n                        if(data.result === 1){\n                            find.quantity++\n                        }\n                    })\n            } else {\n                const prod = Object.assign({quantity: 1}, item);\n                this.$root.postJson(`/api/cart`, prod)\n                    .then(data => {\n                        if(data.result === 1){\n                            this.cartItems.push(prod)\n                        }\n                    })\n            }\n        },\n        remove(item){\n                        if(item.quantity > 1) {\n                            this.$root.putJson(`/api/cart/${item.id_product}`, {quantity: -1})\n                                .then(data => {\n                                    if(data.result){\n                                        item.quantity--\n                                        console.log(item);\n                                    }\n                                })\n                        } else {\n                            this.$root.delJson(`/api/cart/${item.id_product}`)\n                            this.cartItems.splice(this.cartItems.indexOf(item), 1);\n                        }\n        },\n    },\n    template: `\n    <div>\n        <button class=\"btn-cart\" type=\"button\" @click=\"showCart = !showCart\">Корзина</button>\n        <div class=\"cart-block basket\" v-show=\"showCart\">\n            <p v-if=\"!(cartItems.length > 0)\">Корзина пуста</p>\n            <cart-item v-for=\"item of cartItems\" \n                :key=\"item.id_product\" \n                :img=\"item.img_product\"\n                :cart-item=\"item\" \n                @remove=\"remove\">\n            </cart-item>\n        </div>\n    </div>\n    `\n});\n\nVue.component ('cartItem', {\n    props: ['img', 'cartItem'],\n    template: `\n        <div class=\"cart-item\">\n            <div class=\"product-bio\">\n                <div class=\"cart-img-box\"> \n                    <img :src=\"img\" alt=\"Some img\">\n                </div>\n                <div class=\"product-desc\">\n                    <div class=\"product-title\">{{ cartItem.product_name }}</div>\n                    <div class=\"product-quantity\">Quantity: {{ cartItem.quantity }}</div>\n                    <div class=\"product-single-price\">$ {{ cartItem.price }} each</div>\n                </div>\n            </div>\n            <div class=\"right-block\">\n                <div class=\"product-price\">{{cartItem.quantity*cartItem.price}}</div>\n                <div> \n                    <button class=\"del-btn\" @click=\"$emit('remove', cartItem)\">&times;</button>\n                </div>\n            </div>\n        </div>\n    `\n})\n\n//# sourceURL=webpack://project_express/./src/public/js/CartComponent.js?");

/***/ }),

/***/ "./src/public/js/ErrorComp.js":
/*!************************************!*\
  !*** ./src/public/js/ErrorComp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    data(){\n        return {\n          text: ''\n        }\n    },\n    computed: {\n      isVisible(){\n          return this.text !== ''\n      }\n    },\n    template: `\n      <div class=\"error-block\" v-if=\"isVisible\">\n          <p class=\"error-msg\">\n            <button class=\"close-btn\" @click=\"text=''\">&times;</button>\n            {{ text }}\n          </p>\n      </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/ErrorComp.js?");

/***/ }),

/***/ "./src/public/js/FilterComp.js":
/*!*************************************!*\
  !*** ./src/public/js/FilterComp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    data(){\n      return {\n          userSearch: ''\n      }\n    },\n    template: `<form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\n                <button type=\"submit\" class=\"btn-search\">\n                    <i class=\"fas fa-search\"></i>\n                </button>\n            </form>`\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/FilterComp.js?");

/***/ }),

/***/ "./src/public/js/ProductComponent.js":
/*!*******************************************!*\
  !*** ./src/public/js/ProductComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n   data(){\n       return {\n           catalogUrl: '/catalogData.json',\n           filtered: [],\n           products: [],\n           imgProduct: ''\n       }\n   },\n    mounted(){\n        this.$root.getJson(`/api/products`)\n            .then(data => {\n                for (let item of data){\n                    item.imgPath = `images/featured/${item.id_product}.jpg`;\n                    this.$data.products.push(item);\n                    this.$data.filtered.push(item);\n                }\n            });\n    },\n    methods: {\n        filter(userSearch){\n            let regexp = new RegExp(userSearch, 'i');\n            this.filtered = this.products.filter(el => regexp.test(el.product_name));\n        }\n    },\n   template: `<div class=\"featuredItems\">\n                <product v-for=\"item of filtered\" \n                :key=\"item.id_product\" \n                :img=\"item.imgPath\"\n                :product=\"item\"\n                @add-product=\"$parent.$refs.headercomp.$refs.cart.addProduct\"></product>\n            </div>`\n});\n\nVue.component('product', {\n    props: ['product', 'img'],\n    template: `\n        <div>\n            <div class=\"product-item featuredItem\">\n                <div class=\"featuredImgWrap\">\n                    <img :src=\"img\" alt=\"Some img\">\n                    <div class=\"featuredImgDark\">\n                        <button class=\"buy-btn\" @click=\"$emit('add-product', product)\">\n                            <img src=\"images/cart.svg\">\n                            <span class=\"addToCartBtn_text\">Add to cart</span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"featuredData\">\n                    <div class=\"featuredName\">\n                        {{product.product_name}}\n                    </div>\n                    <div class=\"featuredPrice\">\n                        {{product.price}}\n                    </div>\n            </div>\n        </div>\n    `\n})\n\n//# sourceURL=webpack://project_express/./src/public/js/ProductComponent.js?");

/***/ }),

/***/ "./src/public/js/crumbsComponent.js":
/*!******************************************!*\
  !*** ./src/public/js/crumbsComponent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    template: `\n    <div class=\"newArrivals\">\n        <div class=\"container\">\n            <h1>NEW ARRIVALS</h1>\n            <nav>\n                <a href=\"#\">HOME</a>\n                <span>/</span>\n                <a href=\"#\">MEN</a>\n                <span>/</span>\n                <a href=\"#\">NEW ARRIVALS</a>\n            </nav>\n        </div>\n    </div>   \n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/crumbsComponent.js?");

/***/ }),

/***/ "./src/public/js/footerComponent.js":
/*!******************************************!*\
  !*** ./src/public/js/footerComponent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    template: `\n    <div class=\"footer\">\n        <div class=\"container\">\n            <div class=\"footerLeft\">\n                <a href=\"#\">\n                    <i class=\"fab fa-facebook-f\"></i>\n                </a>\n                <a href=\"#\">\n                    <i class=\"fab fa-instagram\"></i>\n                </a>\n                <a href=\"#\">\n                    <i class=\"fab fa-pinterest-p\"></i>\n                </a>\n                <a href=\"#\">\n                    <i class=\"fab fa-twitter\"></i>\n                </a>\n            </div>\n            <div class=\"footerRight\">\n                &copy; 2021  Brand  All Rights Reserved.\n            </div>\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/footerComponent.js?");

/***/ }),

/***/ "./src/public/js/headerComponent.js":
/*!******************************************!*\
  !*** ./src/public/js/headerComponent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CartComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.js */ \"./src/public/js/CartComponent.js\");\n/* harmony import */ var _FilterComp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterComp.js */ \"./src/public/js/FilterComp.js\");\n/* harmony import */ var _ErrorComp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorComp.js */ \"./src/public/js/ErrorComp.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        cart: _CartComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        error: _ErrorComp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        'filter-el': _FilterComp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    template: `\n    <div class=\"header\">\n    <div class=\"container\">\n        <div class=\"leftHeader\">\n            <img class=\"leftHeader-img\" src=\"images/logo.png\" alt=\"\">\n            <filter-el></filter-el>\n        </div>\n        <cart ref=\"cart\"></cart>   \n    </div>\n    <error ref=\"error\"></error>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/headerComponent.js?");

/***/ }),

/***/ "./src/public/js/itemsFilterComponent.js":
/*!***********************************************!*\
  !*** ./src/public/js/itemsFilterComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    template: `\n    <div class=\"filters\">\n        <div class=\"container\">\n            <div class=\"filtersLeft\">\n                <span class=\"filterLabel\">FILTER</span>\n                <img class=\"filterIcon\" src=\"images/filter.svg\" alt=\"\">\n                <div class=\"filterPopup hidden\">\n                    <nav class=\"filterCategory\">\n                        <div class=\"filterCategoryHeader\">CATEGORY</div>\n                        <div class=\"hidden\">\n                            <a href=\"#\">Accessories</a>\n                            <a href=\"#\">Bags</a>\n                            <a href=\"#\">Denim</a>\n                            <a href=\"#\">Hoodies &amp; Sweatshirts</a>\n                            <a href=\"#\">Jackets &amp; Coats</a>\n                            <a href=\"#\">Polos</a>\n                            <a href=\"#\">Shirts</a>\n                            <a href=\"#\">Shoes</a>\n                            <a href=\"#\">Sweaters &amp; Knits</a>\n                            <a href=\"#\">T-Shirts</a>\n                            <a href=\"#\">Tanks</a>\n                        </div>\n                    </nav>\n                    <nav class=\"filterCategory\">\n                        <div class=\"filterCategoryHeader\">BRAND</div>\n                        <div class=\"hidden\">\n                            <a href=\"#\">Accessories</a>\n                            <a href=\"#\">Bags</a>\n                            <a href=\"#\">Denim</a>\n                            <a href=\"#\">Hoodies &amp; Sweatshirts</a>\n                            <a href=\"#\">Jackets &amp; Coats</a>\n                            <a href=\"#\">Polos</a>\n                            <a href=\"#\">Shirts</a>\n                            <a href=\"#\">Shoes</a>\n                            <a href=\"#\">Sweaters &amp; Knits</a>\n                            <a href=\"#\">T-Shirts</a>\n                            <a href=\"#\">Tanks</a>\n                        </div>\n                    </nav>\n                    <nav class=\"filterCategory\">\n                        <div class=\"filterCategoryHeader\">DESIGNER</div>\n                        <div class=\"hidden\">\n                            <a href=\"#\">Accessories</a>\n                            <a href=\"#\">Bags</a>\n                            <a href=\"#\">Denim</a>\n                            <a href=\"#\">Hoodies &amp; Sweatshirts</a>\n                            <a href=\"#\">Jackets &amp; Coats</a>\n                            <a href=\"#\">Polos</a>\n                            <a href=\"#\">Shirts</a>\n                            <a href=\"#\">Shoes</a>\n                            <a href=\"#\">Sweaters &amp; Knits</a>\n                            <a href=\"#\">T-Shirts</a>\n                            <a href=\"#\">Tanks</a>\n                        </div>\n                    </nav>\n                </div>\n            </div>\n            <div class=\"filtersRight\">\n                <div class=\"filterTrending\">\n                    TRENDING NOW\n                    <img src=\"images/filterArrow.svg\" alt=\"\">\n                </div>\n                <div class=\"filterSize\">\n                    <div class=\"filterSizeWrap\">\n                        SIZE\n                        <img src=\"images/filterArrow.svg\" alt=\"\">\n                    </div>\n                    <div class=\"filterSizes hidden\">\n                        <div>\n                            <input type=\"checkbox\"> XS\n                        </div>\n                        <div>\n                            <input type=\"checkbox\"> S\n                        </div>\n                        <div>\n                            <input type=\"checkbox\"> M\n                        </div>\n                        <div>\n                            <input type=\"checkbox\"> L\n                        </div>\n                    </div>\n                </div>\n                <div class=\"filterPrice\">\n                    PRICE\n                    <img src=\"images/filterArrow.svg\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/itemsFilterComponent.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CartComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.js */ \"./src/public/js/CartComponent.js\");\n/* harmony import */ var _ProductComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductComponent.js */ \"./src/public/js/ProductComponent.js\");\n/* harmony import */ var _FilterComp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterComp.js */ \"./src/public/js/FilterComp.js\");\n/* harmony import */ var _ErrorComp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorComp.js */ \"./src/public/js/ErrorComp.js\");\n/* harmony import */ var _headerComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headerComponent.js */ \"./src/public/js/headerComponent.js\");\n/* harmony import */ var _crumbsComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crumbsComponent.js */ \"./src/public/js/crumbsComponent.js\");\n/* harmony import */ var _footerComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footerComponent.js */ \"./src/public/js/footerComponent.js\");\n/* harmony import */ var _itemsFilterComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemsFilterComponent.js */ \"./src/public/js/itemsFilterComponent.js\");\n/* harmony import */ var _paginationComponent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paginationComponent.js */ \"./src/public/js/paginationComponent.js\");\n/* harmony import */ var _servicesComponent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicesComponent.js */ \"./src/public/js/servicesComponent.js\");\n/* harmony import */ var _subscribeComponent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subscribeComponent.js */ \"./src/public/js/subscribeComponent.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import './css/normalize.css'\n// import './css/style.css'\n\n\nconst API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\nconst app = new Vue({\n    el: '#app',\n    components: {\n        cart: _CartComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        products: _ProductComponent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        error: _ErrorComp_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        'filter-el': _FilterComp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        'crumbs-comp': _crumbsComponent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        'footer-comp': _footerComponent_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        'header-comp': _headerComponent_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        'pagination-comp': _paginationComponent_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        'services-comp': _servicesComponent_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        'subscribe-comp': _subscribeComponent_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        'items-filter-comp': _itemsFilterComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    data: {\n        userSearch: '',\n    },\n    methods: {\n        getJson(url){\n            return fetch(url)\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n        postJson(url, data){\n            return fetch(url, {\n                method: 'POST',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n        putJson(url, data){\n            return fetch(url, {\n                method: 'PUT',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n\n        delJson(url){\n            return fetch(url, {\n                method: 'DELETE',\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                // body: JSON.stringify(data)\n            })\n                .then(result => result.json())\n                .catch(error => {\n                    // console.log(error)\n                    this.$refs.error.text = error;\n                })\n        },\n\n\n    },\n    mounted(){\n\n    }\n\n});\n\n\n// class List {\n//     constructor(url, container){\n//         this.container = container;\n//         this.url = url;\n//         this.goods = [];\n//         this.allProducts = [];\n//         this.filtered = [];\n//         this._init();\n//     }\n//     getJson(url){\n//         return fetch(url ? url : `${API + this.url}`)\n//             .then(result => result.json())\n//             .catch(error => console.log(error))\n//     }\n//     calcSum(){\n//         return this.allProducts.reduce((accum, item) => accum += item.price, 0);\n//     }\n//     handleData(data){\n//         this.goods = data;\n//         this.render();\n//     }\n//     render(){\n//         const block = document.querySelector(this.container);\n//         for (let product of this.goods){\n//             const productObj = new list[this.constructor.name](product);\n//             this.allProducts.push(productObj);\n//             block.insertAdjacentHTML('beforeend', productObj.render());\n//         }\n//     }\n//     filter(value){\n//         const regexp = new RegExp(value, 'i');\n//         this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));\n//         this.allProducts.forEach(el => {\n//             const block = document.querySelector(`.product-item[data-id=\"${el.id_product}\"]`);\n//             if(!this.filtered.includes(el)){\n//                 block.classList.add('invisible');\n//             } else {\n//                 block.classList.remove('invisible');\n//             }\n//         })\n//     }\n//     _init(){\n//         return false\n//     }\n// }\n// class Item {\n//     constructor(el, img = 'https://placehold.it/200x150'){\n//         this.product_name = el.product_name;\n//         this.price = el.price;\n//         this.img = img;\n//         this.id_product = el.id_product\n//     }\n//\n//     render(){\n//         return `<div class=\"product-item\" data-id=\"${this.id_product}\">\n//                     <img src=\"${this.img}\" alt=\"Some img\">\n//                     <div class=\"desc\">\n//                         <h3>${this.product_name}</h3>\n//                         <p>${this.price} $</p>\n//                         <button class=\"buy-btn\"\n//                         data-id=\"${this.id_product}\"\n//                         data-price=\"${this.price}\"\n//                         data-name=\"${this.product_name}\"\n//                         data-img=\"${this.img}\">\n//                         Купить\n// </button>\n//                     </div>\n//                 </div>`;\n//\n//     }\n// }\n//\n//\n// class ProductsList extends List {\n//     constructor(cart, url = '/catalogData.json',container = '.products'){\n//         super(url, container);\n//         this.cart = cart;\n//         this.getJson()\n//             .then(data => this.handleData(data));\n//     }\n//     _init(){\n//         document.querySelector(this.container).addEventListener('click', e => {\n//             if(e.target.classList.contains('buy-btn')){\n//                 this.cart.addProduct(e.target);\n//             }\n//         });\n//         document.querySelector('.search-form').addEventListener('submit', e => {\n//             e.preventDefault();\n//             this.filter(document.querySelector('.search-field').value);\n//         })\n//     }\n// }\n//\n// class Product extends Item{}\n// class Cart extends List{\n//     constructor(url = '/getBasket.json', container = '.cart-block'){\n//         super(url, container);\n//         this.getJson()\n//             .then(data => this.handleData(data.contents));\n//     }\n//     addProduct(element){\n//         this.getJson(`${API}/addToBasket.json`)\n//             .then(data => {\n//                 if(data.result === 1){\n//                     let productId = +element.dataset['id'];\n//                     let find = this.allProducts.find(product => product.id_product === productId);\n//                     if(find){\n//                         find.quantity++;\n//                         this._updateCart(find);\n//                     } else {\n//                         let product = {\n//                             id_product: productId,\n//                             price: +element.dataset['price'],\n//                             product_name: element.dataset['name'],\n//                             quantity: 1\n//                         };\n//                         this.goods = [product];\n//                         this.render();\n//                     }\n//                 } else {\n//                     alert('Error')\n//                 }\n//             })\n//     }\n//     removeProduct(element){\n//         this.getJson(`${API}/deleteFromBasket.json`)\n//             .then(data => {\n//                 if(data.result === 1){\n//                     let productId = +element.dataset['id'];\n//                     let find = this.allProducts.find(product => product.id_product === productId);\n//                     if(find.quantity > 1){\n//                         find.quantity--;\n//                         this._updateCart(find);\n//                     } else {\n//                         this.allProducts.splice(this.allProducts.indexOf(find), 1);\n//                         document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove();\n//                     }\n//                 } else {\n//                     alert('Error')\n//                 }\n//             })\n//     }\n//     _updateCart(product){\n//         const block = document.querySelector(`.cart-item[data-id=\"${product.id_product}\"]`);\n//         block.querySelector(`.product-quantity`).textContent = `Quantity: ${product.quantity}`;\n//         block.querySelector(`.product-price`).textContent = `$${product.quantity*product.price}`;\n//     }\n//     _init(){\n//         document.querySelector(this.container).addEventListener('click', e => {\n//             if(e.target.classList.contains('del-btn')){\n//                 this.removeProduct(e.target);\n//             }\n//         });\n//         document.querySelector('.btn-cart').addEventListener('click', () => {\n//             document.querySelector(this.container).classList.toggle('invisible')\n//         })\n//     }\n// }\n//\n// class CartItem extends Item{\n//     constructor(el, img = 'https://placehold.it/50x100'){\n//         super(el, img);\n//         this.quantity = el.quantity;\n//     }\n//     render(){\n//         return `<div class=\"cart-item\" data-id=\"${this.id_product}\">\n//     <div class=\"product-bio\">\n//         <img src=\"${this.img}\" alt=\"Some image\">\n//         <div class=\"product-desc\">\n//             <p class=\"product-title\">${this.product_name}</p>\n//             <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\n//             <p class=\"product-single-price\">$${this.price} each</p>\n//         </div>\n//     </div>\n//     <div class=\"right-block\">\n//         <p class=\"product-price\">${this.quantity*this.price}</p>\n//         <button class=\"del-btn\" data-id=\"${this.id_product}\">&times;</button>\n//     </div>\n// </div>`\n//     }\n// }\n//\n// const list = {\n//     ProductsList: Product,\n//     Cart: CartItem\n// };\n//\n//\n// const cart = new Cart();\n// const products = new ProductsList(cart);\n// setTimeout(() => {\n//     products.getJson(`getProducts.json`).then(data => products.handleData(data));\n// }, 300);\n\n// list.getProducts(() => {\n//     list.render();\n// });\n\n\n\n\n//# sourceURL=webpack://project_express/./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/js/paginationComponent.js":
/*!**********************************************!*\
  !*** ./src/public/js/paginationComponent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    template: `\n    <div class=\"pagination\">\n        <a href=\"#\">\n            <img src=\"images/chevronLeft.svg\" alt=\"\">\n        </a>\n        <a href=\"#\">1</a>\n        <a href=\"#\">2</a>\n        <a href=\"#\">3</a>\n        <a href=\"#\">4</a>\n        <a href=\"#\">5</a>\n        <a href=\"#\">6.....20</a>\n        <a href=\"#\">\n            <img src=\"images/chevronRight.svg\" alt=\"\">\n        </a>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/paginationComponent.js?");

/***/ }),

/***/ "./src/public/js/servicesComponent.js":
/*!********************************************!*\
  !*** ./src/public/js/servicesComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    template: `\n    <div class=\"services\">\n        <div class=\"container\">\n            <div class=\"serivceUnit\">\n                <img src=\"images/services/delivery.svg\" alt=\"\">\n                <div class=\"servicesTitle\">\n                    Free Delivery\n                </div>\n                <div class=\"servicesText\">\n                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.\n                </div>\n            </div>\n            <div class=\"serivceUnit\">\n                <img src=\"images/services/discount.svg\" alt=\"\">\n                <div class=\"servicesTitle\">\n                    Sales & discounts\n                </div>\n                <div class=\"servicesText\">\n                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.\n                </div>\n            </div>\n            <div class=\"serivceUnit\">\n                <img src=\"images/services/assurance.svg\" alt=\"\">\n                <div class=\"servicesTitle\">\n                    Quality assurance\n                </div>\n                <div class=\"servicesText\">\n                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.\n                </div>\n            </div>\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/servicesComponent.js?");

/***/ }),

/***/ "./src/public/js/subscribeComponent.js":
/*!*********************************************!*\
  !*** ./src/public/js/subscribeComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    template: `\n    <div class=\"subscribe\">\n        <div class=\"container\">\n\n            <div class=\"subscribeLeft\">\n                <img src=\"images/subscribeUser.png\" alt=\"\">\n                <div class=\"subscribeUserText\">\n                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“\n                </div>\n            </div>\n\n            <div class=\"subscribeRight\">\n                <div class=\"subscribeTitle\">\n                    SUBSCRIBE\n                </div>\n                <div class=\"subscribeText\">\n                    FOR OUR NEWLETTER AND PROMOTION\n                </div>\n                <form action=\"\" class=\"subscribeForm\">\n                    <input type=\"text\" placeholder=\"Enter Your Email\">\n                    <button>Subscribe</button>\n                </form>\n            </div>\n\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./src/public/js/subscribeComponent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/js/main.js");
/******/ 	
/******/ })()
;