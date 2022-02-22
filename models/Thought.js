const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(

    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        username: {
            type: String,
            ref: 'User',
             required: true
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

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 100,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;