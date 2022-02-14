<template>
<div class="position4">
  <div class="card">
    <h1>{{ prods.title }}</h1>
  </div>
</div>
</template>

<script>
export default {
  name: "Product",
  props: {
    prods: {
      title: String,
    },
  },
};
</script>

