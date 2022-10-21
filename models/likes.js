import { model,models, Schema, Types } from 'mongoose'

const likeSchema = new Schema(
  {
    author: { type: Types.ObjectId, ref: 'User' },
    post: { type: Types.ObjectId, ref: 'Post' },
  },
  {
    timestamps: true,
  }
)

const Like = models?.Like || model('Like', likeSchema)
export default Like
