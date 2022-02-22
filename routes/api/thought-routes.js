const router = require('express').Router();
const { getAllThoughts, addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controllers');

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
.route('/:thoughtId/reactions')
.post(addReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;