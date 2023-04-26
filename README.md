# DevOps

Ce projet est faite en React avec la commande create-react app et npm. C'est un site e-shop de plante

#### Repository

Le projet est sur un repository GitHub

#### Deploiement

Le déploiement est fait via vercel directement depuis le repo Git.

#### Convention de developpement

Chacun des developpeur ngenere une nouvelle branche deppuis la commande `git branche` et travail sur celle-ci. Des lors qu'il souhaite ajouter une nouvelle fonction, il nomme sa bracnche : 'feature/fonctionalité'. Pour le moment la version de ce projet n'est que la premiere et aucune nomenclature n'a encore été attribué.

#### Versioning

Le versionning se fait via le packae 'git cz' et chaque commit contient les element complet auquel il fait référence.
Une fois la branche 'push' le code est alors véifié sur le repo, modifié au besoin puis une 'merge request' est émise pour la branche feature soit mergé avec la branche 'main'
Une fois la merge les testes de la CI se mettent en fonctions.
Le projet deployé est celui contenu sur la branche 'main'
Autant que possible, chacun des developpeur a 'push' ces avancées plusieurs fois par jour
 
### Testing

Les tests sont effectué via 'jest' e 'jest-dom'
Les testes sont effectués en local via la commande : `npm test`.
Ils sont contenu dans le dossier './scr/test'. Chacun des tests sont nomées en fonction de ce qu'il test : 'untiTested.test.js'
Pour le moment suel des tetsts unitaire ont été mise en places.

Sur la CI les testent sot effectué en autooatique par 'vercel.

#### Utilisation

Nous avons choisis d'utiliser GitHub pour sa simplicité, son coput (gratuit) et surtout car chacun des developpeur posède djà un compte.
Pour le deploiement nous avons choisi Vercel car notre niveau technique et bas et la simplicité et son coût et le plus adapter pour nous.
D'autre part nous n'avons pas utilisé l'ESLint par esprit de simplicité car notre niveau technique ne permets pas une utilisaton simple et optimal de l'outil.
Git cz a été choisi pour les commit precis qu'il permets de faire ainsi que sa simplicité d'utilisation.
Les tests sont effectué via 'jest' e 'jest-dom' car il coresspond bien au testing d'application web React.
Par manque de teps nous n'avons pas eu le temps de faire de test d'integration ni E2E