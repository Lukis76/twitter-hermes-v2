const Avatar = ({ img }) => {
  return (
    <div className='rounded-full overflow-hidden w-12'>
      <img src={img} alt='avatar' />
    </div>
  )
}

export default Avatar
