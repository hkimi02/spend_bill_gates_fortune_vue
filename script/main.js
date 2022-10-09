const app = Vue.createApp({
    data() {
        return {
            articles: [
                { id: 1, name: "Antilla", price: 10000000000, path: "assets/images/antilla.jfif", quantity: 0 },
                { id: 2, name: "Antilla", price: 10000000000, path: "./assets/images/antilla.jfif", quantity: 0 },
                { id: 3, name: "Antilla", price: 10000000000, path: "./assets/images/antilla.jfif", quantity: 0 },
            ],
            cart: 0,
            fortune: 129000000000,
        }
    },
    methods: {
        addToCart(article) {
            if (this.fortune >= article.price) {
                this.fortune -= article.price;
                this.cart++;
                article.quantity++;
            }
        },
        removeFromCart(article) {
            if (article.quantity > 0) {
                this.fortune += article.price;
                this.cart--;
                article.quantity--;
            }
        }
    },
});
const mountedApp = app.mount("#app");