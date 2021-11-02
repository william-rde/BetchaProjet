
const bcrypt = require('bcryptjs')
const express = require('express');
const expressApp = express()
const mongoose = require('mongoose')
const session= require('express-session')
mongoose.connect("mongodb://localhost:27017/jeux",
    {
        useNewUrlParser: true,
        
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to mongo"))
    .catch((error) => console.log(error.message))


const utilisateur = new mongoose.Schema({
    username: String,
    password: String

});
// Création du Model pour les commentaires
let UtilisateurModel = mongoose.model('user', utilisateur);

expressApp.use(express.static("public"))
expressApp.use(express.urlencoded())


expressApp.use(session({
    secret:'key that will sign cookie',
    resave:false,
    saveUninitialized: false,
    
}))


async function CreateUser(username, password) {
    user = new UtilisateurModel({
        username: username,
        password: password
    })
    const result = await user.save();
    console.log(result);
}

expressApp.post("/register", async (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            CreateUser(req.body.username, hash);
            console.log(hash);


        })
        .catch((error) => res.status(500).json({ error }))

    res.redirect("/")
})
//let users = [];

expressApp.get("/register", (req, res) => {
    console.log("test");

    res.json(users)
})
expressApp.listen(3000);



const partie = new mongoose.Schema({
    name: String,
    Author: String,
    Enemy: String,
    State: String,
    nbJeton: Number,
    mise: String

});

let GameModel = mongoose.model('game', partie);

expressApp.post("/create", (req, res) => {
    console.log(req.body);
    req.body.nbJeton = 100;
    // On crée une instance du Model
    let maPartie = new GameModel(req.body);


    // On le sauvegarde dans MongoDB !
    maPartie.save(function (err) {
        if (err) { throw err; }
        console.log('Partie créer avec succès');



    });

    res.redirect("jeux.html")
})


const isAuth=(req,res,next)=> {
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/login')
    }
}

expressApp.post("/login", (req, res) => {
    // console.log(req.session)
    UtilisateurModel.findOne({ 'username': req.body.username }, function (err, userbdd) { 
        if (err) {
            console.log(err)
        } else if (userbdd === null || !userbdd) { //Verification si utilisateur existant
            console.log("Cet utilisateur n'existe pas")
            res.redirect("/")
        } else {
            UtilisateurModel.findOne({ 'username': req.body.username }, 'username password', function (err, userbdd) {
                if (err) return handleError(err);
                bcrypt.compare(req.body.password, userbdd.password, function (err, result) { //Vérification mot de passe
                    if (result) {
                        res.redirect("liste.html")
                    } if (!result) {

                        // console.log("Mot de passe incorrect")
                        req.session.isAuth=true;
                        res.redirect("/")
                    }
                });
            });
        }
    })
});



// expressApp.post("/play", (req, res) => {




//     // On le sauvegarde dans MongoDB !
//     mygame.update(function (err) {
//         if (err) { throw err; }
//         console.log('Mise avec succès');


//     });

//     res.redirect("liste.html")
// })

expressApp.get('/games', (req, res) => {
    GameModel.find({}, 'name nbJeton', function (err, bddgame) {
        res.json(bddgame)
    })
})


expressApp.delete("/deleteGames/:id", (req, res) => {
    console.log("id", req.params.id);
    GameModel.findOneAndDelete({'name':req.params.id},async function(err,bddgame){
       
    })
    //users.splice(req.params.id, 1)
    console.log("La partie a été supprimé");
    res.redirect("/")

})


