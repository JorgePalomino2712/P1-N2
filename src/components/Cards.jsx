import React from 'react'
import team from "../Arrays/team.json";

export default function Cards() {
    return (
        <>
            <div className={`grid grid-cols-2 md:grid-cols-3`}>
                {team.map((persona, i) => (
                    <div key={i} className={`p-4 ${i % 2 !== 0 ? "mt-10" : ""} md:${i % 2 !== 0 ? "mt-0" : ""}  md:${(i === 1 || i === 4) ? "mt-10" : ""}`}>
                        <div className={`flex `}>
                            <img src={`${persona.imagen}`} className='w-[90%]' alt="" />
                            <p className='rotate-360 [writing-mode:vertical-rl] text-xs'>{persona.rol}</p>
                        </div>
                        <p className='font-bold'>{persona.nombre}</p>
                    </div>
                ))}

            </div>
        </>
    )
}
