import { useState } from 'react'
import { SvgLike } from '../assets/svgLike'
import { SvgReHiss } from '../assets/svgReHiss'
import { SvgReply } from '../assets/svgReply'
import { SvgShare } from '../assets/svgShare'

const ButtonsPost = ({
  idPost,
  contLikes: contLikeDefault = 0,
  meLiked: meLikedDefault = false,
}) => {
  const [contLike, setContLike] = useState(contLikeDefault)
  const [meLiked, setMeLiked] = useState(meLikedDefault)
  /////////////////////////////////////////////////////////
  const like = () => {
    fetch('/api/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idPost }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.like) {
          setContLike((state) => state + 1)
          setMeLiked(true)
        } else {
          setContLike((state) => state - 1)
          setMeLiked(false)
        }
      })
  }

  return (
    <div className='flex justify-between max-w-sm mr-2 text-sm mt-1 text-zinc-500'>
      <button className='flex items-center'>
        <SvgReply className='w-7 h-7 p-1 mr-1 ' />
        <span> 0 </span>
      </button>
      <button className='flex items-center'>
        <SvgReHiss className='w-7 h-7 p-1 mr-1 ' />
        <span> 0 </span>
      </button>
      <button
        onClick={like}
        className={`flex items-center ${
          meLiked ? 'text-red-500 fill-red-500' : ''
        }`}
      >
        <SvgLike className='w-7 h-7 p-1 mr-1 fill-inherit' />
        <span>{contLike}</span>
      </button>
      <button className='flex items-center'>
        <SvgShare className='w-7 h-7 p-1 mr-1 ' />
      </button>
    </div>
  )
}

export default ButtonsPost
