import Image from 'next/future/image'
const Avatar = ({ img }) => {
  
  return (
    <div className='rounded-full overflow-hidden w-12'>
      {/* <img src={img} alt='avatar'/> */}
      <Image src={img} alt='avatar'
      width={50}
      height={50}
      quality={50}
      />

    </div>
  )
}

export default Avatar
