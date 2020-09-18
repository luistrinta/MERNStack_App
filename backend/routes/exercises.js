const router = require('express').Router();
let Exercise = require('../models/exercise.model');


router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.status(200).json(exercises))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.status(200).json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
//Neste caso pesquisamos os exercises pelo id atribuido ao mesmo pelo mongoDB.
// Simplesmente realizamos a pesquisa da mesma forma, contudo ao inves de usarmos o find,
// usamos o findById onde especificamos o id do objecto
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.status(200).json(exercise))
        .catch(err => res.status(400).json('Error :' + err));
});

//Neste caso pesquisamos o exercicio pelo id e eliminamo-lo com o findByIdAndDelete
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error :' + err));
});

//Neste caso fazemos um pedido post através de um id específico e, de seguida reatribuimos os valores a
// esse objeto específico com a nova infomação

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise =>{
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(()=>res.status(200).json('Exercise updated.'))
                .catch(err=> res.status(400).json('Error :'+err));
        })

        .catch(err => res.status(400).json('Error :' + err));
});

module.exports = router;