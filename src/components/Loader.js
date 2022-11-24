const Loader = ({isLoading}) => {
  return (
    <div className='flex justify-center'>
            {isLoading ? (<div className='absolute top-[40%] z-50 border px-[10px] py-[6px] text-white bg-gray-600 rounded-md'>
            Loading.....
          </div>) : ''}
          </div>
  )
}

export default Loader