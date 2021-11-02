document.addEventListener('DOMContentLoaded', () => {


     document.body.style.backgroundImage="url('photo.jpg')";
     
     

    
     fetch('/games').then((data) => {

        return data.json()


    }).then((users) => {
        for (const [i, user] of users.entries()) {     //entries permet d'iterer sur tous les éléments du tableau
            console.log("users", user);
            let balise = document.createElement("form");
            balise.innerText = "Nom Partie= "+ user.name ;
            document.body.appendChild(balise)

            var div = document.createElement("div")
            var btn = document.createElement("BUTTON");        // Créer un élément <button>
            var t = document.createTextNode("SUPPRIMER");       // Créer un noeud textuel
            btn.appendChild(t);                                // Ajouter le texte au bouton
            document.body.appendChild(btn);                    // Ajoute la balise <button> à la balise <body>

            // var btnn=document.createElement("BUTTON");
            // var tt=document.createTextNode("ACCEDER");
            // btn.appendChild(tt);                                // Ajouter le texte au bouton
            // document.body.appendChild(btnn); 



            btn.addEventListener("click", async function () {

                await fetch("/deleteGames/" + user.name, { method: "DELETE" })
                window.location.reload();
                console.log("VOUS AVEZ CLIQUER");
            })

            
        }
    })

})





