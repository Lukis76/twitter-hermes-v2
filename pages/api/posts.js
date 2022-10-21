// import {initMongoose}

import { unstable_getServerSession } from 'next-auth'
import { initMongoose } from '../../lib/mongoose'
import Like from '../../models/likes'
import Post from '../../models/Post'
import { authOptions } from './auth/[...nextauth]'
//
export default async function handler(req, res) {
  await initMongoose()
  const session = await unstable_getServerSession(req, res, authOptions)
  //////////////////////////////////////////////////////////////////////
  if (req.method === 'GET') {
    const { postId } = req.query
    ////////////////////////////
    if (postId) {
      const post = await Post.findById(postId).populate('author')
      res.json({ post })
    } else {
      const posts = await Post.find()
        .populate('author')
        .sort({ createdAt: -1 })
        .limit(20)
        .exec()
      /////////////////////////////////////////
      const postMeLiked = await Like.find({
        author: session?.user?.id,
        post: posts.map((el) => el._id),
      })
      const idMeLiked = postMeLiked.map((el) => el.post)
      ////////////////////////////////////
      res.json({
        posts,
        idMeLiked,
      })
    }
  }
  /////////////////////////////
  if (req.method === 'POST') {
    const { text } = req.body
    /////////////////////////////////
    const post = await Post.create({
      author: session.user.id,
      text,
    })
    ///////////////
    res.json(post)
  }
}
