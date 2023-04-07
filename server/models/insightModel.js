import mongoose from 'mongoose';

const insightSchema = mongoose.Schema({
    url: String,
    title: String,
    mediaUrls: {
        type: [String],
        default: [],
    },
    favoriteFlag: {
        type: Boolean,
        default: false,
    },
    wordCount : {
        type: Number,
        default: false,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var insightModel = mongoose.model('insightModel', insightSchema);

export default insightModel;