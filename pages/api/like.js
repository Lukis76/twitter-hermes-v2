import { unstable_getServerSession } from 'next-auth'
import { initMongoose } from '../../lib/mongoose'
import Like from '../../models/likes'
import Post from '../../models/Post'
import { authOptions } from './auth/[...nextauth]'
/*--------------------------------------------------------------------- */
/*--------------------------------------------------------------------- */
const upadateLikes = async (id) => {
  const post = await Post.findById(id)
  post.contLikes = await Like.countDocuments({ post: id })
  await post.save()
}
/*--------------------------------------------------------------------- */
/*--------------------------------------------------------------------- */
export default async function handler(req, res) {
  await initMongoose()
  const session = await unstable_getServerSession(req, res, authOptions)
  //////////////////////////////////////////////////////////////////////
  const { idPost } = req.body
  const userId = session.user.id
  const stateLike = await Like.findOne({ author: userId, post: idPost })
  //////////////////////////////////////////////////////////////////////
  if (stateLike) {
    await stateLike.remove()
    upadateLikes(idPost)
    res.json(null)
  } else {
    const like = await Like.create({ author: userId, post: idPost })
    upadateLikes(idPost)
    res.json({ like })
  }
}
/*--------------------------------------------------------------------- */
/*--------------------------------------------------------------------- */

