import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
const useUserInfo = () => {
  ////////////////////////////
  const { data: session, status: sessionStatus } = useSession()
  const [userInfo, setUserInfo] = useState(null)
  const [status, setStatus] = useState('loading')
  //////////////////////////////////////////////////////
  function getUserInfo() {
    ////////////////////////////////////////
    if (sessionStatus === 'loading') return
    ///////////////////////////////////////
    if (!session?.user?.id) {
      setStatus('authenticated')
      return
    }
    ///////////////////////////////////////////
    fetch(`/api/users?id=${session?.user?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setUserInfo(res?.user)
        setStatus('authenticated')
      })
  }
  //////////////////
  useEffect(() => {
    getUserInfo()
  }, [sessionStatus])
  /////////////////////////////
  return { userInfo, setUserInfo, status }
}

export default useUserInfo
