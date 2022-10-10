const app = Vue.createApp({
    data() {
        return {
            articles: [
                { id: 1, name: "Antilla", price: 10000000000, path: "./assets/images/antilla.jfif", quantity: 0 },
                { id: 2, name: "iphone 14", price: 1099, path: "./assets/images/iphone14.jfif", quantity: 0 },
                { id: 3, name: "play station 5", price: 499.99, path: "./assets/images/ps5.jpg", quantity: 0 },
            ],
            cart: 0,
            fortune: 129000000000,
            purchases: [],
        }
    },
    methods: {
        addToCart(article) {
            if (this.fortune >= article.price) {
                this.fortune -= article.price;
                this.cart++;
                if (article.quantity == 0) {
                    this.purchases.push(article);
                } else {
                    let item = this.purchases.find(x => x.id == article.id);
                    if (item) {
                        item.quantity = article.quantity;
                    }

                }
                article.quantity++;
            }
        },
        removeFromCart(article) {
            if (article.quantity > 0) {
                this.fortune += article.price;
                this.cart--;
                article.quantity--;
                if (article.quantity == 0) {
                    let item = this.purchases.find(x => x.id == article.id);
                    this.purchases.splice(this.purchases.indexOf(item), 1);
                }
            }
        }
    },
    computed: {
        checkPrice() {
            console.log(data.fortune);
            return this.fortune < price;
        },
        checkQuantity(quantity) {
            console.log(quantity);
            return quantity == 0;
        }

    },
});
const mountedApp = app.mount("#app");