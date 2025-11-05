import React from 'react'
import team from "../Arrays/team.json";

export default function Cards() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {team.map((persona, i) => {
                    let base = "p-4";
                    let mobile = i % 2 !== 0 ? "mt-10" : "";
                    let desktop = "";

                    if (i === 1 || i === 4) desktop = "md:translate-y-2";
                    else if (i % 2 !== 0) desktop = "md:mt-0";

                    return (
                        <div key={i} className={`${base} ${mobile} ${desktop}`}>
                            <div className="flex">
                                <img src={persona.imagen} className="w-[90%]" alt="" />
                                <p className="rotate-360 [writing-mode:vertical-rl] text-xs">
                                    {persona.rol}
                                </p>
                            </div>
                            <p className="font-bold">{persona.nombre}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
