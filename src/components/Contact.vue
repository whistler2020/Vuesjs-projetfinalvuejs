<template>
  
  <div class="position3">
    <h1>{{titre}}</h1>
    <div id="Contact">
        <div class="container">
          <div v-if="errors.length">
            <b>Corriger l'(es) erreur(s) suivante(s):</b>
            <ul>
            <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
            </ul>
          </div>
          <!-- ajout input pour le nom -->
          <input
              type="text"
              V-model="param.nom"
              placeholder=" Votre Nom.."
          />
          <!-- ajout input prenom -->
          <input
              type="text"
              v-model="param.prenom"
              placeholder="Votre Prenom..."
          />
          <!-- input pour ajout l'adresse Email -->
          <input
              type="text"
              v-model="param.email"
              placeholder="exemple@servermessagerie.com"
          />
          <select name="categ" id="categorie">
              <option>choisir une categorie.....</option>
              <option value="param.categoire1">Categorie A </option>
              <option value="param.categoire2">Categorie B </option>
              <option value="param.categoire3">Categorie C </option>
              <option value="param.categoire4">Categorie D </option>
          </select>
          <input type="submit" value="Submit" v-on:click="showValues()" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {  
      errors: [],
      titre: "Formulaire de contact",
      param: {
        nom: "",
        prenom: "",
        email:"",
        categorie:"",
      },
    };
  },
  methods: {
    showValues: function (e) {
      //test de mes champs obligatoires
      //if (this.project.name && this.project.manager) return true;
      this.errors = [];
      if (!this.project.name) {
        this.errors.push("Le nom est obligatoire.");
      } else if (this.validName(this.project.name)) {
        this.errors
          .push(`Le nom ne doit pas être déjà contenu dans la liste des projets.
                            Le nom ne doit pas contenir plus de 5 caractères
                            et il ne doit pas contenir de caractères spéciaux.`);
      }
      if (!this.project.manager) {
        this.errors.push("L'email du responsable est obligatoire.");
      } else if (this.validEmail(this.project.manager)) {
        this.errors.push(`Le courriel peut contenir :
                                        Lettres majuscules (A-Z) et minuscules (a-z).
                                        Chiffres (0-9).
                                        Exclure les caractères ! # $ % & ' * + - / = ? ^ _ \` { | } ~
                                        Doit contenir un @
                                        le caractère . suivi d'un minimum de 2 et maximum de 3 lettres
                                        `);
      }
      e.preventDefault();
    },
    validName: function (email) {
      var validName = false;
      var re = /^([A-Za-z0-9]{5})$/;
      if (re.test(email)) {
        validName = this.projects.forEach(
          (project) => this.project.name === project.name
        );
      }
      return validName;
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
