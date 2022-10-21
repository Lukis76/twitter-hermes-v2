import { model, models, Schema, Types } from 'mongoose'
//
const PostSchema = new Schema(
  {
    author: { type: Types.ObjectId, ref: 'User' },
    text: String,
    contLikes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)
//
const Post = models?.Post || model('Post', PostSchema)
export default Post
