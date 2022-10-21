import { useEffect, useState } from 'react'
import PostForm from '../components/postForm'
import UserNameForm from '../components/userNameForm'
import useUserInfo from '../hooks/getUserInfo'
import ContentPost from '../components/contentPost'
import Layout from '../components/layout'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//
const Home = () => {
  /*--------------------------------------------- */
  const { data: session } = useSession()
  const { userInfo, setUserInfo, status } = useUserInfo()
  const [posts, setPosts] = useState([])
  const [idMeLiked, setIdMeliked] = useState([])
  const router = useRouter()
  //////////////////////////////////////////////
  const fetchPosts = () => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.posts)
        setIdMeliked(res.idMeLiked)
      })
  }
  //////////////////////////////////////////////
  const logout = async () => {
    setUserInfo(null)
    await signOut()
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
  if (userInfo && !userInfo?.username) {
    return <UserNameForm></UserNameForm>
  }
  if (!userInfo) {
    router.push('/login')
    return 'no user info'
  }
  /*--------------------------------------------- */
  /*--------------------------------------------- */
  return (
    <Layout>
      <h1 className='text-xl font-bold text-white p-4'>Home</h1>
      <PostForm onPost={fetchPosts} />
      <div className='text-white'>
        {posts.length &&
          posts.map((el) => (
            <div key={el._id} className='border-t border-gray-70 p-5'>
              <ContentPost {...el} meLiked={idMeLiked.includes(el._id)} />
            </div>
          ))}
      </div>
      {userInfo && (
        <div className='p-5 text-center border-0'>
          <button
            onClick={logout}
            className='bg-zinc-300 text-black px-5 py-1 rounded-full'
          >
            Logout
          </button>
        </div>
      )}
    </Layout>
  )
  /*--------------------------------------------- */
}
export default Home
