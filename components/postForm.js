import { useState } from 'react'
import useUserInfo from '../hooks/getUserInfo'
import Avatar from './avatar'

const PostForm = ({onPost}) => {
  const {userInfo, status} = useUserInfo()
  const [text, setText] = useState('')

if(status === 'loading') return ''

const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text})
  })
  setText('')
  if(onPost) onPost()
  console.log({text})
}

  return (
    <form className='mx-5' onSubmit={handleSubmit}>
      <div className='flex'>
        <div>
          <Avatar img={userInfo.user.image} />
        </div>
        <div className='grow pl-4'>
          <textarea
            className='w-full p-2 bg-transparent text-yellow-50'
            placeholder={"What's happening?"}
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <div className='text-right border-t border-gray-600 pt-2 pb-2' >
            <button className='bg-blue-600 text-white px-5 py-0.5 rounded-full font-semibold'>
              hiss
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PostForm
