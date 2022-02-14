<template>
    <div class="position2">
        <h1>{{message1}}</h1> <br>,
            {{message2}}<br>
            <p>{{message3}}</p>
            <p>{{message4}}</p>
            <h1>{{message5}}</h1>
    </div>
</template>
<script>
export default {
    name:"Info",
        data(){
            return{
                message1: "Information General",
                message2:`Ceci est un projet créé avec le framework Vuejs.
                Ce projet permet d'afficher un ensemble de categorie de produits
                et permet, entre autres, à un utilisateur de nous contacter
                à travers un formulaire disponible sur le site web.`, 
                message3: `Je voulais ajouter que pour une raison technique, le menu de l'application ne fonctionne
                pas comme prevu. Cela est temporaire puisque nous travaillons ardemment pour
                trouver l'erreur et solutionner le probleme.`,
                message4: `Pour finir, nous voulons preciser que nous sommes très ouvert au critique
                et par consequent si vous avez des suggestions ou toute autre idée pouvant
                nous permettre d'ameliorer notre travail, vous serez les bienvenues et par consequent
                vous pourrez nous contacter directement par notre adresse Email: clermontwhistler@gmail.com ou
                visitez notre site web: whistlerclermont.ca.`,
                message5:"Merci!!!"

            }
        }
}
</script>