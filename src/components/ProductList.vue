<template>
  <div>
    <product v-for="prods in products" v-bind:prods="prods" v-bind:key="prods.id"></product>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductList",
  components: {
    Product,
  },
  props: {
    products: Array,
  },
  methods: {
    showValues: function () {
      alert(
        `Titre de la tache: ${this.products.title}` 
      );
    },
  },
};
</script>
