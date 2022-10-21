import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
import Avatar from './avatar'
import ButtonsPost from './buttonPost'

const ContentPost = ({
  text,
  author,
  createdAt,
  _id,
  contLikes,
  meLiked,
  big = false,
}) => {
  return (
    <div>
      <div className='flex w-full'>
        <div>
          <Avatar img={author?.image} />
        </div>
        <div className='pl-2 grow'>
          <div>
            <span className='font-bold pr-1'>{author?.name}</span>
            {big && <br />}
            <span className='text-gray-700'>@{author?.username}</span>
            {createdAt && !big && (
              <span className='pl-1 text-gray-700'>
                <span> · </span>
                <ReactTimeAgo date={Date.parse(createdAt)}
                locale={'es-AR'}
                timeStyle='twitter' />
              </span>
            )}
          </div>
          {!big && (
            <div>
              <Link href={`/${author?.username}/status/${_id}`}>
                <a>{text}</a>
              </Link>
              <ButtonsPost
                idPost={_id}
                contLikes={contLikes}
                meLiked={meLiked}
              />
            </div>
          )}
        </div>
      </div>
      {big && (
        <div className='mt-2'>
          <Link href={`/${author?.username}/status/${_id}`}>
            <a>{text}</a>
          </Link>
          {createdAt && (
            <div className='text-zinc-500 text-smal'>
              {new Date(createdAt)
                .toISOString()
                .replace('T', ' ')
                .slice(0, -8)
                .split(' ')
                .reverse()
                .join(' · ')}
            </div>
          )}
          <ButtonsPost idPost={_id} contLikes={contLikes} meLiked={meLiked} />
        </div>
      )}
    </div>
  )
}

export default ContentPost
