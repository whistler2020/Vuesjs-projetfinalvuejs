# projetfinalwc1029fev2022

## Project setup
```
npm install 
```

Document sur la création de cette application, sa caractéristique, son contenu et sur son utilisation

En guise de description de cette application, on va surtout présenter les différents composants qui constituent la réalisation de cette dernière; A quoi chacun de ces composants sert en terme de fonctionnalité.
Pour continuer, cette application est développé en « Vue JS »; assurément plus tard on va vous expliquer pourquoi le choix de ce “Framework” comme technologie de développement parmi toutes celles qui existent.
A-	Tout d’abord, décrivons l’interface utilisateur de l’application:
-	Son interface utilisateur est constituée d’un menu principale au sommet permettant à l’utilisateur de pouvoir naviguer dans l’application; faire appel aux différents composants constituant cette dernière.
-	Les différents liens du menu sont:
a)	Le lien “Product” pour faire afficher un “Produit”
b)	Le lien “ProductList” permettant d’afficher la liste de produit
c)	Le lien “ProductEdit” qui permet de porter une modification dans un produit
d)	Le lien “contact” si toutefois un utilisateur ou une utilisatrice veut établir un contact, alors cette option lui donne la possibilité de le faire.
e)	Le lien “Info” qui offre à l’utilisateur ou l’utilisatrice d’avoir des informations sur des points en particulier spécialement sur l’application elle-même de manière non exhaustive.

B-	Présentation des composants constituent l’application
-	Cette application est constituée d’un ensemble pas plus que cinq composants. Citons:
a)	Le composant: Product
b)	Le composant: ProduitEdit
c)	Le composant: ProductList
d)	Le composant: Contact
e)	Le composant: Info.
f)	Le composant: HeaderMenu
g)	La composant: FooterComp

C-	Rôles ou fonctionnalités de ces composants cites ci-dessus
-	Probablement on avait donné une première idée des fonctionnalités des composants au départ. Alors en détail, voilà ce que fait chacun des composants mentionnés précédemment:
-	“Product”: concerne l’affichage des informations du type d’un produit ou de sa catégorie en particulier. Si par exemple l’utilisateur ou l’utilisatrice ne voulait pas voir toute une liste de produit, il ou elle peut cliquer sur le lien “Product” pour l’affichage de détails sur un produit.

-	“ProductEdit”: ce composant ne permet que d’éditer le contenu d’un produit tout en donnant la possibilité de modifier ce produit. Cependant, c’est une tache qui normalement s’accorderait à des utilisateurs ou utilisatrices particuliers comme un gestionnaire par exemple. Pas forcement au grand public.

-	“ProductList”: ce composant donne la possibilité à un utilisateur ou utilisatrice d’afficher toute une liste de produits. Cette fonctionnalité permettrait d’offrir plus d’option aux utilisateurs / utilisatrices dans leur choix de produits en affichant tous les produits.

-	“Contact”: La fonctionnalité de ce composant n’est autre que de permettre ou donner le choix à un utilisateur ou une utilisatrice de nous contacter de manière volontaire en fournissant son nom, son prénom et son adresse courriel afin de lui contacter au besoin.

-	“Info”: ce composant n’est tout simplement là que pour fournir des informations sur les produits et les différentes fonctions de l’application; une aide mémoire sur quoi et comment faire pour bien quand on utilise l’application etc.

-	“HeaderMenu”: ce composant sert de menu dans lequel se trouvent les liens permettant de faire appel aux différents composants de l’application.

-	“FooterComp”: ce composant qui sert de pied de page contient comme contenu l’information sur le droit d’auteur et la date du développement de l’application.

D-	Avantage du choix du “Framework” VueJS.
Le choix de développer cette application en “Vue JS” n’est pas au hasard en c e sens que “Vue JS” a vraiment beaucoup avantages en plus que les autres “Framework” existant. Citons comme

Avantages par exemples:
a)	Son “approche simple”. Peut compliquer comparativement aux autres Framework. Il est très simple dans un environnement de développement rapide.
b)	Sa “taille”. Vues JS est très léger. Facile à télécharger et à installer…
c)	“Architecture bidirectionnelle” en guise de communication c’est-à-dire très facile à manipuler puisqu’il est très proche du HTML et d’Angular entre autres.
d)	“simple à intégrer”, Vue JS est un “Framework” qui n’est pas compliquée à intégrer puisqu’il est très proche du HTML et du JavaScript en plus d’Angular. Il offre plusieurs façons d’être utilisé et une grande flexibilité.
e)	Vue JS offre une bonne perspective d’avenir étant donné qu’il est un Framework très jeune par rapport aux autres Framework qui ont déjà marqués leur passage. C’est peut-être le seul point de faiblesse de “Vue JS”; étant très jeune, donc pour le moment peu de gens ont eu connaissance de sa force et ses avantages.

E-	Quelques Objets utilisés dans le développement dans l’application
-	Dans le développement de cette application, on a utilisé des objets pour faire appel aux différents composants. C’est le cas du composant “HeaderMenu” où l’on fait à des objets dans le “router-link” pour appeler un composant en particulier…

F-	Comment utiliser cette application (pour les développeurs web)
Pour les développeurs web qui souhaite utiliser cette application dans leur recherche ou leur apprentissage doivent préalablement mettre en exécution ces points ci-dessous:
a)	Il faut télécharger et installer “nodejs” (la dernière version serait mieux)
b)	Il faut faire un “npm install”
c)	Il faut ajouter le router pour le menu par la commande : « vue add router »
d)	Il faut fait un ajout en installant “vue-router” pour pouvoir créer le menu de navigation en utilisant les composant “router-link” et “view-router”
e)	Avoir un browser ou flûteur sur son ordinateur



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
