import mongoose from "mongoose";
import { stringify } from "querystring";

const postSchema = mongoose.Schema({
    ttitle: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;