import { useEffect, useState } from 'react'
import useUserInfo from '../hooks/getUserInfo'

const UserNameForm = () => {
  /*--------------------------------------------------------------------- */
  const { userInfo, status } = useUserInfo()
  const [userName, setUserName] = useState('')
  ////////////////////////////////////////////
  useEffect(() => {
    if (status === 'loading') return
    if (userName === '') {
      const defaultUserName = userInfo?.email?.split('@')[0]
      setUserName(defaultUserName.replace(/[^a-z]+/gi, ''))
    }
  }, [status])
  /////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ userName })
  }
  //////////////////////////////////
  if (status === 'loading') return ''
  /*--------------------------------------------------------------------- */
  /*--------------------------------------------------------------------- */
  return (
    <div className='flex h-screen items-center justify-center'>
      <form className='text-center' onSubmit={handleSubmit}>
        <h1 className='text-xl mb-2'>insert username</h1>
        <input
          onChange={(e) => setUserName(e.target.value)}
          className=' block mb-1 px-3 py-1 rounded-lg'
          placeholder='userName'
          value={userName}
          type='text'
        />
        <button className='block bg-blue-600 w-full py-1 rounded-full'>
          Continue
        </button>
      </form>
    </div>
  )
  /*--------------------------------------------------------------------- */
}

export default UserNameForm
