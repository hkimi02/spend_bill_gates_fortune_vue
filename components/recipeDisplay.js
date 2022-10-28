app.component("recipe-display", {
    template: `
<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="recipe">
            <h3 v-if="purchases.length == 0">come on spend some money ! </h3>
            <h3 v-else>recipt</h3>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="recipe-body"  v-if="purchases.length != 0">
      <table>
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
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