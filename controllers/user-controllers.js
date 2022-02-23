const { User } = require('../models');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get user by id
    getUserById({params}, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => {
            //if no user is found send a 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create new user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(404).json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findByIdAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // add a new friend
    addNewFriend({ params }, res) {
        User.findOneAndUpdate(
            {           
                _id: params.userId
            },
            {
                $push: { friends: params.friendId }
            },
            {
                new: true, runValidators: true
            }
        ).then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // delete a friend
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            {
                 _id: params.userId 
            },
            {
                $pull: {
                    friends: params.friendId
                }
            },
            {
                new: true
            }
            ).then(dbUserData => res.json(dbUserData))
             .catch(err => {
             console.log(err);
             res.status(400).json(err);
         })

}
};

module.exports = userController;