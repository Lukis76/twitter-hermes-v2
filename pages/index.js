import { useSession } from 'next-auth/react'
import UserNameForm from '../components/userNameForm'
import useUserInfo from '../hooks/getUserInfo'

const Home = () => {
  /*--------------------------------------------- */
  const { userInfo, status } = useUserInfo()
  //////////////////////////////////////////////
  if (status === 'loading') {
    return 'loading user info'
  }
  if (!userInfo.username) {
    return <UserNameForm />
  }
  /*--------------------------------------------- */
  /*--------------------------------------------- */
  return (
    <div>
      <h1>testing Home</h1>
    </div>
  )
  /*--------------------------------------------- */
}
export default Home
