const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addNewFriend,
    removeFriend
} = require('../../controllers/user-controllers');

router
.route('/')
.get(getAllUsers)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/friends/:friendId')
.post(addNewFriend)
.delete(removeFriend);

module.exports = router;