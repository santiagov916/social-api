const { Thought, User } = require('../models');

const thoughtControllers = {
    
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({
            path: 'user',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(thoughtDb => res.json(thoughtDb))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },

    getUserById({params}, res) {
        Thought.findOne({ _id: params.id })
        .populate({
            path: 'user',
            select: '-__v'
        })
        .select('-__v')
        .then(thoughtDb => res.json(thoughtDb))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },

    createThought({ body }, res) {
        Thought.findByIdAndUpdate({ _id: params.id }, body, { new: true })
        .then(thoughtDb => {
            if (!thoughtDb) {
                res.status(404).json({ message: 'No thought found' });
                return;
            }
        })
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        })
    },


}