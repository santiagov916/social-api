const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, removeThought, updateThought, addReaction, deleteReaction } = require('../../controllers/thought-controllers');

router
.route('/')
.get(getAllThoughts);

router
.route('/:userId')
.post(addThought);

router
.route('/:id')
.put(updateThought)
.delete(removeThought)
.get(getThoughtById);

router
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/:reactionId')
.delete(deleteReaction);

module.exports = router;