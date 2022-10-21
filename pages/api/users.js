import { unstable_getServerSession } from 'next-auth'
import { initMongoose } from '../../lib/mongoose'
import User from '../../models/User'
import { authOptions } from './auth/[...nextauth]'

export default async function handle(req, res) {
  await initMongoose()
  const { id } = req.query
  const session = await unstable_getServerSession(req, res, authOptions)

  if (req.method === 'PUT') {
    const {userName} = req.body

    await User.findByIdAndUpdate(session?.user?.id, {
      username: userName
    })
  res.json('ok')
  }

  if (req.method === 'GET') {
    const user = await User.findById(id)
    res.json({user})
  }
}
