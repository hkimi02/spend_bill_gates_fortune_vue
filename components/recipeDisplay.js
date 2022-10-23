app.component("recipe-display", {
    template: `<div class="recipe">
    <h3 v-if="purchases.length == 0">come on spend some money ! </h3>
    <table v-else>
        <legend>receipt</legend>
        <tr>
            <td>name</td>
            <td>quantity</td>
            <td>price</td>
            </tr>
        <tr v-for="purchase in purchases" :key="purchase.id">
            <td>{{purchase.name}}</td>
            <td>{{purchase.quantity}}</td>
            <td>{{purchase.price}}</td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td>{{sommeTotale}}</td>
        </tr>
    </table>
</div>
    `,
    props: {
        purchases: Array,
    },
    methods: {

    },
    computed: {
        sommeTotale() {
            let i = 0;
            let somme = 0;
            for (i = 0; i < this.purchases.length; i++) {
                somme += (this.purchases[i].quantity * this.purchases[i].price);
            }
            console.log(somme);
            return somme;
        }
    }
})