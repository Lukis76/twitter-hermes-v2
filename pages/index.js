import UserNameForm from '../components/userNameForm'
import useUserInfo from '../hooks/getUserInfo'
//
const Home = () => {
  /*--------------------------------------------- */
  const { userInfo, status } = useUserInfo()
  //////////////////////////////////////////////
  if (status === 'loading') {
    return 'loading user info'
  }
  ///////////////////////////////
  if (!userInfo.user.username) {
    return <UserNameForm />
  }
  /*--------------------------------------------- */
  /*--------------------------------------------- */
  return (
    <div className='max-w-xl mx-auto border-l border-r border-slate-700 min-h-screen'>
      <h1 className='text-xl font-bold text-white p-4'>Home</h1>
      <form className='mx-5'>
        <div className='flex'>
          <div>
            <div className='rounded-full overflow-hidden w-12'>
              <img src={userInfo.user.image} alt='avatar' />
            </div>
          </div>
          <div className='grow pl-4'>
            <textarea
              className='w-full p-2 bg-transparent text-yellow-50'
              placeholder={"What's happening?"}
            />
            <div className='text-right'>

            <button className='bg-blue-600 text-white px-5 py-0.5 rounded-full font-semibold' >hiss</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
  /*--------------------------------------------- */
}
export default Home
