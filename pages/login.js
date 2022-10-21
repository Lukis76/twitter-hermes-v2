import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//
//
export default function Login({ providers }) {
  /*--------------------------------------------- */
  const { data: session, status } = useSession()
  const router = useRouter()
  //////////////////////////
  if (status === 'loading') {
    return ''
  }
  if (session) {
    router.push('/')
  }
  /////////////////////////////////////////
  /*--------------------------------------------- */
  /*--------------------------------------------- */
  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        {Object.values(providers).map((el, index) => (
          <div key={index}>
            <button
              className='bg-light px-5 py-2 m-2 text-black rounded-lg font-bold'
              onClick={async () => {
                await signIn(el.id)
              }}
            >
              Sing In {el.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
  /*--------------------------------------------- */
}
//
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
