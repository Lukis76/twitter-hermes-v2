import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ContentPost from '../../../components/contentPost'
import Layout from '../../../components/layout'

const PostPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState()
  //////////////////////////////////
  useEffect(() => {
    if (!id) return
    ///////////////////////////
    fetch(`/api/posts?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data.post))
    //////////////////////////////
  }, [id])

  return (
    <Layout className='text-white'>
      <div className='px-5 py-2'>
        <Link href={'/'}>
          <div className='flex mb-2 cursor-pointer text-white font-bold'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
              />
            </svg>
            Hiss
          </div>
        </Link>
        {post?._id && <ContentPost {...post} big={true} />}
      </div>
    </Layout>
  )
}

export default PostPage
