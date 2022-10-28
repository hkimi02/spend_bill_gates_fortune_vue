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
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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