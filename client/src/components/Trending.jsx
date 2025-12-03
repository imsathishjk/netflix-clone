import React from 'react'

const Trending = ({ images }) => {


    return (

        <div className='max-w-6xl mx-auto w-full pt-12'>
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold'>Trending Now</h1>
            <div className='mt-12 flex gap-5 overflow-x-scroll no-scroll'>
                {
                    images.map((image, i) => {
                        return (
                            <img key={i} src={image} className='hover:scale-105 w-52 rounded-md transition-all duration-300 ease-in-out hover:shadow hover:shadow-gray-600' alt="" />
                            // <>

                            //     {/* <p key={i+1} className='text-3xl font-bold text-red-500'>{i + 1}</p> */}
                            // </>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default Trending
