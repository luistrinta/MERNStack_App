const router = require('express').Router();
let User = require('../models/user.model');

//Faz request em '/'  e pesquisa por todos os Users(dados com o modelo User)
router.route('/').get((req,res) =>{
    User.find()//pesquisa pelos dados neste modelo
        .then(users => res.json(users))//obtem esses dados e retorna-os em json
        .catch(err => res.status(400).json('Error: '+ err));//retorna um erro e diz que o estado foi de erro(400)
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(()=> res.status(200).json('User added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;