import { useEffect, useState } from 'react'
import PostForm from '../components/postForm'
import UserNameForm from '../components/userNameForm'
import useUserInfo from '../hooks/getUserInfo'
import axios from 'axios'
import ContentPost from '../components/contentPost'
//
const Home = () => {
  /*--------------------------------------------- */
  const { userInfo, status } = useUserInfo()
  const [posts, setPosts] = useState([])
  //////////////////////////////////////////////
  const fetchPosts = () => {
    fetch('api/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res))
  }
  //////////////////
  useEffect(() => {
    fetchPosts()
  }, [])
  //////////////////////////////////////////////
  if (status === 'loading') {
    return 'loading user info'
  }
  ///////////////////////////////
  if (!userInfo.user.username) {
    return <UserNameForm />
  }
  /*--------------------------------------------- */
  console.log('holis por aca estamos => ', posts)
  /*--------------------------------------------- */
  return (
    <div className='max-w-xl mx-auto border-l border-r border-slate-700 min-h-screen'>
      <h1 className='text-xl font-bold text-white p-4'>Home</h1>
      <PostForm onPost={() => fetchPosts()} />
      <div className='text-white'>
        All Posts :{' '}
        {posts.length &&
          posts.map((el) => (
            <div key={el._id} className='border-t border-gray-70 p-5'>
              <ContentPost {...el} />
            </div>
          ))}
      </div>
    </div>
  )
  /*--------------------------------------------- */
}
export default Home
