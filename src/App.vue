<template>
  <div id="app">
      <HeaderMenu />
      <h1>{{message}}</h1>
      <product></product>
      <product-list v-bind:products="products"></product-list>
      <project-edit v-bind:projects="projects"></project-edit>
      <contact></contact>
      <info></info>
      <Footer-comp/>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderMenu from './components/HeaderMenu.vue';
  import ProjectEdit from './components/ProjectEdit.vue';
  import ProductList from './components/ProductList.vue';
  import Contact from './components/Contact.vue';
  import Info from './components/Info.vue';
  import Product from './components/Product.vue';
  import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    Product,
    ProductList,
    ProjectEdit,
    Contact,
    Info,
    FooterComp,
  },

  data() {
    return {
      message:"Liste de Produit",
      products: [
        {
          id: 1,
          title: "Category A",
        },
        {
          id: 2,
          title: "Category B",
        },
        {
          id: 3,
          title: "Category C",
        },
        {
          id: 4,
          title: "Category D",
        },
      ],
    };
  },
};
</script>



