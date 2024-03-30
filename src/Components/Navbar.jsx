import React from 'react'

function Navbar({ data }) {
    return (
        <div className='w-full  flex justify-between  px-20 py-3'>
            <h3 className='text-orange-500 text-xl'>Dev</h3>
            <div className='flex gap-5 justify-around text-sm text-white bg-orange-600 p-2 px-3 rounded-full'>
                <h3 >Favourite</h3>
                <h4 >{data.filter(item => item.added).length}</h4>
            </div>
        </div >
    )
}

export default Navbar