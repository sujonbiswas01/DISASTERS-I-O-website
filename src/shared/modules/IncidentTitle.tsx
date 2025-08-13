 import MapImg from '../../assets/svg/MapImg'

const IncidentTitle = () => {
  return (
    <div>
        <h2 className='text-black font-bold  text-[24px] py-2'>Let’s give the incident a title?</h2>
        <p className='text-secondary font-semibold text-sm'>Make a title that will easily identify the incidents</p>

        <div className='py-4'>
            <input type="text" className='bg-[#E4E4E7] w-[752px] py-2 px-1.5 shadow-sm outline-none ' placeholder='Add title here' name="" id="" />

        </div>
        <div>
            <h2 className='text-black font-bold  text-[24px] py-2'>Describe what happened during the incident?</h2>
            <p className='text-secondary font-semibold text-sm'>Share some information about the incident. The when, where, how. </p>
        </div>
        <div className='py-6'>
            <textarea name="" placeholder='Type here' className='w-[752px] outline-none shadow-sm bg-[#E4E4E7] h-[127px]' id=""></textarea>

        </div>

        <div className='py-4'>
            <h2 className='font-bold text-black text-[24px]'>Where’s the incident?</h2>
            <p className='text-secondary text-sm'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
            <div className='py-4'>
                <MapImg/>
            </div>
        </div>
    </div>
  )
}

export default IncidentTitle