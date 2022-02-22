const router = require('express').Router();
const { getAllThoughts, addThought, removeThought, addReaction, deleteReaction } = require('../../controllers/thought-controllers');

router
.route('/')
.get(getAllThoughts)

router
.route('/:userId')
.post(addThought);

router
.route('/:userId/:thoughtId')
.delete(removeThought);

router
.route('/:thoughtId/:reactionId')
.post(addReaction)
.delete(deleteReaction);

module.exports = router;