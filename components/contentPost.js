import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
import Avatar from './avatar'

const ContentPost = ({ text, author, createdAt, _id }) => {
  return (
    <div className='flex'>
      <div>
        <Avatar img={author.image} />
      </div>
      <div className='pl-2'>
        <div>
          <span className='font-bold'>{author.name}</span>
          <span className='pl-1 text-gray-700'>@{author.username}</span>
          <span className='text-gray-700'> ·</span>
          {createdAt && (
            <span className='pl-1 text-gray-700'>
              <ReactTimeAgo date={createdAt} timeStyle='twitter'/>
            </span>
          )}
        </div>

        <Link href={`/${author.username}/status/${_id}`}>{text}</Link>
      </div>
    </div>
  )
}

export default ContentPost
