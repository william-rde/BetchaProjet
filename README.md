# BetchaProjet
Grille de notation BACK (sur 33 points):     11/33
Les users sont stockés en BDD : 1 point   OK
Les mots de passe sont stockés en base de données sous forme hashée+salée avec bcryptjs : 1 point   OK(pas salé)
Les parties sont stockées en BDD : 1 point   OK
Les users ont des parties : 1 point 
Une partie appartient à un seul user : 1 point

chaque participant peut se créer un compte : 2 points   OK
chaque participant peut s'authentifier : 1 point     OK
chaque participant peut se deconnecter : 1 point

On peut créer une nouvelle partie : 2 points    OK
Il faut etre logué pour créer une partie : 1 point
On peut lister les parties : 2 points    OK
Il faut etre logué pour lister les parties : 1 point

si l'utilisateur n'est pas l'adversaire, la partie sera affichée du point de vue d'un spectateur : 1 point
si l'utilisateur participe à la partie, la partie sera affichée du point de vue du joueur : 1 point

le créateur de la partie peut supprimer cette partie : 1 point
on ne peut pas supprimer une partie dont on est pas le créateur : 1 point

chaque joueur possède initialement 100 jetons : 1 point   OK
Chaque joueur mise en secret un certain nombre de jetons (entre 0 et 100) : 2 points
Celui qui a misé le plus se voit retirer le montant de sa mise de ses jetons, mais voit le lot avancer d'un cran dans sa direction : 3 points
le joueur qui n'a pas remporté le pari garde sa mise et ne perd aucun jeton : 2 points
Les joueurs continuent à parier jusqu'à que le lot arrive sur l'emplacement d'un des joueurs : 1 point
Les joueurs continuent à parier jusqu'à que les deux joueurs n'aient plus de jetons : 1 point
Les joueurs continuent à parier jusqu'à 20 paris maximum : 1 point
Si le lot arrive sur l'emplacement d'un joueur, ce joueur remporte le lot (vainqueur), la partie est terminée : 3 points


Grille de notation FRONT (sur 24 points):    11/24

Il y a un bouton "créer un compte" : 2 points   OK
Il y a un bouton "s'authentifier" : 1 point       OK
Il y a un bouton "se deconnecter" : 1 point     OK

Il y a un bouton "créer une nouvelle partie" : 2 points       OK
On peut lister les parties : 2 points     OK

Pour chaque partie de la liste, on voit son nom, son adversaire, son état, un lien pour afficher la partie : 1 point  

si l'utilisateur n'est pas l'adversaire, la partie sera affichée du point de vue d'un spectateur : 1 point
si l'utilisateur participe à la partie, la partie sera affichée du point de vue du joueur : 1 point

le créateur de la partie peut supprimer cette partie : 1 point     OK
on ne peut pas supprimer une partie dont on est pas le créateur : 1 point
 
On voit 11 emplacements contigus : 2 points     OK
On voit le nom et nombre de jetons des joueurs : 1 point
On peut miser : 3 points
un pari est généré automatiquement après 30 secondes (entre 0 et le nombre de jetons du joueur) : 1 point
la partie sera mise à jour sans intervention de l'utilisateur : 3 points
On voit le nom du gagnant : 1 point



