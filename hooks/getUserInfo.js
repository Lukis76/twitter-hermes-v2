import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
const useUserInfo = () => {
  ////////////////////////////
  const { data: session, status: sessionStatus } = useSession()
  const [userInfo, setUserInfo] = useState()
  const [status, setStatus] = useState('loading')
  //////////////////////////////////////////////////////
  function getUserInfo() {
    //////////////////////////////////////////
    if (sessionStatus === 'loading') return
    fetch(`/api/users?id=${session?.user.id}`)
      .then((res) => res.json())
      .then((res) => {
        setUserInfo(res)
        setStatus('done')
      })
  }
  //////////////////
  useEffect(() => {
    getUserInfo()
  }, [sessionStatus])
  /////////////////////////////
  return { userInfo, status }
}

export default useUserInfo
