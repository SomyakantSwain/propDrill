import React from 'react'

function Card({ data, handleClick, index }) {
    const { name, Artist, image, added } = data
    return (
        <div className='w-60 bg-zinc-100 p-4 pb-10 rounded-md relative  flex  gap-5'>
            <div className='w-20 h-20 bg-orange-600 overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover ' src={image} alt="" />
            </div>
            <div>
                <h3 className='text-xl leading-none font-semibold'>{name}</h3>
                <h4 className='text-sm mt-2'>{Artist}</h4>
            </div>
            <button onClick={() => handleClick(index)} className={`px-4 py-3 absolute bottom-0 right-1/2 whitespace-nowrap text-xs text-white translate-x-[50%] translate-y-[50%] rounded-full ${added ? "bg-teal-600" : "bg-orange-600"}`}>{added === false ? "AddToFavourite" : "Added"}</button>
        </div>
    )
}

export default Card