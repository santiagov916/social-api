const router = require('express').Router();
const { getAllThoughts, addThought, removeThought, updateThought, addReaction, deleteReaction } = require('../../controllers/thought-controllers');

router
.route('/')
.get(getAllThoughts)

router
.route('/:userId')
.post(addThought);

router
.route('/:thoughtId')
.put(updateThought)
.delete(removeThought);

router
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/:reactionId')
.delete(deleteReaction);

module.exports = router;