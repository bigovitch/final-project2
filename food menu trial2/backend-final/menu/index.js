const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const config = require('./config');

const dishes = require('./models/dishes');
const cors = require ('cors');

// require('dotenv').config();

// const { auth, requiresAuth } = require('express-openid-connect');
// app.use(
//   auth({
//       authRequired:false ,// otherwise they will ask for authentication every route you go
//       auth0Logout:true ,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     secret: process.env.SECRET,
    
//   })
// );

// app.get('/' , (req,res)=>{
//     res.send(req.oidc.isAuthenticated() ? 'logged in' : ' logged out');
// });

// app.get('/profile' , requiresAuth() , (req,res)=>{
//     res.send(JSON.stringify(req.oidc.user));
// });

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

config.authenticate().then(function(){
    console.log('database connected');
}).catch(function(err){
    console.log(err);
});

app.get('/' , function(req , res) {
    dishes.findAll().then(function(result){
        res.send(result)
    }).catch(function(err){
        res.status(400).send(err);
    });
});
app.post('/', function (req, res) {
    let data = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        calories: req.body.calories,
        image:req.body.image
        
    };
    dishes.create(data).then(function (result) {
        res.redirect('/');

    }).catch(function (err) {
        res.status(400).send(err);
    });
});

// app.put('/id/:id', function (req, res) {
//     let id = req.params.id;
//     // find the dish that corresponds to the id on the url
//     dishes.findByPk(id).then(function (result) {
//         console.log(result);
//         result.title = req.body.title;
//         // save update to db
//         result.save().then(function () {
//             res.redirect('/')
//         }).catch(function (err) {
//             res.status(400).send(err);
//         });
//     }).catch(function (err) {
//         res.status(400).send(err);
//     });

// })
app.put("/dishes/update/id/:id", (req, res) => {
    dishes.findByPk(req.params.id).then((result) => {
        result.title = req.body.title;
        result.price = req.body.price;
        result.description = req.body.description;
        result.calories = req.body.calories;
        result.image = req.body.image;

        result.save().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not update dish");
        });
    }).catch(() => {
        res.status(500).send("Could not update dish");
    });
});

app.delete("/dishes/delete/id/:id", (req, res) => {
    dishes.findByPk(req.params.id).then((result) => {
        // result.title = req.body.title;
        // result.price = req.body.price;
        // result.description = req.body.description;
        // result.calories = req.body.calories;

        result.destroy().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not delete dish");
        });
    }).catch(() => {
        res.status(500).send("Could not delete dish");
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(` Server started on port ${PORT}`));