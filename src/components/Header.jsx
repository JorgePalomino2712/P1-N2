import React, { useState } from 'react'


export default function Header() {

    const [visible, getVisible] = useState(false);

    function dark() {
        document.documentElement.classList.toggle("dark");
        getVisible(!visible);
    }
    return (
        <>
            <div className='flex flex-col p-7'>
                <button className='flex justify-end cursor-pointer' onClick={dark}><img src="./luna.png" className={`h-12 ${visible ? "hidden" : ""}`} alt="" /></button>
                <button className='flex justify-end cursor-pointer' onClick={dark}><img src="./sol.png" className={`h-12 ${visible ? "" : "hidden"}`} alt="" /></button>
                <div className='md:flex  md:items-start md:justify-between'>
                    <h1 className='flex text-3xl font-bold'>
                        The Creative crew
                    </h1>
                    <div className='flex flex-col mt-5 ml-5 mr-5 md:mt-0 md:w-1/3'>
                        <h2 className='font-bold'>Who we are</h2>
                        <p>We are team of creatively diverse, driven, innovative individuals working in various locations from the world</p>
                    </div>
                </div>
            </div>
        </>
    )
}
