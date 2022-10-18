import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const PostPage = () => {
  const router = useRouter()

  const { id } = router.query
  const [post, setPost] = useState()
  
  useEffect(() => {
    if (!id) return
    ///////////////////////////
    fetch(`api/posts?id=${id}`)
    .then((res) => res.json())
    .then((data) => setPost(data))
  }, [id])
  
  console.log("🚀 ~ file: [id].js ~ line 9 ~ PostPage ~ post", post)
  return <div className='text-white'>PostPage, helo lucas</div>
}

export default PostPage
