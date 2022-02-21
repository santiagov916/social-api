const router = require('express').Router();
const { getAllThoughts, addThought, removeThought } = require('../../controllers/thought-controllers');

router
.route('/').get(getAllThoughts)

router
.route('/:userId').post(addThought);

router
.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;