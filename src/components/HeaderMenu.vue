<template>
    <div class="bgcolor">
    <ul>
        <li><router-link to="/Product">Product</router-link></li>
        <li><router-link to="/ProductEdit">Product Edit</router-link></li>
        <li><router-link to="/ProductList">Product List</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
        <li><router-link to="/Info">Information</router-link></li>
        <li><Router-view></Router-view></li>
    </ul>
    </div>
</template>

<script>

export default {
    name:"HeaderMenu", 
    data() {
        return {
        };
    },
};
</script>