import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useUserInfo from '../hooks/getUserInfo'

const UserNameForm = () => {
  /*--------------------------------------------------------------------- */
  const { userInfo, status } = useUserInfo()
  const [userName, setUserName] = useState('')
  const router = useRouter()
  ////////////////////////////////////////////
  useEffect(() => {
    if (status === 'loading') return
    if (userName === '') {
      const defaultUserName = userInfo?.email?.split('@')[0]
      setUserName(defaultUserName?.replace(/[^a-z]+/gi, '')) // || userInfo?.name
    }
  }, [status])
  /////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('api/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName }),
    })
    router.reload()
  }
  //////////////////////////////////
  if (status === 'loading') return ''
  /*--------------------------------------------------------------------- */
  /*--------------------------------------------------------------------- */
  return (
    <div className='flex h-screen items-center justify-center'>
      <form className='text-center' onSubmit={handleSubmit}>
        <h1 className='text-xl text-white mb-2'>insert username</h1>
        <input
          onChange={(e) => setUserName(e.target.value)}
          className=' block mb-1 px-3 py-1 rounded-lg text-black'
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
