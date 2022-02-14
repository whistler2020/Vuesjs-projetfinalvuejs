<template>
<div class="position5">
  <div class="container position1">
    <!-- pour l'affichage d'une erreur -->
    <p v-if="errors.length">
        <b>Corriger l'(es) erreur(s) suivante(s):</b>
        <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
        </ul>
    </p>
    <!-- input pour l'entree du titre du produit -->
    <input
      type="text"
      id="title"
      v-model="prod.title"
      placeholder="Titre du produit..."
    />
    <!-- input pour l'entree du noom du produit -->
    <input
      type="text"
      id="project"
      v-model="prod.project"
      placeholder="Nom du produit..."
    />
    <!-- le bouton submit pour la validation de donnees -->
    <input type="submit" value="Submit" v-on:click="showValues()" />
  </div>
</div>
</template>

<script>
export default {
  name: "ProductEdit",
  props: {
    prod: {
        name:String,
        project:String
    },
  },
  data() {
    return {
      errors:[]
    }
  },
  methods: {
    showValues: function (e) {
      if (this.prod.name && this.prod.project) return true;
      this.errors = [];
      if (!this.prod.name) {
        this.errors
          .push(`Le titre de la tâche doit contenir minimum 5 et maximum 20 caractères
                              il ne doit pas contenir de caractères spéciaux`);
      }
      if (!this.prod.project) {
        this.errors.push(`Le courriel peut contenir :
                                        Lettres majuscules (A-Z) et minuscules (a-z).
                                        Chiffres (0-9).
                                        Exclure les caractères ! # $ % & ' * + - / = ? ^ _ \` { | } ~
                                        Doit contenir un @
                                        le caractère . suivi d’un minimum de 2 et maximum de 3 lettres
                                        `);
      }
      e.preventDefault();
    },
  },
};
</script>
