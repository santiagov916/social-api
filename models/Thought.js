const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionText: {
            type: String,
            required: true,
            min: 1,
            max: 300,
        },
        username: {
            type: String,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 100,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;